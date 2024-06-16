import { BasicModalProps } from "@reactleaf/modal"
import { RestAreaGroupRecord } from "app/projects/maps/rest-area/model"
import { useEffect } from "react"

import * as S from "./Unvisited.style"

interface Props extends BasicModalProps {
  groupRecord: RestAreaGroupRecord
}
export default function Unvisited({ groupRecord, visible, close }: Props) {
  // autoclose like toast
  useEffect(() => {
    setTimeout(close, 2500)
  }, [])
  return (
    <S.Slideup $visible={visible} onClick={close}>
      <S.Message>{groupRecord.name}휴게소는 아직 방문해보지 못한 곳입니다.</S.Message>
    </S.Slideup>
  )
}
