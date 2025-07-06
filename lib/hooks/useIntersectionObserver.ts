// import 'intersection-observer'
import { useState, useEffect, useRef } from "react"

export function useVisible(
  targetRef: React.RefObject<Element | null>,
  options: IntersectionObserverInit = {},
): boolean {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    if (!targetRef.current) return
    const observer = new IntersectionObserver((entries) => {
      for (const el of entries) {
        setVisible(el.isIntersecting)
      }
    }, options)
    observer.observe(targetRef.current)
    return () => observer.disconnect()
  }, [targetRef, options])

  return visible
}

export function useOnceVisible(
  targetRef: React.RefObject<Element | null>,
  options: IntersectionObserverInit = {},
  delay = 0,
): boolean {
  const [once, setOnce] = useState(false)
  const visible = useVisible(targetRef, options)

  // 한번이라도 visible = true 가 된 경우, 계속 true 상태를 유지한다
  useEffect(() => {
    if (visible) {
      setTimeout(() => setOnce(true), delay)
    }
  }, [visible])
  return once
}

/**
 * 화면에 보일 때만 requestAnimationFrame을 호출
 */
export function useRAFOnVisible(targetRef: React.RefObject<Element | null>, onFrame: (time: number) => void): void {
  const visible = useVisible(targetRef)
  const requestRef = useRef(0)

  const step = (timestamp: number) => {
    requestRef.current = window.requestAnimationFrame(step)
    if (visible) {
      onFrame(timestamp)
    }
  }

  useEffect(() => {
    if (visible) {
      requestRef.current = window.requestAnimationFrame(step)
    }
    return () => window.cancelAnimationFrame(requestRef.current)
  }, [visible, onFrame])
}
