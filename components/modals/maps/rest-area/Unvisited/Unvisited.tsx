import { BasicModalProps } from "@reactleaf/modal"
import { useEffect } from "react"

import * as S from "./Unvisited.style"

interface Props extends BasicModalProps {
  name: string
}
export default function Unvisited({ name, visible, close }: Props) {
  // autoclose like toast
  useEffect(() => {
    setTimeout(close, 2500)
  }, [])
  return (
    <S.Slideup $visible={visible} onClick={close}>
      <S.Message>{name}는 아직 방문해보지 못한 곳입니다.</S.Message>
    </S.Slideup>
  )
}
