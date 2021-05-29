import { useLayoutEffect, useRef, useState } from "react"

import { throttle } from "@utils/event"

export function useScrollTop(): number {
  const [scrollTop, setScrollTop] = useState(0)

  const updateScroll = throttle(() => {
    setScrollTop(window.pageYOffset)
  }, 100)

  // Scroll detect
  useLayoutEffect(() => {
    window.addEventListener("scroll", updateScroll)
    return () => {
      window.removeEventListener("scroll", updateScroll)
    }
  }, [])
  return scrollTop
}

interface UseHideOnScroolDownParams {
  minimumScroll?: number
}
export function useHideOnScrollDown({ minimumScroll = 200 }: UseHideOnScroolDownParams): boolean {
  const prevScrollTop = useRef(0)
  const [hide, setHide] = useState(false)
  const scrollTop = useScrollTop()

  // Set Hide or not
  useLayoutEffect(() => {
    // decide hide or show
    if (scrollTop < minimumScroll) return setHide(false)
    // show when user scroll upward
    setHide(prevScrollTop.current <= scrollTop)
    // save as prev-value
    prevScrollTop.current = scrollTop
  }, [scrollTop])

  return hide
}
