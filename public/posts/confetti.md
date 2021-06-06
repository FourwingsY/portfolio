# Coding Confetti on Canvas

캔버스에 폭죽 효과 렌더링하기: [TSParticles](https://particles.js.org)의 [confetti demo](https://codepen.io/matteobruni/pen/NWdKwXG) 같은 것을 만들어보자.

이 글에서는 디테일한 코드는 생략하고 요구사항과 대략적인 구조만 설명한다. 각 코드셋은 설명에 필요한 부분만 따 왔으므로, 전체 코드는 [여기](https://github.com/FourwingsY/portfolio/blob/main/src/pages/Showcase/Confetti/useConfetti.ts)를 참고!

## 단계 나누기

- 파티클 생성하기
- 렌더링하기
- 쏘아올리기
- 흔들림 묘사하기

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
  size: Size
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
    // set initial props from options,
    // and some random initial props (color, rotation speed, etc.)
    const particle = createParticle(options)
    particleIds.current.push(particle.id)
    particles.current[particle.id] = particle
  }

  return { addParticle }
}
```

## 렌더링하기

파티클이 추가되면 렌더링될 수 있도록 하자.

```ts
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

// 사각형으로 그린다.
function drawParticle(ctx: CanvasRenderingContext2D, particle: Particle) {
  const { x, y } = particle.position
  const { width, height } = particle.size
  ctx.fillStyle = particle.color
  ctx.fillRect(x - width / 2, y - height / 2, width, height)
}

```

## 쏘아올리기

애니메이션이 필요해지는 시점이다. `requestAnimationFrame`을 사용한다.
requestAnimationFrame이 필요할때만 동작하도록, `active` 상태를 관리하자.

애니메이션을 위해 중력 및 마찰계수 값을 설정 받도록 하자.

```ts
interface ConfettiOptions {
  gravity: number // 파티클의 낙하 속도 결정
  friction?: number // 공기저항이 없으면 점점 더 빠르게 떨어진다.
}

export function useConfetti(canvas: HTMLCanvasElement, confettiOptions: ConfettiOptions) {
  const prevFrame = useRef<number>(0)
  const drawHandle = useRef<number>(0)
  const [active, setActive] = useState(false)

  // start draw when active
  useEffect(() => {
    if (active) {
      window.requestAnimationFrame((t) => (prevFrame.current = t))
      drawHandle.current = window.requestAnimationFrame(draw)
    } else {
      window.cancelAnimationFrame(drawHandle.current)
    }
  }, [active])

  // draw frame
  const draw = (time: number) => {
    const ctx = canvas.getContext("2d")!

    // timing
    const dt = time - prevFrame.current
    prevFrame.current = time

    // draw on canvas
    ctx.clearRect(0, 0, canvas.width, canvas.height)
    particleIds.current.map((id) => {
      const particle = particles.current[id]
      addMovement(particle, dt, confettiOptions)
      drawParticle(ctx, particle)
    })

    // draw next frame
    drawHandle.current = window.requestAnimationFrame(draw)
  }
}
```

매 프레임마다 어느정도로 움직일 지를 결정할 addMovement 함수는 이렇게 생겼다.
리덕스에서 사용하던 것 처럼 object를 새로 만들지 않고 `particle` 오브젝트를 바로 변경한다.

1. 이 방식이 `{ ...prevObject, ...update }` 방식보다 훨씬 빠르게 동작하며,
2. 어차피 다음 프레임이 되면 draw 함수에서 이 값들을 읽어 갈 것이기 때문이다.

리덕스에서 destructing and constructing을 했던 이유는 해당 값이 바뀐걸 리덕스가 알아야만, 재 랜더링이 일어나기 때문이었다는 점을 기억하자.

```ts
function addMovement(particle: Particle, dt: number, confettiOptions: ConfettiOptions) {
  const { position, velocity } = particle
  const { gravity, friction = 0 } = confettiOptions

  const { x, y } = position
  const { x: vx, y: vy } = velocity

  /* position / velocity 중 어느 것을 먼저 계산하는지는 거시적으로는 거의 차이가 없다. */

  // 움직임을 계산한다.
  particle.position = { x: x + vx * (dt / 1000), y: y + vy * (dt / 1000) }

  // 마찰에 의한 감속과 중력에 의한 가속을 더한다.
  // 실제 공기저항 공식과는 차이가 있지만, 이 정도로도 나름 만족스러운 결과물이 나온다.
  particle.velocity = { x: (1 - friction) * vx, y: (1 - friction) * (vy + gravity * (dt / 1000)) }
}
```

## 흔들림 묘사하기

이제 가장 어려운 부분이다. 폭죽 파티클이 흔들리는걸 대체 어떻게 묘사해야 할까?
앞서 소개했던 [confetti demo](https://codepen.io/matteobruni/pen/NWdKwXG) 를 다시 살펴보자. 대략 어떤 축을 기준으로 rotate되는 것 같은 느낌과, 앞뒤로 팽그르르르 돌아가는 듯한 움직임이 눈에 띈다. rotate는 알겠는데, 돌아가는 움직임은 3D로 그린 것만 같다. 이걸 어떻게 캔버스에 그려넣지?

[3D 물체를 캔버스에 그리는 방법](https://observablehq.com/@kelleyvanevert/projection-of-3d-models-using-javascript-and-html5-canvas) 이라는 글에, 이런 움직임을 2D로 계산해내는 방법이 나와있다. 3D 공간에서는 회전축이 3개나 된다. pitch, yaw, roll 이라는 세 가지 회전이다. 그렇다면... 이 폭죽 파티클에 사용될 회전은 주로 pitch(백덤블링 하는 방향의 회전이다.)와 roll(옆구르기 방향의 회전)이다. (yaw는 김연아의 회전이다)

```ts
interface Particle {
  ...
  rotation: [pitch: number, yaw: number, roll: number]
  angularSpeed: [pitch: number, yaw: number, roll: number]
  ...
}
```

파티클의 **회전** 관련 항목을 셋으로 늘렸다.
그리고 회전을 적용했다.

```ts
function addRotation(particle: Particle) {
  const [p, y, r] = particle.rotation
  const [dp, dy, dr] = particle.angularSpeed

  particle.rotation = [p + dp, y + dy, r + dr]
}
```

하지만 더 중요한건, 이 각도를 계산해 사각형을 사각형이 아니도록 그리는 방식이다.

```ts
function drawParticle(ctx: CanvasRenderingContext2D, particle: Particle) {
  const [pitch, yaw, roll] = particle.rotation
  const { width, height } = particle.size

  ctx.transform(1, 0, 0, 1, particle.position.x, particle.position.y)
  ctx.transform(1, 0, 0, Math.cos(pitch), 0, 0)
  ctx.transform(Math.cos(yaw), 0, 0, 1, 0, 0)
  ctx.transform(Math.cos(roll), -Math.sin(roll), Math.sin(roll), Math.cos(roll), 0, 0)
  ctx.fillStyle = particle.color
  ctx.fillRect(-width / 2, -height / 2, width, height)
  ctx.resetTransform()
}
```

## 보너스

사실 여기까지만 하면 파티클이 너무 차분하게 떨어진다. 마치 바람 한 점 없는 날에 내리는 눈 같이, 조용한 수직 낙하를 한다. 하지만 실제로 (방송에서 쓰는) 꽃가루 같은걸 보면 바람 한 점 없어도 이리저리 흔들리며 떨어진다. 그 속사정에는 단순한 공기저항을 넘어서는 복잡다단한 유체역학이 숨어있을테지만, 조금만 단순하게 고민해보자.

그러니까... 떨어지는 파티클은, 좌우로 약간씩의 움직임을 보인다.
매 프레임마다, x 좌표를 좌우로 조금씩 움직여주자. 빠르게 떨어질수록 더 많은 흔들림을 보이는건 어떨까.

```ts
function addSwingMovement(particle: Particle, friction = 0) {
  const { x, y } = particle.position
  const { x: vx, y: vy } = particle.velocity

  // do not swing during going up
  if (vy < 0) return
  const swingX = 0.05 * vy * friction
  const swingY = 0.5 * vx * friction

  particle.swing += 0.2
  particle.position = { x: x + Math.cos(particle.swing) * swingX, y: y + Math.sin(particle.swing) * swingY }
}
```

## 그리고 마지막, 성능

파티클이 많아지면, 속도가 느려진다. 그러니, 화면에서 보이지 않게 된 파티클은 더이상 계산도 렌더링도 하지 않을 수 있도록 정리하자.

```ts
const draw = (time: number) => {
  ...
  // remove invisible falling particles
  const invisibleFalling = particleIds.current.filter((id) => {
    const particle = particles.current[id]
    const invisible = particle.position.y > canvas.height * 1.2
    const falling = particle.velocity.y > 0
    return invisible && falling
  })
  invisibleFalling.map((id) => delete particles.current[id])
  particleIds.current = particleIds.current.filter((id) => !invisibleFalling.includes(id))

  // if particles are all gone, inactivate animation
  if (particleIds.current.length === 0) {
    return setActive(false)
  }
  // else, draw next frame
  ...
}

```

## 예제

이 페이지 상단에 있는 예제는 아래와 같은 코드를 통해 파티클이 쏘아진다.

```ts
const { addParticle, stop, resume } = useConfetti(
  canvas.current,
  {
    gravity: 1000,
    friction: 0.04,
    colorSet: ["red", "aqua", "orange", "deeppink", "greenyellow", "magenta", "yellow", "dodgerblue"],
  },
  { onStart: () => setPlaying(true), onStop: () => setPlaying(false) }
)

function handleClick() {
  for (let i = 0; i < 30; i += 1) {
    const angle = randomRange(-75, -105)
    const speed = randomRange(1300, 1600)
    addParticle({
      size: { width: 10, height: 10 },
      initialPosition: { x: 0.5, y: 1 },
      initialSpeed: speed,
      initialAngle: angle,
    })
  }
}
```

그러니까, 이 옵션들을 잘 조정하면 아래와 같은 이펙트도 가능하다.
