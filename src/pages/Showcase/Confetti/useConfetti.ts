/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import { useEffect, useRef, useState } from "react"

import { getRandomInRange, getRandomColor } from "@utils/random"

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

interface Callbacks {
  onStart?(): void
  onStop?(): void
}

interface Particle {
  id: number
  position: Vector
  velocity: Vector
  size: Size
  rotation: [pitch: number, yaw: number, roll: number]
  angularSpeed: [pitch: number, yaw: number, roll: number]
  swing: number
  color: string
}

export default function useConfetti(
  canvas: HTMLCanvasElement | null,
  confettiOptions: ConfettiOptions,
  callbacks?: Callbacks
) {
  const particles = useRef<{ [id: number]: Particle }>({})
  const particleIds = useRef<number[]>([])
  const nextId = useRef<number>(0)
  const prevFrame = useRef<number>(0)
  const drawHandle = useRef<number>(0)
  const [active, setActive] = useState(false)

  // start draw when active
  useEffect(() => {
    if (active) {
      window.requestAnimationFrame((t) => (prevFrame.current = t))
      drawHandle.current = window.requestAnimationFrame(draw)
      callbacks?.onStart?.()
    } else {
      window.cancelAnimationFrame(drawHandle.current)
      callbacks?.onStop?.()
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

    particleIds.current.map((id) => {
      const particle = particles.current[id]
      addMovement(particle, dt, confettiOptions.gravity, confettiOptions.friction)
      addRotation(particle)
      addSwingMovement(particle, canvas)
      drawParticle(ctx, particle)
    })

    // remove invisible falling
    const invisibleFalling = particleIds.current.filter((id) => {
      const particle = particles.current[id]
      const invisible = particle.position.y > canvas.height * 1.2
      const falling = particle.velocity.y > 0
      return invisible && falling
    })
    invisibleFalling.map((id) => delete particles.current[id])
    particleIds.current = particleIds.current.filter((id) => !invisibleFalling.includes(id))

    // if particles are all gone, inactivate canvas
    if (particleIds.current.length === 0) {
      return setActive(false)
    }

    drawHandle.current = window.requestAnimationFrame(draw)
  }

  function addParticle(particleOptions: InitialParticleOptions) {
    if (!canvas) return

    const particleId = ++nextId.current
    const particle = createParticle(particleId, canvas, particleOptions, confettiOptions)
    particleIds.current.push(particle.id)
    particles.current[particle.id] = particle
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

function addMovement(particle: Particle, dt: number, gravity: number, friction = 0) {
  const { position, velocity } = particle

  const { x, y } = position
  const { x: vx, y: vy } = velocity

  particle.velocity = { x: (1 - friction) * vx, y: (1 - friction) * (vy + gravity * (dt / 1000)) }
  particle.position = { x: x + vx * (dt / 1000), y: y + vy * (dt / 1000) }
}

function addRotation(particle: Particle) {
  const [p, y, r] = particle.rotation
  const [dp, dy, dr] = particle.angularSpeed

  particle.rotation = [p + dp, y + dy, r + dr]
}

function addSwingMovement(particle: Particle, canvasSize: Size) {
  const { x, y } = particle.position
  const { y: vy } = particle.velocity

  // do not swing during going up
  if (vy < 0) return
  const swingX = 0.4 * (vy / canvasSize.height)
  const swingY = 0.4

  particle.swing += 0.1
  particle.position = { x: x + Math.cos(particle.swing) * swingX, y: y + Math.sin(particle.swing) * swingY }
}

function createParticle(
  id: number,
  canvas: HTMLCanvasElement,
  particleOptions: InitialParticleOptions,
  confettiOptions: ConfettiOptions
) {
  const { initialPosition, initialSpeed, initialAngle } = particleOptions

  const particle: Particle = {
    id,
    position: { x: initialPosition.x * canvas.width, y: initialPosition.y * canvas.height },
    velocity: {
      x: initialSpeed * Math.cos(deg2Rad(initialAngle)),
      y: initialSpeed * Math.sin(deg2Rad(initialAngle)),
    },
    size: confettiOptions.particleSize,
    rotation: [Math.random() * Math.PI, Math.random() * Math.PI, Math.random() * Math.PI],
    angularSpeed: [
      getRandomAngularSpeed(0.25, 0.4),
      getRandomAngularSpeed(0, 0), // no rotation for yaw
      getRandomAngularSpeed(0.1, 0.2),
    ],
    swing: Math.random() * 2 * Math.PI,
    color: getRandomColor(confettiOptions.colorSet),
  }
  return particle
}

function drawParticle(ctx: CanvasRenderingContext2D, particle: Particle) {
  const [pitch, _yaw, roll] = particle.rotation
  const width = particle.size.width
  const height = particle.size.height

  // https://observablehq.com/@kelleyvanevert/projection-of-3d-models-using-javascript-and-html5-canvas
  ctx.transform(1, 0, 0, 1, particle.position.x, particle.position.y)
  ctx.transform(1, 0, 0, Math.cos(pitch), 0, 0)
  ctx.transform(Math.cos(0), 0, 0, 1, 0, 0) // do not use yaw
  ctx.transform(Math.cos(roll), -Math.sin(roll), Math.sin(roll), Math.cos(roll), 0, 0)
  ctx.beginPath()
  ctx.fillStyle = particle.color
  ctx.fillRect(-width / 2, -height / 2, width, height)
  ctx.resetTransform()
}

function getRandomAngularSpeed(min: number, max: number) {
  const angularSpeed = getRandomInRange(min, max)
  if (Math.random() < 0.5) {
    return -angularSpeed
  }
  return angularSpeed
}
