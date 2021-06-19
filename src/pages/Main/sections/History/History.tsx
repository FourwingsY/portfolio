import * as S from "./History.style"
import TimelineItem from "./components/TimelineItem"
import { realclass, junior, muzy } from "./data"

const History = () => {
  return (
    <S.History>
      <S.Title>What I've done?</S.Title>
      <S.TBD>🛠️🚧🛑</S.TBD>
      <TimelineItem item={realclass} />
      <TimelineItem item={junior} />
      <TimelineItem item={muzy} />
    </S.History>
  )
}

export default History
