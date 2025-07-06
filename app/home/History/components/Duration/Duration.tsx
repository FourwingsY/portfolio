"use client"

import dayjs from "dayjs"
import { useEffect, useRef, useState } from "react"

import { useOnceVisible } from "@/lib/hooks/useIntersectionObserver"

import * as S from "./Duration.style"

interface Props {
  duration: [string, string | null]
}
const Duration: React.FC<Props> = ({ duration }) => {
  const [from, to] = duration
  const today = dayjs().format("YYYY-MM-DD")
  const element = useRef<HTMLSpanElement>(null)
  const animatingFrom = useAnimatingDate(element, from, today)
  const animatingTo = useAnimatingDate(element, to ?? today, today)

  return (
    <S.Duration ref={element}>
      <S.Year>{dayjs(animatingFrom).format("YYYY.")}</S.Year>
      <S.Month>{dayjs(animatingFrom).format("MM")}</S.Month>
      <span style={{ display: "inline-block" }}>
        <S.Tilde>-</S.Tilde>
        <S.Year>{dayjs(animatingTo).format("YYYY.")}</S.Year>
        <S.Month>{dayjs(animatingTo).format("MM")}</S.Month>
      </span>
    </S.Duration>
  )
}

export default Duration

/**
 * 현재에서 과거로 가는 날짜 애니메이션.
 * end <- start, start가 항상 end보다 미래의 날짜임을 감안하고 작성됨.
 */
function useAnimatingDate(element: React.RefObject<HTMLSpanElement | null>, end: string, start: string) {
  const [date, setDate] = useState(dayjs(start).toDate())
  const visible = useOnceVisible(element)
  const endDate = dayjs(end)
  const startDate = dayjs(start)

  const animateStep = (currentDayjs: dayjs.Dayjs) => {
    const nextDayjs = currentDayjs.add(-1, "month")

    if (nextDayjs.isBefore(endDate)) {
      setDate(endDate.toDate())
      return
    }

    setDate(nextDayjs.toDate())
    setTimeout(() => animateStep(nextDayjs), 20)
  }

  useEffect(() => {
    if (!visible) return
    if (startDate.isBefore(endDate)) return
    animateStep(startDate)
  }, [visible, end, start])

  return date
}
