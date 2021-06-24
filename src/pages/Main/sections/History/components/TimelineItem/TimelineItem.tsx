import { useState } from "react"

import { Work } from "../../data"
import Duration from "../Duration"
import * as S from "./TimelineItem.style"

interface Props {
  item: Work
  defaultActive?: boolean
}
const TimelineItem: React.FC<Props> = ({ item, defaultActive = false }) => {
  const [active, setActive] = useState(defaultActive)
  return (
    <S.TimelineItem onClick={() => setActive(!active)}>
      <S.ShortDescription>
        <Duration duration={item.duration} />
        <S.ProjectName>{item.projectName}</S.ProjectName>
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
