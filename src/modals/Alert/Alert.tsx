import { BasicModalProps } from "@modals/types"

import * as CS from "../common.style"

interface Props extends BasicModalProps {
  title?: string
  message: string
}
const Alert: React.FC<Props> = ({ title, message, close }) => {
  return (
    <CS.Modal>
      {title && <CS.Title>{title}</CS.Title>}
      <CS.Body>
        <CS.Message noTitle={!title}>{message}</CS.Message>
      </CS.Body>
      <CS.Buttons>
        <CS.ModalButton onClick={close}>확인</CS.ModalButton>
      </CS.Buttons>
    </CS.Modal>
  )
}

export default Alert
