import { useEffect, useState } from "react"
import styled from "styled-components"

import { getRandomInRange } from "@utils/random"

import useConfetti from "./useConfetti"

// if confettiOptions is object created in component => useConfetti will notice it has been changed. and reset everytime.
const confettiOptions = {
  gravity: 500,
  friction: 0.03,
  colorSet: ["hsl(0, 70%, 50%)", "hsl(0, 70%, 70%)", "hsl(0, 90%, 50%)", "hsl(0, 90%, 70%)", "hsl(0, 90%, 80%)"],
}

const FireworksCanvas = () => {
  const [canvas, setCanvas] = useState<HTMLCanvasElement | null>(null)

  const { initialized, addParticle } = useConfetti(canvas, confettiOptions, { onStop: shoot })

  // shoot on mount
  useEffect(() => {
    if (canvas) shoot()
  }, [canvas])

  function shoot() {
    for (let i = 0; i < 70; i += 1) {
      const angle = getRandomInRange(0, 360)
      const speed = getRandomInRange(100, 600)
      addParticle({
        size: { width: 10, height: 10 },
        initialPosition: { x: 0.5, y: 0.3 },
        initialSpeed: speed,
        initialAngle: angle,
      })
    }
  }

  return (
    <>
      <Canvas ref={setCanvas} />
      <p>Auto-playing!</p>
    </>
  )
}

export default FireworksCanvas

const Canvas = styled.canvas`
  width: 100%;
  height: 400px;
  border: 1px solid #eee;
`
