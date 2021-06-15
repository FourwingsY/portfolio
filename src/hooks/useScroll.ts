import { useEffect, useRef, useState } from "react"

import { throttle } from "@utils/event"

export function useScrollTop(): number {
  const [scrollTop, setScrollTop] = useState(0)

  const updateScroll = throttle(() => {
    setScrollTop(window.pageYOffset)
  }, 100)

  // Scroll detect
  useEffect(() => {
    window.addEventListener("scroll", updateScroll)
    return () => {
      window.removeEventListener("scroll", updateScroll)
    }
  }, [])
  return scrollTop
}

interface UseHideOnScroolDownParams {
  minimumScroll?: number
  threshold?: number
}
export function useHideOnScrollDown({ minimumScroll = 200, threshold = 0 }: UseHideOnScroolDownParams): boolean {
  const prevScrollTop = useRef(0)
  const [hide, setHide] = useState(false)
  const scrollTop = useScrollTop()

  // basic logics
  useEffect(() => {
    // show on minimum
    if (scrollTop < minimumScroll) return setHide(false)

    // when scrolling down, hide
    if (!hide && prevScrollTop.current < scrollTop) setHide(true)

    // show when user scroll upward more than threshold
    if (hide && prevScrollTop.current > scrollTop + threshold) {
      prevScrollTop.current = scrollTop
      setHide(false)
    }
  }, [hide, scrollTop])

  // if hidden, log scroll down
  // if shown, log scroll up
  useEffect(() => {
    if (hide && prevScrollTop.current < scrollTop) {
      prevScrollTop.current = scrollTop
    }
    if (!hide && prevScrollTop.current > scrollTop) {
      prevScrollTop.current = scrollTop
    }
  }, [hide, scrollTop])

  return hide
}
