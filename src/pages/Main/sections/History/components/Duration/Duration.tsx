import { parseISO, format, isSameYear } from "date-fns"
import { useEffect, useRef, useState } from "react"

import { useOnceVisible } from "@hooks/useIntersectionObserver"

import * as S from "./Duration.style"

interface Props {
  duration: [string, string | null]
}
const Duration: React.FC<Props> = ({ duration }) => {
  const [stringFrom, nullableTo] = duration
  const from = parseISO(stringFrom)
  const to = nullableTo ? parseISO(nullableTo) : new Date()
  const element = useRef(null)
  const animatingFrom = useIncreasingDate(element, from, parseISO("2013-02-15"))
  const animatingTo = useIncreasingDate(element, to, parseISO("2015-01-03"))

  return (
    <S.Duration ref={element}>
      <S.Year>{format(animatingFrom, "yyyy.")}</S.Year>
      <S.Month>{format(animatingFrom, "MM")}</S.Month>
      <span style={{ display: "inline-block" }}>
        <S.Tilde>-</S.Tilde>
        {!isSameYear(from, to) && <S.Year>{format(animatingTo, "yyyy.")}</S.Year>}
        <S.Month>{format(animatingTo, "MM")}</S.Month>
      </span>
    </S.Duration>
  )
}

export default Duration

function useIncreasingDate(element: React.RefObject<Element>, end: Date, start: Date) {
  const aMonth = 30 * 86400 * 1000
  const [date, setDate] = useState(start)
  const visible = useOnceVisible(element)
  function increase() {
    setDate((date) => {
      const increased = date.valueOf() + aMonth
      if (end.valueOf() <= increased) {
        setDate(() => end)
      }
      requestAnimationFrame(increase)
      return new Date(increased)
    })
  }

  useEffect(() => {
    if (visible) increase()
  }, [visible])

  return date
}
