import { useEffect, useRef, useState } from "react"

import Layout from "@pages/Layout"

import * as S from "./Countdown.style"

const Countdown = () => {
  const [isRunning, setRunning] = useState(false)
  const [timeLeft, setTimeLeft] = useState(6000)
  const { start, stop } = useRAF((timePassed: number) => {
    setTimeLeft((time) => Math.max(0, time - timePassed))
  })

  useEffect(() => {
    if (timeLeft === 0) {
      stop()
      setRunning(false)
    }
  }, [timeLeft])

  function startCountdown() {
    start()
    setRunning(true)
  }

  function resetCountdown() {
    stop()
    setRunning(false)
    setTimeLeft(60000)
  }

  function addTime() {
    setTimeLeft((t) => t + 10000)
  }

  return (
    <Layout style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "1rem" }}>
      {!isRunning && (
        <S.StartButton onClick={startCountdown} disabled={timeLeft === 0}>
          Start
        </S.StartButton>
      )}
      {isRunning && <S.ResetButton onClick={resetCountdown}>Reset</S.ResetButton>}
      <S.Timer runningOut={timeLeft < 5000}>{formatTime(timeLeft)}</S.Timer>
      <S.AddButton onClick={addTime}>+ 10s</S.AddButton>
    </Layout>
  )
}

export default Countdown

function formatTime(timeLeft: number) {
  const leftSeconds = timeLeft / 1000
  const minutes = Math.floor(leftSeconds / 60)
  const seconds = Math.ceil(leftSeconds - minutes * 60)
  const colon = Math.floor(leftSeconds * 2) % 2 ? " " : ":"
  return `${minutes < 10 ? `0${minutes}` : minutes}${colon}${seconds < 10 ? `0${seconds}` : seconds}`
}

function useRAF(callback?: (dt: number) => void) {
  const request = useRef(0)
  const previousTime = useRef(0)

  function ready(time: number) {
    previousTime.current = time
  }

  function animate(time: number) {
    const deltaTime = time - previousTime.current
    callback?.(deltaTime)

    previousTime.current = time
    request.current = window.requestAnimationFrame(animate)
  }

  function start() {
    window.requestAnimationFrame(ready)
    request.current = window.requestAnimationFrame(animate)
  }

  function stop() {
    window.cancelAnimationFrame(request.current)
  }

  useEffect(() => stop, [])

  return { start, stop }
}
