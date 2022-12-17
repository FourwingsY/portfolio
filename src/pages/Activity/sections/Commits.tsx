import { useEffect, useRef, useState } from "react"

import Tooltip from "@components/Tooltip/Tooltip"

import * as S from "./Commits.style"

interface Week {
  contributionDays: {
    weekday: number
    date: string
    contributionCount: number
    color: string
  }[]
}

interface Month {
  name: string
  year: number
  firstDay: string
  totalWeeks: number
}
interface Response {
  user: {
    contributionsCollection: {
      contributionCalendar: {
        totalContributions: number
        weeks: Week[]
        months: Month[]
      }
    }
  }
}

const Commits = () => {
  const [weeks, setWeeks] = useState<Week[]>(emptyWeeks)
  const [months, setMonths] = useState<string[]>([])
  const tiles = useRef<HTMLDivElement>(null)
  useEffect(() => {
    fetch("/api/commits")
      .then((response) => response.json())
      .then(({ data }: { data: Response }) => {
        const calendar = data.user.contributionsCollection.contributionCalendar
        const { weeks, months } = calendar
        setWeeks(weeks)
        setMonths(
          months.flatMap((m) => {
            const labels = new Array(m.totalWeeks).fill("")
            labels[0] = m.name
            return labels
          })
        )
      })
  }, [])

  // 최초 로딩 시 스크롤을 최신(우측)으로 이동
  useEffect(() => {
    tiles.current?.scrollTo({ left: 9999 })
  }, [months.length])

  return (
    <S.Commits>
      <S.Title>Commits Calendar</S.Title>
      <S.Tiles ref={tiles}>
        <S.WeekdayColumn>
          <S.Month />
          <S.Commit />
          <S.Commit>월</S.Commit>
          <S.Commit />
          <S.Commit>수</S.Commit>
          <S.Commit />
          <S.Commit>금</S.Commit>
          <S.Commit />
        </S.WeekdayColumn>
        {weeks.map((w, i) => (
          <S.Week key={i}>
            <S.Month>{months[i]}</S.Month>
            {w.contributionDays.map((d) => (
              <Tooltip key={d.date} title={`${d.date}에 ${d.contributionCount}개의 커밋`}>
                <S.Commit style={{ backgroundColor: d.color }} />
              </Tooltip>
            ))}
          </S.Week>
        ))}
      </S.Tiles>
    </S.Commits>
  )
}

export default Commits

const emptyWeeks = new Array(52).fill(0).map((_, i) => ({
  contributionDays: [0, 1, 2, 3, 4, 5, 6].map((j) => ({
    weekday: 0,
    date: `${i}-${j}`,
    contributionCount: 0,
    color: "#ebedf0",
  })),
}))
