import { useState } from "react"
import styled from "styled-components"

import useConfetti from "./useConfetti"

const ConfettiCanvas = () => {
  const [canvas, setCanvas] = useState<HTMLCanvasElement | null>(null)
  const [playing, setPlaying] = useState(false)

  const confettiOptions = {
    gravity: 1000,
    friction: 0.04,
    colorSet: ["red", "aqua", "orange", "deeppink", "greenyellow", "magenta", "yellow", "dodgerblue"],
  }

  const { addParticle, stop, resume } = useConfetti(canvas, confettiOptions, {
    onStart: () => setPlaying(true),
    onStop: () => setPlaying(false),
  })

  function handleClick() {
    for (let i = 0; i < 30; i += 1) {
      addParticle({
        size: { width: 10, height: 10 },
        initialPosition: { x: 0.5, y: 1 },
        initialSpeed: randomRange(1300, 1600),
        initialAngle: randomRange(-75, -105),
      })
    }
  }

  // prevent mousedown for unwanted text selection
  return (
    <>
      <Canvas ref={setCanvas} onMouseDown={(e) => e.preventDefault()} onClick={handleClick} />
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
