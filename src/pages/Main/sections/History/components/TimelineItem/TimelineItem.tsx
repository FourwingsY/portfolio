import { useState } from "react"

import { Work } from "../../data"
import Duration from "../Duration"
import * as S from "./TimelineItem.style"

interface Props {
  item: Work
}
const TimelineItem: React.FC<Props> = ({ item }) => {
  const [active, setActive] = useState(false)
  return (
    <S.TimelineItem onClick={() => setActive(!active)}>
      <S.ShortDescription>
        <Duration duration={item.duration} />
        <S.ProjectName>{item.projectName}</S.ProjectName>
        <S.Company>{item.company}</S.Company>
      </S.ShortDescription>
      <S.DisplayZone>
        <S.BorderBox active={active}>
          {!active && <S.More>See More</S.More>}
          {active && <S.LongDescription>WIP</S.LongDescription>}
        </S.BorderBox>
      </S.DisplayZone>
    </S.TimelineItem>
  )
}

export default TimelineItem
