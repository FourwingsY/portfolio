import { useState } from "react"

import { getRandomInt } from "@utils/random"

import * as S from "./Simulator.style"
import useConfetti, { ConfettiOptions } from "./useConfetti"

interface ParticleOptions {
  width: number
  height: number
  initialSpeedMin: number
  initialSpeedMax: number
  initialAngle: number // 0-360
  initialAngleSpread: number // 0-180
  count: number
}

const Simulator = () => {
  const [canvas, setCanvas] = useState<HTMLCanvasElement | null>(null)
  const [colorSet, setColorSet] = useState<string>("green #987654 hsl(210,100%,50%) red")
  const [confettiOptions, setConfettiOptions] = useState<ConfettiOptions>({ gravity: 1000, friction: 0.02 })
  const [particleOptions, setParticleOptions] = useState<ParticleOptions>({
    width: 10,
    height: 10,
    initialSpeedMin: 800,
    initialSpeedMax: 1200,
    initialAngle: -90,
    initialAngleSpread: 10,
    count: 5,
  })

  const { addParticle } = useConfetti(canvas, { ...confettiOptions, colorSet: colorSet.split(" ") })

  function handleClick(e: React.MouseEvent<HTMLCanvasElement>) {
    if (!canvas) return
    const canvasX = e.pageX - e.currentTarget.offsetLeft
    const canvasY = e.pageY - e.currentTarget.offsetTop

    for (let i = 0; i < particleOptions.count; ++i) {
      const singleParticleOptions = {
        size: { width: particleOptions.width, height: particleOptions.height },
        initialPosition: { x: canvasX / canvas.width, y: canvasY / canvas.height },
        initialSpeed: getRandomInt(particleOptions.initialSpeedMin, particleOptions.initialSpeedMax),
        initialAngle: getRandomInt(
          particleOptions.initialAngle - particleOptions.initialAngleSpread / 2,
          particleOptions.initialAngle + particleOptions.initialAngleSpread / 2
        ),
      }
      addParticle(singleParticleOptions)
    }
  }

  function handleConfettiOption(name: string) {
    return (e: React.ChangeEvent<HTMLInputElement>) => {
      setConfettiOptions({
        ...confettiOptions,
        [name]: e.currentTarget.value,
      })
    }
  }

  function handleParticleOption(name: string) {
    return (e: React.ChangeEvent<HTMLInputElement>) => {
      setParticleOptions({
        ...particleOptions,
        [name]: e.currentTarget.value,
      })
    }
  }

  return (
    <S.Simulator>
      <S.SimulatorCanvas ref={setCanvas} onMouseDown={(e) => e.preventDefault()} onClick={handleClick} />
      <label>
        <span>중력</span>
        <input type="number" step={100} value={confettiOptions.gravity} onChange={handleConfettiOption("gravity")} />
      </label>
      <label>
        <span>마찰계수</span>
        <input type="number" step={0.01} value={confettiOptions.friction} onChange={handleConfettiOption("friction")} />
      </label>
      <label>
        <span>칼라셋</span>
        <input
          value={colorSet}
          onChange={(e) => setColorSet(e.currentTarget.value)}
          style={{ width: "calc(100% - 100px)" }}
        />
      </label>
      <label>
        <span>파티클 width</span>
        <input type="number" value={particleOptions.width} onChange={handleParticleOption("width")} />
      </label>
      <label>
        <span>파티클 height</span>
        <input type="number" value={particleOptions.height} onChange={handleParticleOption("height")} />
      </label>
      <label>
        <span>초기 속도 min</span>
        <input
          type="number"
          step={100}
          value={particleOptions.initialSpeedMin}
          onChange={handleParticleOption("initialSpeedMin")}
        />
      </label>
      <label>
        <span>초기 속도 max</span>
        <input
          type="number"
          step={100}
          value={particleOptions.initialSpeedMax}
          onChange={handleParticleOption("initialSpeedMax")}
        />
      </label>
      <label>
        <span>발사각</span>
        <input type="number" value={particleOptions.initialAngle} onChange={handleParticleOption("initialAngle")} />
      </label>
      <label>
        <span>발사각 범위</span>
        <input
          type="number"
          min={0}
          value={particleOptions.initialAngleSpread}
          onChange={handleParticleOption("initialAngleSpread")}
        />
      </label>
      <label>
        <span>발사 갯수</span>
        <input type="number" min={1} value={particleOptions.count} onChange={handleParticleOption("count")} />
      </label>
    </S.Simulator>
  )
}

export default Simulator
