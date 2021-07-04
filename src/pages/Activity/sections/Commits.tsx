import { format } from "date-fns"
import { useEffect, useState } from "react"
import Calendar, { CalendarTileProperties } from "react-calendar"
import "react-calendar/dist/Calendar.css"

import * as S from "./Commits.style"

interface CommitCountByProduct {
  [product: string]: number
}
const Commits = () => {
  const [commits, setCommits] = useState<{ [date: string]: CommitCountByProduct }>({})
  useEffect(() => {
    fetch("/api/commits")
      .then((response) => response.json())
      .then(setCommits)
  }, [])

  function tileContent({ date, view }: CalendarTileProperties) {
    // Add class to tiles in month view only
    if (view !== "month") return null

    const key = format(date, "yyyy-MM-dd")
    const data = commits[key]
    return <DailyCommits data={data} />
  }

  return (
    <S.Commits>
      <S.Title>Commits Calendar</S.Title>
      <Calendar tileContent={tileContent} locale="ko-KR" />
    </S.Commits>
  )
}

export default Commits

interface DailyCommitsProps {
  data?: CommitCountByProduct
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
