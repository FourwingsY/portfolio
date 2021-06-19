import { format, isSameYear } from "date-fns"

import * as S from "./Duration.style"

interface Props {
  duration: [Date, Date | null]
}
const Duration: React.FC<Props> = ({ duration }) => {
  const [from, to] = duration
  return (
    <S.Duration>
      <S.Year>{format(from, "yyyy.")}</S.Year>
      <S.Month>{format(from, "MM")}</S.Month>
      <span style={{ display: "inline-block" }}>
        <S.Tilde>-</S.Tilde>
        {to && !isSameYear(from, to) && <S.Year>{format(to, "yyyy.")}</S.Year>}
        <S.Month>{to ? format(to, "MM") : "Now"}</S.Month>
      </span>
    </S.Duration>
  )
}

export default Duration
