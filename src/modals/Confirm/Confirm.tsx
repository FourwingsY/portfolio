import { BasicModalProps } from "@modals/types"

import * as CS from "../common.style"
import * as S from "./Confirm.style"

interface Props extends BasicModalProps {
  title?: string
  message: string
  confirmText?: string
  cancelText?: string
}
const Confirm: React.FC<Props> = ({ title, message, confirmText = "확인", cancelText = "취소", close }) => {
  return (
    <CS.Modal>
      {title && <CS.Title>{title}</CS.Title>}
      <CS.Body>
        <CS.Message noTitle={!title}>{message}</CS.Message>
      </CS.Body>
      <CS.Buttons>
        <S.ConfirmButton onClick={close}>{confirmText}</S.ConfirmButton>
        <S.CancelButton onClick={close}>{cancelText}</S.CancelButton>
      </CS.Buttons>
    </CS.Modal>
  )
}

export default Confirm
