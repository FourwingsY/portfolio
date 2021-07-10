import { ContentsWidth } from "@styles/adaptive"

import * as S from "./History.style"
import TimelineItem from "./components/TimelineItem"
import { realclass, crm, junior, muzy, qgis, uploadingo, dingo, moncast } from "./data"

const History = () => {
  return (
    <S.History>
      <S.Title>What I've done?</S.Title>
      <TimelineItem item={realclass} defaultActive />
      <TimelineItem item={crm} />
      <TimelineItem item={junior} />
      <TimelineItem item={muzy} />
      <TimelineItem item={qgis} />
      <TimelineItem item={uploadingo} />
      <TimelineItem item={dingo} />
      <TimelineItem item={moncast} />
      <S.NotDeveloper>
        <ContentsWidth>
          <S.TimelineFadeout />
        </ContentsWidth>
      </S.NotDeveloper>
    </S.History>
  )
}

export default History
