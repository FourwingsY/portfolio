import cx from "classnames"
import { useState } from "react"

import { Work } from "../../data"
import Duration from "../Duration"
import TimelinePath from "../TimelinePath"
import * as S from "./TimelineItem.style"

interface Props {
  item: Work
}
const TimelineItem: React.FC<Props> = ({ item }) => {
  const [active, setActive] = useState(false)
  return (
    <S.TimelineItem className={cx({ active })} onClick={() => setActive(!active)}>
      <S.ShortDescription>
        <Duration duration={item.duration} />
      </S.ShortDescription>
      <TimelinePath />
      <DisplayZone />
    </S.TimelineItem>
  )
}

export default TimelineItem

const DisplayZone = () => {
  return <S.DisplayZone></S.DisplayZone>
}
