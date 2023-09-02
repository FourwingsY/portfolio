import { BasicModalProps } from "@reactleaf/modal"
import { useEffect } from "react"

import { Taste } from "@/lib/constants/tastes"

import * as CS from "../common.style"
import * as S from "./MoleInformation.style"

interface Props extends BasicModalProps {
  taste: Taste
}
const MoleInformation: React.FC<Props> = ({ visible, taste, close }) => {
  useEffect(() => {
    const timer = window.setTimeout(close, 4000)
    return () => window.clearTimeout(timer)
  }, [])

  return (
    <S.MoleInformation visible={visible} onClick={close}>
      <S.Title>
        {taste.icon}
        {taste.name}
      </S.Title>
      <CS.Body>{taste.content}</CS.Body>
    </S.MoleInformation>
  )
}

export default MoleInformation
