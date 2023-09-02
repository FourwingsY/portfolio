"use client"

import { ContentsWidth } from "@styles/adaptive"

import { realclass, qms, junior, muzy, qgis, uploadingo, dingo, moncast, pilleye } from "@/lib/constants/career"

import * as S from "./History.style"
import TimelineItem from "./components/TimelineItem"

const History = () => {
  return (
    <S.History>
      <S.Title>What I've done?</S.Title>
      <S.Future>
        <ContentsWidth>
          <S.TimelineFadein />
        </ContentsWidth>
      </S.Future>
      <TimelineItem item={pilleye} defaultActive />
      <TimelineItem item={qms} />
      <TimelineItem item={realclass} />
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
