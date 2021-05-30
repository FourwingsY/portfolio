import { openModal } from "@store/modal/modal.actions"
import { useDispatch } from "@store/useStore"

import * as S from "./ModalTester.style"

const ModalTester = () => {
  const dispatch = useDispatch()

  function openAlert() {
    dispatch(openModal("Alert")({ props: { title: "You need to know", message: "This is Alert" } }))
  }

  function openConfirm() {
    dispatch(
      openModal("Confirm")({
        props: { message: "Do you wanna close this?", confirmText: "YES", cancelText: "close it!" },
      })
    )
  }

  function openPreventDimClick() {
    dispatch(
      openModal("Alert")({
        props: { title: "Should Click Button", message: "Background click doesn't close this modal" },
        overlayOptions: { closeOnOverlayClick: false },
      })
    )
  }

  function openSlideup() {
    dispatch(
      openModal("Slideup")({
        props: { message: "Ta da!" },
        overlayOptions: { dim: false, closeOnOverlayClick: false, closeDelay: 500 },
      })
    )
  }

  function openSmallInfo() {
    dispatch(
      openModal("Information")({
        props: { message: "tiny small info. scroll to dismiss" },
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
