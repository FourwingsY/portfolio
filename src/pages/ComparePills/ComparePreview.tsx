import { useEffect, useState } from "react"

import * as S from "./ComparePills.style"
import { PointSet } from "./models"

interface Props {
  set1: PointSet | undefined
  set2: PointSet | undefined
}
export default function ComparePreview({ set1, set2 }: Props) {
  const [error, setError] = useState(999)
  // init canvas
  useEffect(initCanvas, [])

  useEffect(() => {
    if (!set1 || !set2) return
    initCanvas(document.querySelector(".raw canvas") as HTMLCanvasElement)
    initCanvas(document.querySelector(".norm canvas") as HTMLCanvasElement)
    drawRawData(set1, "#ff000080")
    drawRawData(set2, "#0000ff80")
    drawNormalizedData(set1, "#ff000080", set2, "#0000ff80")
  }, [set1, set2])

  function initCanvas(canvas?: HTMLCanvasElement) {
    if (!canvas) return
    canvas.width = 592
    canvas.height = 592
  }

  function drawRawData(set: PointSet, color: string) {
    const canvas = document.querySelector(".raw canvas") as HTMLCanvasElement
    const ctx = canvas.getContext("2d")!

    function r(x: number) {
      return (x * 592) / 720
    }

    ctx.fillStyle = color
    set.points.forEach((p) => {
      ctx.beginPath()
      ctx.arc(r(p.x), r(p.y), 3, 0, 2 * Math.PI)
      ctx.fill()
      ctx.closePath()
    })

    // draw convex hull
    const hull = set.getHull()
    ctx.strokeStyle = color
    // hull.getLoop().forEach((p, i) => {
    //   if (i === 0) {
    //     ctx.moveTo(r(p.x), r(p.y))
    //   } else {
    //     ctx.lineTo(r(p.x), r(p.y))
    //   }
    // })
    // ctx.stroke()

    const { mar, rotated } = set.getMAR()
    const boundingRect = mar.asPointSet().rotate(rotated, hull.getCentroid()).getLoop()
    boundingRect.forEach((p, i) => {
      if (i === 0) {
        ctx.moveTo(r(p.x), r(p.y))
      } else {
        ctx.lineTo(r(p.x), r(p.y))
      }
    })
    ctx.stroke()
  }

  async function drawNormalizedData(set1: PointSet, color1: string, set2: PointSet, color2: string) {
    const canvas = document.querySelector(".norm canvas") as HTMLCanvasElement
    const ctx = canvas.getContext("2d")!

    const rotatedSet1 = rectangulatePointSet(set1)
    const rotatedSet2 = rectangulatePointSet(set2)
    const final1 = adjustScale(rotatedSet1, rotatedSet2)

    const res = await fetch("http://localhost:3000/api/icp", {
      method: "post",
      body: JSON.stringify({
        a: final1.points.flatMap((p) => [p.x, p.y, 0]),
        b: rotatedSet2.points.flatMap((p) => [p.x, p.y, 0]),
      }),
    })
    const { transform, error } = await res.json()
    setError(error)
    const [ax, ay, , , bx, by, , , , , , , dx, dy] = transform

    function r(x: number) {
      return (x * 592) / 720
    }

    ctx.fillStyle = color1
    final1.points.forEach((p) => {
      ctx.beginPath()
      ctx.arc(r(ax * p.x + bx * p.y + dx), r(ay * p.x + by * p.y + dy), 3, 0, 2 * Math.PI)
      ctx.fill()
      ctx.closePath()
    })

    ctx.fillStyle = color2
    rotatedSet2.points.forEach((p) => {
      ctx.beginPath()
      ctx.arc(r(p.x), r(p.y), 3, 0, 2 * Math.PI)
      ctx.fill()
      ctx.closePath()
    })
  }

  if (!set1 || !set2) return null

  return (
    <S.ComparePreview>
      <div className="raw">
        <h3>Raw data</h3>
        <canvas />
      </div>
      <div className="norm">
        <h3>
          Normalized data <button>See json</button>
          <br />
          Error: {error.toFixed(2)}
        </h3>
        <canvas />
      </div>
    </S.ComparePreview>
  )
}

function getAngleToRotate(angle: number) {
  const target = Math.min(angle, Math.PI / 2 - angle)
  if (target === angle) return angle
  return angle - Math.PI / 2
}

function rectangulatePointSet(set: PointSet) {
  const rotationCenter = set.getHull().getCentroid()
  const { rotated } = set.getMAR()
  const normalizedAngle = (rotated + Math.PI) % (Math.PI / 2)
  const angleToRotate = getAngleToRotate(normalizedAngle)
  const rotatedSet = set.rotate(-angleToRotate, rotationCenter)

  return rotatedSet
}

function adjustScale(set: PointSet, ref: PointSet) {
  // ref가 있으면 ref와 사이즈를 좀 맞춘다
  const { width, height } = set.getBoundingRect()
  const { width: refWidth, height: refHeight } = ref.getBoundingRect()
  const ratio = (refWidth / width + refHeight / height) / 2
  return set.scale(ratio)
}
