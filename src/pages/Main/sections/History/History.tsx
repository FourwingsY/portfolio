import * as S from "./History.style"
import TimelineItem from "./components/TimelineItem"
import { realclass, junior, muzy, qgis, uploadingo, dingo } from "./data"

const History = () => {
  return (
    <S.History>
      <S.Title>What I've done?</S.Title>
      <TimelineItem item={realclass} />
      <TimelineItem item={junior} />
      <TimelineItem item={muzy} />
      <TimelineItem item={qgis} />
      <TimelineItem item={uploadingo} />
      <TimelineItem item={dingo} />
    </S.History>
  )
}

export default History
