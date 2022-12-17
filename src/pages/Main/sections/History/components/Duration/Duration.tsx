import { parseISO, format } from "date-fns"
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
  const animatingFrom = useAnimatingDate(element, from, new Date())
  const animatingTo = useAnimatingDate(element, to, new Date())

  return (
    <S.Duration ref={element}>
      <S.Year>{format(animatingFrom, "yyyy.")}</S.Year>
      <S.Month>{format(animatingFrom, "MM")}</S.Month>
      <span style={{ display: "inline-block" }}>
        <S.Tilde>-</S.Tilde>
        <S.Year>{format(animatingTo, "yyyy.")}</S.Year>
        <S.Month>{format(animatingTo, "MM")}</S.Month>
      </span>
    </S.Duration>
  )
}

export default Duration

function useAnimatingDate(element: React.RefObject<Element>, end: Date, start: Date) {
  const aMonth = 30 * 86400 * 1000 * Math.sign(+end - +start)
  const [date, setDate] = useState(start)
  const visible = useOnceVisible(element)
  function animate() {
    setDate((date) => {
      const next = date.valueOf() + aMonth
      if ((aMonth < 0 && next <= end.valueOf()) || (aMonth > 0 && end.valueOf() <= next)) {
        setDate(() => end)
      }
      requestAnimationFrame(animate)
      return new Date(next)
    })
  }

  useEffect(() => {
    if (visible) animate()
  }, [visible])

  return date
}
