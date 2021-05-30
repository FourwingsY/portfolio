import { openModal } from "@store/modal/modal.actions"
import { useDispatch } from "@store/useStore"

import * as S from "./ModalTester.style"

const ModalTester = () => {
  const dispatch = useDispatch()

  function openAlert() {
    dispatch(openModal("Alert")({ props: { message: "22" } }))
  }
  return (
    <S.ModalTester>
      <S.OpenModalButton onClick={openAlert}>Basic Alert</S.OpenModalButton>
      <S.OpenModalButton>Basic Confirm</S.OpenModalButton>
      <S.OpenModalButton>Not closeable with background click</S.OpenModalButton>
      <S.OpenModalButton>Modal with animation</S.OpenModalButton>
      <S.OpenModalButton>Auto closed on scroll</S.OpenModalButton>
    </S.ModalTester>
  )
}

export default ModalTester
