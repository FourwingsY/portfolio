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

  transform(matrix: number[][]): Point {
    const x = this.x * matrix[0][0] + this.y * matrix[1][0] + matrix[2][0]
    const y = this.x * matrix[0][1] + this.y * matrix[1][1] + matrix[2][1]
    return new Point(x, y)
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

  asPolygon(): Polygon {
    const points = [
      new Point(this.x, this.y),
      new Point(this.x + this.width, this.y),
      new Point(this.x + this.width, this.y + this.height),
      new Point(this.x, this.y + this.height),
    ]
    return new Polygon(points)
  }
}

export class Polygon {
  points: Point[]
  centroid: Point | null = null

  constructor(points: Point[]) {
    this.points = points
    // polygon should be loop
    if (points[0]?.x != points[points.length - 1]?.x || points[0]?.y != points[points.length - 1]?.y) {
      this.points.push(points[0])
    }
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

  getCentroid(): Point {
    if (!this.centroid) {
      const first = this.points[0]
      let twicearea = 0,
        x = 0,
        y = 0,
        p1,
        p2,
        f
      const pointsCount = this.points.length
      for (let i = 0, j = pointsCount - 1; i < pointsCount; j = i++) {
        p1 = this.points[i]
        p2 = this.points[j]
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

  rotate(radian: number, center?: Point): Polygon {
    const rotationCenter = center ?? this.getCentroid()
    const newPoints = this.points.map((p) => p.rotate(radian, rotationCenter))
    return new Polygon(newPoints)
  }

  getArea(): number {
    let area = 0

    for (let i = 0, l = this.points.length; i < l; i++) {
      const addX = this.points[i].x
      const addY = this.points[i == this.points.length - 1 ? 0 : i + 1].y
      const subX = this.points[i == this.points.length - 1 ? 0 : i + 1].x
      const subY = this.points[i].y

      area += addX * addY * 0.5
      area -= subX * subY * 0.5
    }

    return Math.abs(area)
  }

  // MAR : minumym area rectangle
  getMAR(): Polygon {
    let minArea = 1000 * 1000
    let mar: Polygon = new Polygon([])

    let p0 = this.points[0]
    let p1 = this.points[1]
    for (let i = 0; i < this.points.length - 1; i++) {
      p1 = this.points[i + 1]
      const angle = Math.atan2(p1.y - p0.y, p1.x - p0.x)
      const rotated = this.rotate(-1 * angle)
      const rect = rotated.getBoundingRect()
      const area = rect.area

      if (area < minArea) {
        minArea = area
        mar = rect.asPolygon().rotate(angle, this.getCentroid())
      }
      p0 = p1
    }

    return mar
  }
}

export class PointSet {
  id: string
  points: Point[]
  hull: Polygon | null = null

  constructor(id: string, points: Point[]) {
    this.id = id
    this.points = points
  }

  getHull(): Polygon {
    if (!this.hull) {
      this.hull = makeHull(this.points)
    }
    return this.hull
  }

  rotate(radian: number, center?: Point): PointSet {
    const rotationCenter = center ?? this.getHull().getCentroid()
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
  return await fetch(`${location.origin}/api/proxy?url=${url.replace(/\.jpg$/, ".json")}`)
    .then((res) => res.json())
    .then((data: { pred_boxes: [number, number, number, number][] }) => {
      return data.pred_boxes.map(([x, y]) => new Point(x, y))
    })
    .then((points) => new PointSet(url, points))
}
