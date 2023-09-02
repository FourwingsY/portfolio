import { Dispatch, SetStateAction, useEffect, useState } from "react"

import pointToPoint, { PointT } from "./logics/pointToPoint"
import { PointSet, Polygon } from "./models"
import * as S from "./page.style"

interface Props {
  set1: PointSet | undefined
  set2: PointSet | undefined
  onCompareComplete: Dispatch<SetStateAction<Record<string, number>>>
}
export default function ComparePreview({ set1, set2, onCompareComplete }: Props) {
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

    ctx.strokeStyle = color
    const mar = set.getHull().getMAR()
    mar.points.forEach((p, i) => {
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

    const rect1 = rectangulatePointSet(set1)
    const rect2 = rectangulatePointSet(set2)
    const scaled1 = adjustScale(rect1, rect2)

    // const res = await fetch(`${location.origin}/api/icp`, {
    //   method: "post",
    //   body: JSON.stringify({
    //     a: scaled1.points.flatMap((p) => [p.x, p.y, 0]),
    //     b: rect2.points.flatMap((p) => [p.x, p.y, 0]),
    //   }),
    // })
    console.log(Date.now())
    const { transform: tr, error } = pointToPoint(scaled1.points, rect2.points, { maxIterations: 100, tolerance: 1 })
    console.log(Date.now())
    // const { transform, error } = await res.json()
    setError(error)
    onCompareComplete((r) => ({ ...r, [`${set1.id}-${set2.id}`]: error }))

    // const [ax, ay, , , bx, by, , , , , , , dx, dy] = transform

    function r(x: number) {
      return (x * 592) / 720
    }

    ctx.fillStyle = color1
    scaled1.points.forEach((p) => {
      const newP = new PointT(p.x, p.y, 1)
      newP.applyTransform(tr)
      ctx.beginPath()
      ctx.arc(r(newP.x), r(newP.y), 3, 0, 2 * Math.PI)
      // ctx.arc(r(ax * p.x + bx * p.y + dx), r(ay * p.x + by * p.y + dy), 3, 0, 2 * Math.PI)
      ctx.fill()
      ctx.closePath()
    })

    ctx.fillStyle = color2
    rect2.points.forEach((p) => {
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

// ICP가 회전 변환은 좀 취약해서 로컬 최적화에 잘 빠지는 듯 하다
// 포인트셋의 MAR을 좌표계와 평행한 직사각형으로 회전시키는 방향으로 두 데이터셋의 각도를 맞춘다.
function rectangulatePointSet(set: PointSet) {
  const rotationCenter = set.getHull().getCentroid()
  const mar = set.getHull().getMAR()
  const angleToRotate = getAngleToRotate(mar)
  const rotatedSet = set.rotate(angleToRotate, rotationCenter)

  return rotatedSet
}

// MAR의 한 변(가로든 세로든)을 가지고, 회전할 각도를 구한다.
function getAngleToRotate(mar: Polygon) {
  const angle = Math.atan2(mar.points[0].y - mar.points[1].y, mar.points[0].x - mar.points[1].x)
  const normalizedAngle = (angle + Math.PI) % (Math.PI / 2)
  const target = Math.min(normalizedAngle, Math.PI / 2 - normalizedAngle)
  if (target === normalizedAngle) return normalizedAngle
  return normalizedAngle - Math.PI / 2
}

function adjustScale(set: PointSet, ref: PointSet) {
  // ref가 있으면 ref와 사이즈를 좀 맞춘다
  const area = set.getHull().getMAR().getArea()
  const refArea = ref.getHull().getMAR().getArea()
  const ratio = Math.sqrt(refArea / area)
  return set.scale(ratio)
}
