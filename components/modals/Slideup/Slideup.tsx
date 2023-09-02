import { BasicModalProps } from "@reactleaf/modal"

import * as CS from "../common.style"
import * as S from "./Slideup.style"

interface Props extends BasicModalProps {
  message: string
}
const Slideup: React.FC<Props> = ({ visible, message, close }) => {
  return (
    <S.Slideup visible={visible}>
      <CS.Buttons>
        <CS.ModalButton onClick={close}>확인</CS.ModalButton>
      </CS.Buttons>
      <CS.Body>
        <CS.Message>{message}</CS.Message>
      </CS.Body>
    </S.Slideup>
  )
}

export default Slideup
