import { BasicModalProps } from "@modals/types"

interface Props extends BasicModalProps {
  title: string
}
const Confirm: React.FC<Props> = ({ title }) => {
  return <span>{title}</span>
}

export default Confirm
