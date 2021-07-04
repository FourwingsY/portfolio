import { format } from "date-fns"
import { useEffect, useState } from "react"
import Calendar, { CalendarTileProperties } from "react-calendar"
import "react-calendar/dist/Calendar.css"

import type { Result, CommitLog } from "@api/commits"

import * as S from "./Commits.style"

const Commits = () => {
  const [updated, setUpdated] = useState<number>(0)
  const [commits, setCommits] = useState<CommitLog>({})
  useEffect(() => {
    fetch("/api/commits")
      .then((response) => response.json())
      .then(({ updated, data }: Result) => {
        setCommits(data)
        setUpdated(updated)
      })
  }, [])

  function tileContent({ date, view }: CalendarTileProperties) {
    // Add class to tiles in month view only
    if (view !== "month") return null

    const key = format(date, "yyyy-MM-dd")
    const data = commits[key]
    return <DailyCommits data={data} />
  }

  if (!updated) return null

  return (
    <S.Commits>
      <S.Title>
        Commits Calendar <S.Updated>updated: {format(updated, "yyyy-MM-dd")}</S.Updated>
      </S.Title>
      <Calendar defaultActiveStartDate={new Date(updated)} tileContent={tileContent} locale="ko-KR" />
    </S.Commits>
  )
}

export default Commits

interface DailyCommitsProps {
  data?: { [repo: string]: number }
}
const DailyCommits = ({ data }: DailyCommitsProps) => {
  if (!data) return <S.DailyCommits />

  const products = Object.keys(data)

  return (
    <S.DailyCommits>
      {products.map((p) => (
        <S.Commit product={p} key={p}>
          {data[p]}
        </S.Commit>
      ))}
    </S.DailyCommits>
  )
}
