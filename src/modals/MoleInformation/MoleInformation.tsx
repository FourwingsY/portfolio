import { useEffect } from "react"

import { BasicModalProps } from "@modals/types"

import * as CS from "../common.style"
import * as S from "./MoleInformation.style"

interface Props extends BasicModalProps {
  text: React.ReactNode
}
const MoleInformation: React.FC<Props> = ({ visible, text, close }) => {
  useEffect(() => {
    const timer = window.setTimeout(close, 4000)
    return () => window.clearTimeout(timer)
  }, [])

  return (
    <S.MoleInformation visible={visible} onClick={close}>
      <CS.Body>{text}</CS.Body>
    </S.MoleInformation>
  )
}

export default MoleInformation
