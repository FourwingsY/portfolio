import { useEffect } from "react"

import { useResponsiveContext } from "@hocs/withResponsive"

import { throttle } from "@utils/event"

export function useLayoutChangeEffect(func: () => void): void {
  const { desktop, tabletL, tabletP, mobile } = useResponsiveContext()

  // call function when layout changes
  useEffect(func, [desktop, tabletL, tabletP, mobile])

  // call function when mobile - screenWidth changes
  useEffect(() => {
    if (!mobile) return
    const handleResize = throttle(func, 200)
    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [mobile])
}
