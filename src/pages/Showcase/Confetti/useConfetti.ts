/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import { useEffect, useRef, useState } from "react"

interface Size {
  width: number
  height: number
}
interface Vector {
  x: number
  y: number
}
interface ConfettiOptions {
  particleSize: Size
  gravity: number
  friction?: number
  colorSet?: string[]
}

interface InitialParticleOptions {
  initialPosition: Vector // in 0-1, relative position on canvas [x, y]
  initialSpeed: number
  initialAngle: number // 0-360
}

interface Sprite {
  id: number
  position: Vector
  velocity: Vector
  size: Size
  rotation: [pitch: number, yaw: number, roll: number]
  angularSpeed: [pitch: number, yaw: number, roll: number]
  swing: number
  color: string
}

export default function useConfetti(canvas: HTMLCanvasElement | null, confettiOptions: ConfettiOptions) {
  const sprites = useRef<{ [id: number]: Sprite }>({})
  const spriteIds = useRef<number[]>([])
  const nextId = useRef<number>(0)
  const prevFrame = useRef<number>(0)
  const drawHandle = useRef<number>(0)
  const [active, setActive] = useState(false)

  // start draw when active
  useEffect(() => {
    if (active) {
      console.log("start")
      window.requestAnimationFrame((t) => (prevFrame.current = t))
      drawHandle.current = window.requestAnimationFrame(draw)
    } else {
      console.log("stop")
      window.cancelAnimationFrame(drawHandle.current)
    }
  }, [active])

  useEffect(() => {
    function resizeCanvas() {
      if (!canvas) return
      canvas.width = canvas.clientWidth
      canvas.height = canvas.clientHeight
    }
    resizeCanvas()

    window.addEventListener("resize", resizeCanvas)
    return () => window.removeEventListener("resize", resizeCanvas)
  }, [canvas])

  // draw next frame
  const draw = (time: number) => {
    if (!canvas) return
    const ctx = canvas.getContext("2d")!

    // timing
    const dt = time - prevFrame.current
    prevFrame.current = time

    ctx.clearRect(0, 0, canvas.width, canvas.height)

    spriteIds.current.map((id) => {
      const sprite = sprites.current[id]
      addMovement(sprite, dt, confettiOptions.gravity, confettiOptions.friction)
      addRotation(sprite)
      addSwingMovement(sprite, canvas)
      drawParticle(ctx, sprite)
    })

    // remove invisible falling
    const invisibleFalling = spriteIds.current.filter((id) => {
      const sprite = sprites.current[id]
      const invisible = sprite.position.y > canvas.height * 1.2
      const falling = sprite.velocity.y > 0
      return invisible && falling
    })
    invisibleFalling.map((id) => delete sprites.current[id])
    spriteIds.current = spriteIds.current.filter((id) => !invisibleFalling.includes(id))

    // if sprites are all gone, inactivate canvas
    if (spriteIds.current.length === 0) {
      return setActive(false)
    }

    drawHandle.current = window.requestAnimationFrame(draw)
  }

  function addParticle(particleOptions: InitialParticleOptions) {
    if (!canvas) return

    // sprite
    const { initialPosition, initialSpeed, initialAngle } = particleOptions
    const { x, y } = initialPosition

    const sprite: Sprite = {
      id: ++nextId.current,
      position: { x: canvas.width * x, y: canvas.height * y },
      velocity: {
        x: initialSpeed * Math.cos(deg2Rad(initialAngle)),
        y: initialSpeed * Math.sin(deg2Rad(initialAngle)),
      },
      size: confettiOptions.particleSize,
      rotation: [Math.random() * Math.PI, Math.random() * Math.PI, Math.random() * Math.PI],
      angularSpeed: [
        getRandomAngularSpeed(0.02, 0.05),
        getRandomAngularSpeed(0.02, 0.05),
        getRandomAngularSpeed(0.04, 0.09),
      ],
      swing: Math.random() * 2 * Math.PI,
      color: getRandomColor(confettiOptions.colorSet),
    }

    spriteIds.current.push(sprite.id)
    sprites.current[sprite.id] = sprite
    setActive(true)
  }

  return {
    addParticle,
    stop: () => setActive(false),
    resume: () => setActive(true),
  }
}

function deg2Rad(degree: number) {
  return (degree / 180) * Math.PI
}

function addMovement(sprite: Sprite, dt: number, gravity: number, friction = 0) {
  const { position, velocity } = sprite

  const { x, y } = position
  const { x: vx, y: vy } = velocity

  sprite.velocity = { x: (1 - friction) * vx, y: (1 - friction) * (vy + gravity * (dt / 1000)) }
  sprite.position = { x: x + vx * (dt / 1000), y: y + vy * (dt / 1000) }
}

function addRotation(sprite: Sprite) {
  const [p, y, r] = sprite.rotation
  const [dp, dy, dr] = sprite.angularSpeed

  sprite.rotation = [p + dp, y + dy, r + dr]
}

function addSwingMovement(sprite: Sprite, canvasSize: Size) {
  const { x, y } = sprite.position
  const { y: vy } = sprite.velocity

  // do not swing during going up
  if (vy < 0) return
  const swingX = 0.4 * (vy / canvasSize.height)
  const swingY = 0.4

  sprite.swing += 0.1
  sprite.position = { x: x + Math.cos(sprite.swing) * swingX, y: y + Math.sin(sprite.swing) * swingY }
}

function drawParticle(ctx: CanvasRenderingContext2D, sprite: Sprite) {
  const [pitch, yaw, roll] = sprite.rotation
  const width = Math.max(0.2 * sprite.size.width, Math.abs(sprite.size.width * Math.sin(pitch)))
  const height = sprite.size.height * Math.cos(yaw)

  ctx.beginPath()
  ctx.lineWidth = width
  ctx.strokeStyle = sprite.color
  const dx = height * Math.cos(roll)
  const dy = height * Math.sin(roll)
  ctx.moveTo(sprite.position.x - dx, sprite.position.y - dy)
  ctx.lineTo(sprite.position.x + dx, sprite.position.y + dy)
  ctx.stroke()
}

function getRandomInRange(min: number, max: number) {
  return min + Math.random() * (max - min)
}

function getRandomInt(min: number, max: number) {
  const r = getRandomInRange(min, max)
  return Math.floor(r)
}

function getRandomColor(colorSet?: string[]) {
  if (colorSet) {
    const index = getRandomInt(0, colorSet.length)
    return colorSet[index]
  }
  const hue = getRandomInt(0, 360)
  const sat = 100
  const light = getRandomInt(45, 55)
  return `hsl(${hue}, ${sat}%, ${light}%)`
}

function getRandomAngularSpeed(min: number, max: number) {
  const angularSpeed = getRandomInRange(min, max)
  if (Math.random() < 0.5) {
    return -angularSpeed
  }
  return angularSpeed
}
