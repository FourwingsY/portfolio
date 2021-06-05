import { useRef, useState } from "react"
import styled from "styled-components"

import useConfetti from "./useConfetti"

const ConfettiCanvas = () => {
  const canvas = useRef<HTMLCanvasElement>(null)
  const [playing, setPlaying] = useState(false)

  const { addParticle, stop, resume } = useConfetti(
    canvas.current,
    {
      particleSize: { width: 6, height: 16 },
      gravity: 1000,
      friction: 0.02,
      colorSet: ["red", "aqua", "orange", "deeppink", "greenyellow", "magenta", "yellow", "dodgerblue"],
    },
    { onStart: () => setPlaying(true), onStop: () => setPlaying(false) }
  )

  function handleClick() {
    for (let i = 0; i < 30; i += 1) {
      const angle = randomRange(-75, -105)
      const speed = randomRange(1000, 1200)
      addParticle({ initialPosition: { x: 0.5, y: 1 }, initialSpeed: speed, initialAngle: angle })
    }
  }

  return (
    <>
      <Canvas ref={canvas} onClick={handleClick} />
      <p>Click canvas to shoot!</p>
      {playing && <button onClick={stop}>PAUSE</button>}
      {!playing && <button onClick={resume}>RESUME</button>}
    </>
  )
}

export default ConfettiCanvas

const Canvas = styled.canvas`
  width: 100%;
  height: 400px;
  border: 1px solid #eee;
`

function randomRange(min: number, max: number) {
  return min + Math.random() * (max - min)
}
