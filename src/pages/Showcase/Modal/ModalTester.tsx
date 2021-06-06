import modalActions from "@store/modal/modal.actions"
import { useDispatch } from "@store/useStore"

import usePreloadModal from "@modals/usePreload"

import * as S from "./ModalTester.style"

const ModalTester = () => {
  const dispatch = useDispatch()

  // preload some modal which has mounting animation
  usePreloadModal("Slideup")
  usePreloadModal("Information")

  function openAlert() {
    dispatch(modalActions.openModal({ type: "Alert", props: { title: "You need to know", message: "This is Alert" } }))
  }

  function openConfirm() {
    dispatch(
      modalActions.openModal({
        type: "Confirm",
        props: { message: "Do you wanna close this?", confirmText: "YES", cancelText: "close it!" },
      })
    )
  }

  function openPreventDimClick() {
    dispatch(
      modalActions.openModal({
        type: "Alert",
        props: { title: "Should Click Button", message: "Background click doesn't close this modal" },
        overlayOptions: { closeOnOverlayClick: false },
      })
    )
  }

  function openSlideup() {
    dispatch(
      modalActions.openModal({
        type: "Slideup",
        props: { message: "Ta da!" },
        overlayOptions: { dim: false, closeOnOverlayClick: false, preventScroll: false, closeDelay: 500 },
      })
    )
  }

  function openSmallInfo() {
    dispatch(
      modalActions.openModal({
        type: "Information",
        props: { text: "tiny small info. scroll to dismiss" },
        overlayOptions: { dim: false, closeOnOverlayClick: false, preventScroll: false, closeDelay: 300 },
      })
    )
  }

  return (
    <S.ModalTester>
      <S.OpenModalButton onClick={openAlert}>Basic Alert</S.OpenModalButton>
      <S.OpenModalButton onClick={openConfirm}>Basic Confirm</S.OpenModalButton>
      <S.OpenModalButton onClick={openPreventDimClick}>Not closeable with background click</S.OpenModalButton>
      <S.OpenModalButton onClick={openSlideup}>Modal with animation</S.OpenModalButton>
      <S.OpenModalButton onClick={openSmallInfo}>Auto closed on scroll</S.OpenModalButton>
    </S.ModalTester>
  )
}

export default ModalTester
