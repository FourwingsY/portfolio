import { BasicModalProps } from "@modals/types"

interface Props extends BasicModalProps {
  message: string
}
const Alert: React.FC<Props> = ({ message }) => {
  return <span>{message}</span>
}

export default Alert
