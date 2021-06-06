import { useRouter } from "next/router"
import { useEffect, useState, cloneElement } from "react"

import modalActions from "@store/modal/modal.actions"
import { EnhancedModalPayload, OverlayOptions } from "@store/modal/modal.types"
import { useDispatch, useSelector } from "@store/useStore"

import * as S from "./overlay.style"
import { ModalType } from "./types"

const ModalContainer = () => {
  const dispatch = useDispatch()
  const router = useRouter()

  // 뒤로가기 시 모달 닫기
  useEffect(() => {
    router.beforePopState(() => {
      dispatch(modalActions.closeAll())
      return true
    })
  }, [])

  const openedModals = useSelector((state) => state.modal)

  return (
    <div id="modal-root">
      {openedModals.map((modalState) => (
        <OpenedModal key={modalState.id} {...modalState} />
      ))}
    </div>
  )
}
interface ImportedModule {
  default: React.ComponentType
}
const OpenedModal: React.FC<EnhancedModalPayload<ModalType>> = ({ type, id, props, overlayOptions }) => {
  const dispatch = useDispatch()
  const [Component, setComponent] = useState<React.ComponentType>()

  // asynchronously import modal file: for reduce bundle size.
  // this may trigger initial openModal could be delayed.
  // if you don't want to be delayed, use usePreloadModal hook
  useEffect(() => {
    void import(`./${type}`).then((modal: ImportedModule) => {
      setComponent(() => modal.default)
    })
  }, [type])

  const close = () => dispatch(modalActions.closeModal({ id }))

  if (!Component) return null
  return (
    <ModalOverlay {...overlayOptions} closeSelf={close}>
      <Component {...props} />
    </ModalOverlay>
  )
}

interface OverlayProps extends OverlayOptions {
  closeSelf: () => void
  children: React.ReactElement
}
const ModalOverlay: React.FC<OverlayProps> = ({
  dim = true,
  closeDelay = 0,
  closeOnOverlayClick = true,
  preventScroll = true,
  children,
  closeSelf,
}) => {
  // animated close
  const [visible, setVisible] = useState(false)
  useEffect(() => setVisible(true), [])

  function delayedClose() {
    setVisible(false)
    setTimeout(closeSelf, closeDelay)
  }

  const onClick = (e: React.MouseEvent) => {
    if (!closeOnOverlayClick) return
    if (e.target === e.currentTarget) {
      delayedClose()
    }
  }

  useEffect(() => {
    if (preventScroll) {
      document.body.style.overflow = "hidden"
      return () => {
        document.body.style.overflow = "initial"
      }
    }
  }, [])

  return (
    <S.Overlay dim={dim} visible={visible} onClick={onClick} style={{ transitionDuration: `${closeDelay}ms` }}>
      {cloneElement(children, { close: delayedClose, visible })}
    </S.Overlay>
  )
}
export default ModalContainer
