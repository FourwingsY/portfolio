import { makeHull } from "./logics/convexHull"

export class Point {
  x: number
  y: number

  constructor(x: number, y: number) {
    this.x = x
    this.y = y
  }

  rotate(radian: number, center: Point): Point {
    const cos = Math.cos(radian),
      sin = Math.sin(radian),
      nx = cos * (this.x - center.x) + sin * (this.y - center.y) + center.x,
      ny = cos * (this.y - center.y) - sin * (this.x - center.x) + center.y
    return new Point(nx, ny)
  }
}

export class Rect {
  x: number
  y: number
  width: number
  height: number

  constructor(x: number, y: number, width: number, height: number) {
    this.x = x
    this.y = y
    this.width = width
    this.height = height
  }

  get area(): number {
    return this.width * this.height
  }

  getCenter(): Point {
    return new Point(this.x + this.width / 2, this.y + this.height / 2)
  }

  asPointSet(): PointSet {
    const points = [
      new Point(this.x, this.y),
      new Point(this.x + this.width, this.y),
      new Point(this.x + this.width, this.y + this.height),
      new Point(this.x, this.y + this.height),
    ]
    return new PointSet("", points)
  }
}

export class PointSet {
  id: string
  points: Point[]
  hull: PointSet | null = null
  centroid: Point | null = null

  constructor(id: string, points: Point[]) {
    this.id = id
    this.points = points
  }

  getHull(): PointSet {
    if (!this.hull) {
      this.hull = makeHull(this.points)
    }
    return this.hull
  }

  getLoop(): Point[] {
    const first = this.points[0]
    const last = this.points[this.points.length - 1]
    if (first.x != last.x || first.y != last.y) return [...this.points, this.points[0]]
    return this.points
  }

  getCentroid(): Point {
    if (!this.centroid) {
      const loop = this.getHull().getLoop()
      const first = loop[0]
      let twicearea = 0,
        x = 0,
        y = 0,
        p1,
        p2,
        f
      const pointsCount = loop.length
      for (let i = 0, j = pointsCount - 1; i < pointsCount; j = i++) {
        p1 = loop[i]
        p2 = loop[j]
        f = (p1.y - first.y) * (p2.x - first.x) - (p2.y - first.y) * (p1.x - first.x)
        twicearea += f
        x += (p1.x + p2.x - 2 * first.x) * f
        y += (p1.y + p2.y - 2 * first.y) * f
      }
      f = twicearea * 3
      this.centroid = new Point(x / f + first.x, y / f + first.y)
    }
    return this.centroid
  }

  // MAR : minumym area rectangle
  getMAR(): { mar: Rect; rotated: number } {
    const hull = this.getHull()
    let minArea = 1000 * 1000
    let minAngle = 0
    let mar: Rect = new Rect(0, 0, 0, 0)

    let p0 = hull.points[0]
    let p1 = hull.points[1]
    for (let i = 0; i < hull.points.length - 1; i++) {
      p1 = hull.points[i + 1]
      const angle = Math.atan2(p1.y - p0.y, p1.x - p0.x)
      const rotated = hull.rotate(-1 * angle)
      const rect = rotated.getBoundingRect()
      const area = rect.area

      if (area < minArea) {
        minArea = area
        mar = rect
        minAngle = angle
      }
      p0 = p1
    }

    return { mar, rotated: minAngle }
  }

  rotate(radian: number, center?: Point): PointSet {
    const rotationCenter = center ?? this.getCentroid()
    const newPoints = this.points.map((p) => p.rotate(radian, rotationCenter))
    return new PointSet(`${this.id}-r${radian}`, newPoints)
  }

  scale(value: number, center?: Point): PointSet {
    const c = center ?? new Point(0, 0)
    const newPoints = this.points.map((p) => {
      const x = (p.x - c.x) * value + c.x
      const y = (p.y - c.y) * value + c.y
      return new Point(x, y)
    })
    return new PointSet(`${this.id}-scaled-${value}`, newPoints)
  }

  getBoundingRect(): Rect {
    const xs = this.points.map((p) => p.x)
    const ys = this.points.map((p) => p.y)
    const minX = Math.min(...xs)
    const maxX = Math.max(...xs)
    const minY = Math.min(...ys)
    const maxY = Math.max(...ys)
    return new Rect(minX, minY, maxX - minX, maxY - minY)
  }
}

export async function loadImage(url: string): Promise<PointSet> {
  return await fetch(`http://localhost:3000/api/proxy?url=${url.replace(/\.jpg$/, ".json")}`)
    .then((res) => res.json())
    .then((data: { pred_boxes: [number, number, number, number][] }) => {
      return data.pred_boxes.map(([x, y]) => new Point(x, y))
    })
    .then((points) => new PointSet(url, points))
}
