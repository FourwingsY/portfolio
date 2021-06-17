import { useEffect, useRef, useState } from "react"

import withCSR from "@hocs/withCSR"
import { useResponsiveContext } from "@hocs/withResponsive"

import { Taste } from "@constants/tastes"

import * as S from "../AboutMe.style"
import { createPositionFactory } from "../utils"

interface Props {
  taste: Taste
}
/* Mole: 두더지 */
const Mole: React.FC<Props> = ({ children, taste }) => {
  const { DLPM } = useResponsiveContext()
  const size = DLPM(80, 80, 64, 64) // 5rem 5rem 4rem 4rem
  const canvasSize = { width: window.innerWidth, height: window.innerHeight * 0.7 }
  const getPosition = createPositionFactory(canvasSize.width, canvasSize.height, size)

  const [position, setPosition] = useState<{ x: number; y: number }>(() => getPosition(taste.name))
  const [show, setShow] = useState(true)
  const delay = useRef(Math.random() * 10000)

  // visiblility control
  useEffect(() => {
    if (show) {
      const disappearTimer = window.setTimeout(() => setShow(false), delay.current)
      return () => window.clearTimeout(disappearTimer)
    } else {
      delay.current = 10000 // 한번 사라지고 난 다음 딜레이 재설정
      const reappearTimer = window.setTimeout(() => setShow(true), 1000)
      return () => window.clearTimeout(reappearTimer)
    }
  }, [show])

  // position control
  useEffect(() => {
    if (!show) return
    setPosition(getPosition(taste.name))
  }, [show])

  const relativePosition = {
    left: ((position.x / canvasSize.width) * 100).toFixed(1) + "%",
    top: ((position.y / canvasSize.height) * 100).toFixed(1) + "%",
  }
  const jumpingAnimation = { animationDelay: `${Math.random().toFixed(2)}s` }

  return (
    <S.Mole show={show} style={{ ...relativePosition, ...jumpingAnimation }}>
      {children}
    </S.Mole>
  )
}

export default withCSR(Mole)
