import * as S from "./ModalTester.style"

const ModalTester = () => {
  return (
    <S.ModalTester>
      <S.OpenModalButton>Basic Alert</S.OpenModalButton>
      <S.OpenModalButton>Basic Confirm</S.OpenModalButton>
      <S.OpenModalButton>Not closeable with background click</S.OpenModalButton>
      <S.OpenModalButton>Modal with animation</S.OpenModalButton>
      <S.OpenModalButton>Auto closed on scroll</S.OpenModalButton>
    </S.ModalTester>
  )
}

export default ModalTester
