"use client"

import React, { useEffect, useRef, useState } from "react"

import { useResponsiveContext } from "@hocs/withResponsive"

import { Taste } from "@/lib/constants/tastes"

import * as S from "../AboutMe.style"
import { createPositionFactory, Position } from "../utils"

interface Props {
  taste: Taste
}
/* Mole: 두더지 */
const Mole = ({ children, taste }: React.PropsWithChildren<Props>) => {
  const { DLPM } = useResponsiveContext()
  const size = DLPM(80, 80, 64, 64) // 5rem 5rem 4rem 4rem
  const canvasSize = useRef<{ width: number; height: number }>({ width: 1, height: 1 })
  const getPosition = createPositionFactory(canvasSize.current.width, canvasSize.current.height, size)

  const [position, setPosition] = useState<Position | null>(() => getPosition(taste.name))
  const [show, setShow] = useState(true)
  const delay = useRef(Math.random() * 10000)

  useEffect(() => {
    canvasSize.current = { width: window.innerWidth, height: window.innerHeight * 0.7 }
  }, [])
  // visiblility control
  useEffect(() => {
    if (show) {
      const disappearTimer = window.setTimeout(() => setShow(false), delay.current)
      return () => window.clearTimeout(disappearTimer)
    } else {
      delay.current = 10000 // 한번 사라지고 난 다음 딜레이 재설정
      const reappearTimer = window.setTimeout(reposition, 1000)
      return () => window.clearTimeout(reappearTimer)
    }
  }, [show])

  // 새로 나타날 위치 계산
  function reposition() {
    const position = getPosition(taste.name)

    // 위치가 잡히지 않은 경우, 2초 후 재시도
    if (!position) {
      return window.setTimeout(reposition, 2000)
    }

    // 위치 잡고 나타나기
    setPosition(position)
    setShow(true)
  }

  if (!position) return null

  const relativePosition = {
    left: ((position.x / canvasSize.current.width) * 100).toFixed(1) + "%",
    top: ((position.y / canvasSize.current.height) * 100).toFixed(1) + "%",
  }
  const jumpingAnimation = { animationDelay: `${Math.random().toFixed(2)}s` }

  return (
    <S.Mole show={show} style={{ ...relativePosition, ...jumpingAnimation }}>
      {children}
    </S.Mole>
  )
}

export default Mole
