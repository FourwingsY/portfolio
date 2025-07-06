"use client"

import dayjs from "dayjs"
import { useEffect, useRef, useState } from "react"

import { useOnceVisible } from "@/lib/hooks/useIntersectionObserver"

import * as S from "./Duration.style"

interface Props {
  duration: [string, string | null]
}
const Duration: React.FC<Props> = ({ duration }) => {
  const [stringFrom, nullableTo] = duration
  const from = dayjs(stringFrom).toDate()
  const to = nullableTo ? dayjs(nullableTo).toDate() : new Date()
  const element = useRef<HTMLSpanElement>(null)
  const animatingFrom = useAnimatingDate(element, from, new Date())
  const animatingTo = useAnimatingDate(element, to, new Date())

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

function useAnimatingDate(element: React.RefObject<HTMLSpanElement | null>, end: Date, start: Date) {
  const aMonth = 30 * 86400 * 1000 * Math.sign(+end - +start)
  const [date, setDate] = useState(start)
  const visible = useOnceVisible(element)

  function animate() {
    const next = date.valueOf() + aMonth
    if (+end <= next) {
      setDate(() => end)
    } else {
      requestAnimationFrame(animate)
      setDate(() => new Date(next))
    }
  }

  useEffect(() => {
    if (visible) animate()
  }, [visible])

  return date
}
