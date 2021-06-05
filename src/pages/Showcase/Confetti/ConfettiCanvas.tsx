import { useRef } from "react"
import styled from "styled-components"

import useConfetti from "./useConfetti"

const ConfettiCanvas = () => {
  const canvas = useRef<HTMLCanvasElement>(null)
  const { addParticle, stop, resume } = useConfetti(canvas.current, {
    particleSize: { width: 6, height: 16 },
    gravity: 1000,
    friction: 0.01,
    colorSet: ["red", "aqua", "orange", "deeppink", "greenyellow", "magenta", "yellow", "dodgerblue"],
  })

  function handleClick() {
    for (let i = 0; i < 30; i += 1) {
      const angle = randomRange(-75, -105)
      const speed = randomRange(800, 1000)
      addParticle({ initialPosition: { x: 0.5, y: 1 }, initialSpeed: speed, initialAngle: angle })
    }
  }

  return (
    <>
      <Canvas ref={canvas} onClick={handleClick} />
      <button onClick={stop}>STOP</button>
      <button onClick={resume}>PLAY</button>
    </>
  )
}

export default ConfettiCanvas

const Canvas = styled.canvas`
  width: 100%;
  height: 400px;
`

function randomRange(min: number, max: number) {
  return min + Math.random() * (max - min)
}
