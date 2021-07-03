import { useState } from "react"

import { Product } from "../../data"
import Duration from "../Duration"
import * as S from "./TimelineItem.style"

interface Props {
  item: Product
  defaultActive?: boolean
}
const TimelineItem: React.FC<Props> = ({ item, defaultActive = false }) => {
  const [active, setActive] = useState(defaultActive)

  function openLink() {
    if (item.link) {
      window.open(item.link)
    }
  }

  return (
    <S.TimelineItem onClick={() => setActive(!active)}>
      <S.ShortDescription>
        <Duration duration={item.duration} />
        <S.ProductName hasLink={!!item.link} onClick={openLink}>
          {item.productName}
          <S.ProductStatusBadge status={item.status} />
        </S.ProductName>
        <S.Company>{item.company}</S.Company>
      </S.ShortDescription>
      <S.DisplayZone>
        <S.BorderBox active={active}>
          {!active && <S.More>See What I've learned</S.More>}
          {active && (
            <S.LongDescription>
              {item.experienced.split("\n").map((line, i) => (
                <p key={i}>{line}</p>
              ))}
            </S.LongDescription>
          )}
        </S.BorderBox>
      </S.DisplayZone>
    </S.TimelineItem>
  )
}

export default TimelineItem
