import { BasicModalProps } from "@modals/types"

import * as CS from "../common.style"

interface Props extends BasicModalProps {
  title?: string
  message: string
  confirmText?: string
  onConfirm?(): void
}
const Alert: React.FC<Props> = ({ title, message, confirmText = "확인", onConfirm, close }) => {
  function handleConfirm() {
    onConfirm?.()
    close()
  }
  return (
    <CS.Modal>
      {title && <CS.Title>{title}</CS.Title>}
      <CS.Body>
        <CS.Message noTitle={!title}>{message}</CS.Message>
      </CS.Body>
      <CS.Buttons>
        <CS.ModalButton onClick={handleConfirm}>{confirmText}</CS.ModalButton>
      </CS.Buttons>
    </CS.Modal>
  )
}

export default Alert
