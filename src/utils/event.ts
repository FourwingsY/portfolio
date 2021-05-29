/* eslint-disable @typescript-eslint/no-explicit-any */
export function throttle<F extends (...args: any[]) => void>(func: F, timeout: number): F {
  let timer: number | null = null
  const throttledFunction = (...args: any[]) => {
    if (timer) return
    timer = window.setTimeout(() => {
      func(...args)
      timer = null
    }, timeout)
  }
  return throttledFunction as F
}
