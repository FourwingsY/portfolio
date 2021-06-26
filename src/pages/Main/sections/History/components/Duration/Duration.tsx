import { format, isSameYear } from "date-fns"
import { useEffect, useRef, useState } from "react"

import { useOnceVisible } from "@hooks/useIntersectionObserver"

import * as S from "./Duration.style"

interface Props {
  duration: [Date, Date | null]
}
const Duration: React.FC<Props> = ({ duration }) => {
  const [from, nullableTo] = duration
  const to = nullableTo ?? new Date()
  const element = useRef(null)
  const animatingFrom = useIncreasingDate(element, from, new Date(2013, 1, 15))
  const animatingTo = useIncreasingDate(element, to, new Date(2015, 0, 3))

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
