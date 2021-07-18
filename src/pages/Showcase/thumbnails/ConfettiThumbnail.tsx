import { useEffect, useMemo, useState } from "react"
import styled from "styled-components"

import useConfetti from "@hooks/useConfetti"

import { getRandomInRange, getRandomInt } from "@utils/random"

const colorSet = ["hsl(0, 70%, 50%)", "hsl(0, 70%, 70%)", "hsl(0, 90%, 50%)", "hsl(0, 90%, 70%)", "hsl(0, 90%, 80%)"]

const FireworksCanvas = () => {
  const [canvas, setCanvas] = useState<HTMLCanvasElement | null>(null)
  const confettiOptions = useMemo(() => ({ gravity: 500, friction: 0.03 }), [])
  const { initialized, addParticle } = useConfetti(canvas, confettiOptions, { onStop: shoot })

  // shoot on mount
  useEffect(() => {
    if (initialized) shoot()
  }, [initialized])

  function shoot() {
    for (let i = 0; i < 70; i += 1) {
      const angle = getRandomInRange(0, 360)
      const speed = getRandomInRange(100, 600)
      const colorIndex = getRandomInt(0, colorSet.length)
      addParticle({
        size: { width: 10, height: 10 },
        initialPosition: { x: 0.5, y: 0.4 },
        initialSpeed: speed,
        initialAngle: angle,
        color: colorSet[colorIndex],
      })
    }
  }

  return <Canvas ref={setCanvas} />
}

export default FireworksCanvas

const Canvas = styled.canvas`
  width: 100%;
  height: 400px;
  border: 1px solid #eee;
`
