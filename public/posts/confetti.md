# Coding Confetti on Canvas

캔버스에 폭죽 효과 렌더링하기: [TSParticles](https://particles.js.org)의 [confetti demo](https://codepen.io/matteobruni/pen/NWdKwXG) 같은 것을 만들어보자.

이 글에서는 디테일한 코드는 생략하고 요구사항과 대략적인 구조만 설명한다. 각 코드셋은 설명에 필요한 부분만 따 왔으므로, 전체 코드는 [여기](https://github.com/FourwingsY/portfolio/blob/main/src/pages/Showcase/Confetti/useConfetti.ts)를 참고!

## 단계 나누기

- 파티클 생성하기
- 렌더링하기
- 쏘아올리기
- 중력 효과 주기
- 공기저항 느낌 주기
- 파티클 흔들림 구현하기

## 파티클 생성하기

파티클 생성 시점 / 갯수를 바깥에서 조절할 수 있도록 외부로 노출한다. 여러개의 파티클을 추가하고 싶다면, 반복문을 돌면서 알아서 추가하는걸로 하자.
이렇게 해야 파티클 위치나 각도를 바꿔가면서 다양하게 그리는 유연성이 확보될 수 있을 것 같다.

```ts
interface Size {
  width: number
  height: number
}
interface Vector {
  x: number
  y: number
}

interface InitialParticleOptions {
  initialPosition: Vector // in 0-1, relative position on canvas [x, y]
  initialSpeed: number
  initialAngle: number // 0-360, speed + angle => velocity
}

interface Particle {
  id: number
  position: Vector
  velocity: Vector
  rotation: number
  angularSpeed: number
  size: Size // shape and size? 에이. 일단 사각형으로 그리자.
  color: string
}

export function useConfetti(canvas: HTMLCanvasElement) {
  const particles = useRef<{ [id: number]: Particle }>({}) // 이 형태로 있어야 파티클 데이터를 메모리에서 "지우기" 쉽다.
  const particleIds = useRef<number[]>([]) // 루프를 돌면서 그리기 위해 필요하다

  function addParticle(options: InitialParticleOptions) {
    const particle = createPaticleFromOptions(options)
    particleIds.current.push(particle.id)
    particles.current[particle.id] = particle
  }

  return { addParticle }
}
```

## 렌더링하기

파티클이 추가되면 렌더링될 수 있도록 하자.

```ts
interface ConfettiOptions {
  particleSize: Size
  gravity: number // 파티클의 낙하 속도 결정
  friction?: number // 공기저항이 없으면 점점 더 빠르게 떨어진다.
  colorSet?: string[] // 색상 셋 지정하기
}

export function useConfetti(canvas: HTMLCanvasElement) {
  // draw next frame
  const draw = () => {
    const ctx = canvas.getContext("2d")!

    // draw on canvas
    ctx.clearRect(0, 0, canvas.width, canvas.height)
    particleIds.current.map((id) => {
      const particle = particles.current[id]
      drawParticle(ctx, particle)
    })
  }

  function addParticle(options: InitialParticleOptions) {
    ...
    // trigger animation start when a particle is added
    draw()
  }
}

// 일단 선으로 그린다.
function drawParticle(ctx: CanvasRenderingContext2D, particle: Particle) {
  ctx.beginPath()
  ctx.lineWidth = particle.size.width
  ctx.strokeStyle = particle.color
  const dx = height * Math.cos(particle.rotation)
  const dy = height * Math.sin(particle.rotation)
  ctx.moveTo(particle.position.x - dx, particle.position.y - dy)
  ctx.lineTo(particle.position.x + dx, particle.position.y + dy)
  ctx.stroke()
}

```

## 쏘아올리기

애니메이션이 필요해지는 시점이다. `requestAnimationFrame`을 사용한다.
