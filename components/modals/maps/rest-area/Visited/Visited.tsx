import { BasicModalProps } from "@reactleaf/modal"
import { RestAreaGroupRecord, RestAreaRecord } from "app/projects/maps/rest-area/model"
import Image from "next/image"

import * as S from "./Visited.style"

interface Props extends BasicModalProps {
  groupRecord: RestAreaGroupRecord
}

export default function Visited({ groupRecord }: Props) {
  return (
    <S.Visited>
      <S.Title>{groupRecord.name}휴게소</S.Title>
      {groupRecord.children.map((record) => (
        <VisitedRestArea key={record.id} record={record} />
      ))}
    </S.Visited>
  )
}

export function VisitedRestArea({ record }: { record: RestAreaRecord }) {
  if (record.visited === false) {
    return (
      <S.VisitedRestArea>
        <S.Subtitle>
          {record.direction}
          <S.VisitedAt> - </S.VisitedAt>
        </S.Subtitle>
      </S.VisitedRestArea>
    )
  }
  return (
    <S.VisitedRestArea>
      <S.Subtitle>
        {record.direction}
        <S.VisitedAt>{record.visited.visitedAt}</S.VisitedAt>
      </S.Subtitle>
      <S.Photos>
        {record.visited.photos.map((img, i) => (
          <Image
            src={`/images/projects/maps/${img}`}
            width={1024}
            height={768}
            key={img}
            alt={`${record.direction}-${i}`}
          />
        ))}
      </S.Photos>
      <S.Memo>{record.visited.memo}</S.Memo>
    </S.VisitedRestArea>
  )
}
