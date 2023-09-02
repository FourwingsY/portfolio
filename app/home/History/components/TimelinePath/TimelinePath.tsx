"use client"

import { useResponsiveContext } from "@/components/Providers/WithResponsive"

import * as S from "./TimelinePath.style"

const TimelinePath = () => {
  const { mobile } = useResponsiveContext()
  return (
    <S.TimelinePath viewBox="-280 0 560 500" preserveAspectRatio={mobile ? "none" : "xMinYMin meet"}>
      <S.Path d="M0 0 s0 20 0 20 h0 s0 20 0 20 v460" fill="none" stroke="black" strokeWidth={2} />
    </S.TimelinePath>
  )
}

export default TimelinePath
