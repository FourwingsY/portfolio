import { BasicModalProps } from "@reactleaf/modal"
import { RestAreaVisitedRecord } from "app/projects/maps/rest-area/model"
import Image from "next/image"

import * as S from "./Visited.style"

interface Props extends BasicModalProps {
  name: string
  groupRecord: RestAreaVisitedRecord
}

export default function Visited({ name, groupRecord }: Props) {
  return (
    <S.Visited>
      <S.Title>{name}</S.Title>
      <S.VisitedRestArea>
        <S.Subtitle>
          <S.VisitedAt>{groupRecord.visitedAt}</S.VisitedAt>
        </S.Subtitle>
        <S.Photos>
          {groupRecord.photos.map((img, i) => (
            <Image
              src={`/images/projects/maps/${img}`}
              width={1024}
              height={768}
              key={img}
              alt={`${groupRecord}-${i}`}
            />
          ))}
        </S.Photos>
        <S.Memo>{groupRecord.memo}</S.Memo>
      </S.VisitedRestArea>
    </S.Visited>
  )
}
