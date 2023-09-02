import React, { useRef, useState } from "react"

import { getRandomInRange, getRandomInt } from "@/lib/utils/random"
import useConfetti from "@/posts/confetti/useConfetti"

import * as S from "./Simulator.style"

interface ConfettiOptionsInput {
  gravity: number
  friction: number
  colorSet?: string[]
}
interface ParticleOptionsInput {
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
  const canvasRect = useRef<DOMRect>()
  const [playing, setPlaying] = useState(false)
  const [coord, setCoord] = useState<{ x: number; y: number }>({ x: 0, y: 0 })
  const [confettiOptions, setConfettiOptions] = useState<ConfettiOptionsInput>({
    gravity: 1000,
    friction: 0.02,
  })
  const [particleOptions, setParticleOptions] = useState<ParticleOptionsInput>({
    width: 10,
    height: 10,
    initialSpeedMin: 800,
    initialSpeedMax: 1200,
    initialAngle: -90,
    initialAngleSpread: 10,
    count: 5,
  })

  const { addParticle, pause, resume } = useConfetti(canvas, confettiOptions, {
    onStart: () => setPlaying(true),
    onStop: () => setPlaying(false),
  })

  function handleClick(e: React.MouseEvent<HTMLCanvasElement>) {
    const rect = canvasRect.current
    if (!canvas || !rect) return

    const canvasX = e.clientX - rect.left
    const canvasY = e.clientY - rect.top
    const coord = { x: canvasX / canvas.width, y: canvasY / canvas.height }
    setCoord(coord)

    const colorSet = ["green", "#dddd00", "hsl(240,100%,50%)", "red"]

    for (let i = 0; i < particleOptions.count; ++i) {
      const singleParticleOptions = {
        size: { width: particleOptions.width, height: particleOptions.height },
        initialPosition: coord,
        initialSpeed: getRandomInt(particleOptions.initialSpeedMin, particleOptions.initialSpeedMax),
        initialAngle: getRandomInRange(
          particleOptions.initialAngle - particleOptions.initialAngleSpread / 2,
          particleOptions.initialAngle + particleOptions.initialAngleSpread / 2,
        ),
        color: colorSet[getRandomInt(0, colorSet.length)],
      }
      addParticle(singleParticleOptions)
    }
  }

  function handleColorSet(e: React.ChangeEvent<HTMLInputElement>) {
    const value = e.currentTarget.value
    setConfettiOptions({
      ...confettiOptions,
      colorSet: value.trim().replace(/\s\s/g, " ").replace(/,\s/g, ",").split(" "),
    })
  }

  function handleConfettiOption(name: string) {
    return (e: React.ChangeEvent<HTMLInputElement>) => {
      setConfettiOptions({
        ...confettiOptions,
        [name]: Number(e.currentTarget.value),
      })
    }
  }

  function handleParticleOption(name: string) {
    return (e: React.ChangeEvent<HTMLInputElement>) => {
      setParticleOptions({
        ...particleOptions,
        [name]: Number(e.currentTarget.value),
      })
    }
  }

  const canvasRef = (canvas: HTMLCanvasElement) => {
    if (!canvas) return
    setCanvas(canvas)
    const rect = canvas.getBoundingClientRect()
    canvasRect.current = rect
  }

  return (
    <S.Simulator>
      <S.DrawingArea>
        <S.SimulatorCanvas
          ref={canvasRef}
          onMouseDown={(e: React.MouseEvent) => e.preventDefault()}
          onClick={handleClick}
        />
        <S.Coord>
          {coord.x.toFixed(2)}, {coord.y.toFixed(2)}
        </S.Coord>
        <S.Guide>
          This is Confetti Simulator
          <br />
          Try to change settings
          <br />
          Click to Shoot
        </S.Guide>
      </S.DrawingArea>
      <S.Controls>
        <S.Row>
          <S.LabelText>중력</S.LabelText>
          <S.InputRange
            type="range"
            min={0}
            max={3000}
            step={100}
            value={confettiOptions.gravity}
            onChange={handleConfettiOption("gravity")}
          />
          <S.Value>{confettiOptions.gravity}</S.Value>
        </S.Row>
        <S.Row>
          <S.LabelText>마찰계수</S.LabelText>
          <S.InputRange
            type="range"
            min={0}
            max={0.2}
            step={0.001}
            value={confettiOptions.friction}
            onChange={handleConfettiOption("friction")}
          />
          <S.Value>{confettiOptions.friction}</S.Value>
        </S.Row>
        <S.Row>
          <S.LabelText>파티클 색상</S.LabelText>
          <S.InputText defaultValue={confettiOptions.colorSet?.join(" ")} onChange={handleColorSet} />
          <S.Value>{confettiOptions.colorSet?.length}색</S.Value>
        </S.Row>
        <S.Row>
          <S.LabelText>파티클 width</S.LabelText>
          <S.InputRange type="range" max={30} value={particleOptions.width} onChange={handleParticleOption("width")} />
          <S.Value>{particleOptions.width}</S.Value>
        </S.Row>
        <S.Row>
          <S.LabelText>파티클 height</S.LabelText>
          <S.InputRange
            type="range"
            max={30}
            value={particleOptions.height}
            onChange={handleParticleOption("height")}
          />
          <S.Value>{particleOptions.height}</S.Value>
        </S.Row>
        <S.Row>
          <S.LabelText>초기 속도 min</S.LabelText>
          <S.InputRange
            type="range"
            max={4000}
            step={100}
            value={particleOptions.initialSpeedMin}
            onChange={handleParticleOption("initialSpeedMin")}
          />
          <S.Value>{particleOptions.initialSpeedMin}</S.Value>
        </S.Row>
        <S.Row>
          <S.LabelText>초기 속도 max</S.LabelText>
          <S.InputRange
            type="range"
            max={5000}
            step={100}
            value={particleOptions.initialSpeedMax}
            onChange={handleParticleOption("initialSpeedMax")}
          />
          <S.Value>{particleOptions.initialSpeedMax}</S.Value>
        </S.Row>
        <S.Row>
          <S.LabelText>발사각</S.LabelText>
          <S.InputRange
            type="range"
            min={-360}
            max={360}
            value={particleOptions.initialAngle}
            onChange={handleParticleOption("initialAngle")}
          />
          <S.Value>{particleOptions.initialAngle}</S.Value>
        </S.Row>
        <S.Row>
          <S.LabelText>발사각 범위</S.LabelText>
          <S.InputRange
            type="range"
            min={0}
            max={360}
            value={particleOptions.initialAngleSpread}
            onChange={handleParticleOption("initialAngleSpread")}
          />
          <S.Value>{particleOptions.initialAngleSpread}</S.Value>
        </S.Row>
        <S.Row>
          <S.LabelText>발사 갯수</S.LabelText>
          <S.InputRange
            type="range"
            min={1}
            max={100}
            value={particleOptions.count}
            onChange={handleParticleOption("count")}
          />
          <S.Value>{particleOptions.count}</S.Value>
        </S.Row>
        {playing && <S.PauseButton onClick={pause}>PAUSE</S.PauseButton>}
        {!playing && <S.PauseButton onClick={resume}>RESUME</S.PauseButton>}
      </S.Controls>
    </S.Simulator>
  )
}

export default Simulator
