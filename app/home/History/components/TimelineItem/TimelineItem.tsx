"use client"

import { useEffect, useRef, useState } from "react"

import { Product } from "@/lib/constants/career"

import Duration from "../Duration"
import * as S from "./TimelineItem.style"

interface Props {
  item: Product
  defaultActive?: boolean
}
const TimelineItem: React.FC<Props> = ({ item, defaultActive = false }) => {
  const [active, setActive] = useState(defaultActive)
  const [heights, setHeights] = useState<[number, number]>([0, 0])
  const detectorClosed = useRef<HTMLDivElement>(null)
  const detectorOpened = useRef<HTMLDivElement>(null)

  function openLink() {
    if (item.link) {
      window.open(item.link)
    }
  }

  // re-calculate when responsive context changes
  useEffect(() => {
    setHeights([detectorClosed.current?.clientHeight || 0, detectorOpened.current?.clientHeight || 0])
  })

  const [closedHeight, openedHeight] = heights

  return (
    <S.TimelineItem>
      <S.BorderBox>
        <S.ShortDescription>
          <Duration duration={item.duration} />
          <S.ProductName hasLink={!!item.link} onClick={openLink}>
            {item.productName}
            <S.ProductStatusBadge status={item.status} />
          </S.ProductName>
          <S.Company>{item.company}</S.Company>
        </S.ShortDescription>
        <S.DisplayZone onClick={() => setActive(!active)}>
          <S.LongDescription forSizeDetect ref={detectorClosed}>
            <p>{item.experienced.split("\n")[0]}</p>
            <S.More>더보기</S.More>
          </S.LongDescription>
          <S.LongDescription forSizeDetect ref={detectorOpened}>
            {item.experienced.split("\n").map((line, i) => (
              <p key={i}>{line}</p>
            ))}
          </S.LongDescription>
          {!active && (
            <S.LongDescription style={{ height: closedHeight }} key="main">
              <p>{item.experienced.split("\n")[0]}</p>
              <S.More>더보기</S.More>
            </S.LongDescription>
          )}
          {active && (
            <S.LongDescription style={{ height: openedHeight }} key="main">
              {item.experienced.split("\n").map((line, i) => (
                <p key={i}>{line}</p>
              ))}
            </S.LongDescription>
          )}
        </S.DisplayZone>
      </S.BorderBox>
    </S.TimelineItem>
  )
}

export default TimelineItem
