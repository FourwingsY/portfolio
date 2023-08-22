import { makeHull } from "./convexHull"
import { Point, Rect } from "./types"

// MAR : minumym area rectangle
export function getMAR(points: Array<Point>): { mar: Rect; minAngle: number } {
  const hull = makeHull(points)
  let minArea = 720 * 720
  let minAngle = 0
  let mar: Rect = { x: 0, y: 0, width: 0, height: 0 }

  const center = getCentroid(hull)
  let p0 = hull[0]
  let p1 = hull[1]
  for (let i = 0; i < hull.length - 1; i++) {
    p1 = hull[i + 1]
    const angle = Math.atan2(p1.y - p0.y, p1.x - p0.x)
    const rotated = rotatePolygon(hull, center, -1 * angle)
    const rect = getBoundingRect(rotated)
    const area = rect.width * rect.height
    if (area < minArea) {
      minArea = area
      mar = rect
      minAngle = angle
    }
    p0 = p1
  }

  return { mar, minAngle }
}

// 무게중심 구하기
export function getCentroid(points: Array<Point>): Point {
  const first = points[0],
    last = points[points.length - 1]
  if (first.x != last.x || first.y != last.y) points.push(first)
  let twicearea = 0,
    x = 0,
    y = 0,
    p1,
    p2,
    f
  const pointsCount = points.length
  for (let i = 0, j = pointsCount - 1; i < pointsCount; j = i++) {
    p1 = points[i]
    p2 = points[j]
    f = (p1.y - first.y) * (p2.x - first.x) - (p2.y - first.y) * (p1.x - first.x)
    twicearea += f
    x += (p1.x + p2.x - 2 * first.x) * f
    y += (p1.y + p2.y - 2 * first.y) * f
  }
  f = twicearea * 3
  return { x: x / f + first.x, y: y / f + first.y }
}

export function rotatePolygon(polygon: Array<Point>, center: Point, angle: number): Array<Point> {
  return polygon.map((p) => rotate(center.x, center.y, p.x, p.y, angle))
}

function rotate(cx: number, cy: number, x: number, y: number, angle: number) {
  const radians = (Math.PI / 180) * angle,
    cos = Math.cos(radians),
    sin = Math.sin(radians),
    nx = cos * (x - cx) + sin * (y - cy) + cx,
    ny = cos * (y - cy) - sin * (x - cx) + cy
  return { x: nx, y: ny }
}

export function getBoundingRect(points: Array<Point>): Rect {
  const x = points.map((p) => p.x)
  const y = points.map((p) => p.y)
  const minX = Math.min(...x)
  const maxX = Math.max(...x)
  const minY = Math.min(...y)
  const maxY = Math.max(...y)
  return { x: minX, y: minY, width: maxX - minX, height: maxY - minY }
}

export function rectToPolygon(rect: Rect): Array<Point> {
  return [
    { x: rect.x, y: rect.y },
    { x: rect.x + rect.width, y: rect.y },
    { x: rect.x + rect.width, y: rect.y + rect.height },
    { x: rect.x, y: rect.y + rect.height },
  ]
}
