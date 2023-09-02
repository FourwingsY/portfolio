import { kdTree } from "kd-tree-javascript"
import { SVD } from "svd-js"

import { Point } from "../models"

class Transform2D {
  static IDENTITY = [
    [1, 0, 0],
    [0, 1, 0],
    [0, 0, 1],
  ]

  matrix: number[][]
  constructor(matrix?: number[][]) {
    this.matrix = matrix ?? Transform2D.IDENTITY
  }

  multiply(other: Transform2D): Transform2D {
    const result = [
      [0, 0, 0],
      [0, 0, 0],
      [0, 0, 0],
    ]
    const a = this.matrix
    const b = other.matrix
    for (let i = 0; i < 3; i++) {
      for (let k = 0; k < 3; k++) {
        for (let j = 0; j < 3; j++) {
          result[i][j] += a[i][k] * b[k][j]
        }
      }
    }
    return new Transform2D(result)
  }

  transpose(): Transform2D {
    const result = [
      [0, 0, 0],
      [0, 0, 0],
      [0, 0, 0],
    ]
    const a = this.matrix
    for (let i = 0; i < 3; i++) {
      for (let k = 0; k < 3; k++) {
        result[i][k] = a[k][i]
      }
    }
    return new Transform2D(result)
  }
}

export class PointT {
  x: number
  y: number
  t: number

  constructor(x: number, y: number, t: number) {
    this.x = x
    this.y = y
    this.t = t
  }

  static fromPoint(p: Point): PointT {
    return new PointT(p.x, p.y, 1)
  }

  toPoint(): Point {
    return new Point(this.x, this.y)
  }

  applyTransform(transform: Transform2D): void {
    const { x, y, t } = this
    const [a, b, c, d, e, f, g, h, i] = transform.matrix.flat()
    this.x = a * x + b * y + c * t
    this.y = d * x + e * y + f * t
    this.t = g * x + h * y + i * t
  }
}

type ICPOptions = {
  initialPose?: number[]
  maxIterations: number
  tolerance: number
}

// Small number to compare floats
export const EPS = 1e-15

// References: [1] https://igl.ethz.ch/projects/ARAP/svd_rot.pdf
// [2] Least Squares Fitting of Two 3-D Point Sets <linked in repo>

/**
 * Implementation of point to point ICP
 * @author Yousef Yassin
 */
class PointToPoint {
  /**
   * KDTree for correspondence lookup.
   */
  kdTree: kdTree<Point>

  /**
   * Initializes new Point To Plane strategy
   * with the provided reference cloud.
   * @param reference The reference cloud.
   */
  constructor(reference: Point[]) {
    this.kdTree = this.initKdTree(reference)
  }

  /**
   * Initializes the KDTree with the points
   * in the supplied reference cloud.
   * @param reference The reference cloud
   * @returns The initialized KDTree.
   */
  initKdTree(refPoints: Point[]) {
    // Euclidean distance metric for the KD-Tree KNN search
    const dist = (a: Point, b: Point) => Math.pow(a.x - b.x, 2) + Math.pow(a.y - b.y, 2)
    // KD-tree to get correspondences.
    return new kdTree(refPoints, dist, ["x", "y"])
  }

  /**
   * Returns a matrix of point correspondences for
   * each column (point) in the supplied source
   * cloud matrix. The average distance
   * between correspondences is returned as
   * an error proxy.
   * @param sourceMat The source cloud matrix
   * @returns The matrix of correspondences and the
   * average error.
   */
  getCorrespondences(sourcePoints: Point[]): { correspondences: Point[]; error: number } {
    const correspondences = sourcePoints.map(() => new Point(0, 0))

    let errorSum = 0
    for (let i = 0; i < sourcePoints.length; i++) {
      const point = sourcePoints[i]
      const [[{ x, y }, dist]] = this.kdTree.nearest(point, 1)

      errorSum += dist

      correspondences[i].x = x
      correspondences[i].y = y
    }

    return { correspondences, error: errorSum / sourcePoints.length }
  }

  public computeOptimalTransform(sourcePoints: Point[]) {
    const { correspondences, error } = this.getCorrespondences(sourcePoints)

    const pointCount = sourcePoints.length

    // Compute centroids
    const centroidSource = new Point(
      sourcePoints.reduce((acc, p) => acc + p.x, 0) / pointCount,
      sourcePoints.reduce((acc, p) => acc + p.y, 0) / pointCount
    )
    const centroidCorrespondences = new Point(
      correspondences.reduce((acc, p) => acc + p.x, 0) / pointCount,
      correspondences.reduce((acc, p) => acc + p.y, 0) / pointCount
    )

    // Center the source and correspondence cloud
    const centeredSource = sourcePoints.map((p) => new Point(p.x - centroidSource.x, p.y - centroidSource.y))
    const centeredCorrespondence = correspondences.map(
      (p) => new Point(p.x - centroidCorrespondences.x, p.y - centroidCorrespondences.y)
    )

    // Compute the optimal transform, the proof for the equations
    // below is linked in source [2] above.
    // const N = centeredSource.matMul(centeredCorrespondence.transpose());
    const N = [
      [
        centeredSource.reduce((acc, p, i) => acc + p.x * centeredCorrespondence[i].x, 0),
        centeredSource.reduce((acc, p, i) => acc + p.y * centeredCorrespondence[i].x, 0),
      ],
      [
        centeredSource.reduce((acc, p, i) => acc + p.x * centeredCorrespondence[i].y, 0),
        centeredSource.reduce((acc, p, i) => acc + p.y * centeredCorrespondence[i].y, 0),
      ],
    ]
    const { u, v } = SVD(N)

    const R = [
      [u[0][0] * v[0][0] + u[0][1] * v[0][1], u[0][0] * v[1][0] + u[0][1] * v[1][1]],
      [u[1][0] * v[0][0] + u[1][1] * v[0][1], u[1][0] * v[1][0] + u[1][1] * v[1][1]],
    ]

    // Translation is difference between the centroids following
    // rotation of the source centroid.
    const translatedCentroid = new Point(
      centroidSource.x * R[0][0] + centroidSource.y * R[0][1],
      centroidSource.x * R[1][0] + centroidSource.y * R[1][1]
    )
    const translation = new Point(
      centroidCorrespondences.x - translatedCentroid.x,
      centroidCorrespondences.y - translatedCentroid.y
    )

    // Create the affine transform
    const optimalTransform = new Transform2D([
      [R[0][0], R[0][1], translation.x],
      [R[1][0], R[1][1], translation.y],
      [0, 0, 1],
    ])

    return { optimalTransform, error }
  }
}

export default function pointToPoint(
  source: Point[],
  reference: Point[],
  options: ICPOptions
): { transform: Transform2D; error: number } {
  const strategy = new PointToPoint(reference)
  const { maxIterations, tolerance } = options

  // Initialize the transform from source to ref
  let transform = new Transform2D()

  const calculator = source.map(PointT.fromPoint)

  // Tracks the error
  let prevError = Number.MAX_SAFE_INTEGER
  // Tracks the consecutive times error - prevError was less than tolerance.
  let times = 0
  // Tracks the error between the transformed source and ref.
  let error = 0

  // Start the ICP iterations
  for (let iterCount = 0; iterCount < maxIterations; iterCount++) {
    // t 값만 변형한다.
    calculator.forEach((p, i) => {
      p.x = source[i].x
      p.y = source[i].y
    })
    calculator.forEach((p) => p.applyTransform(transform))
    const transformed = calculator.map((p) => p.toPoint())

    // Compute the optimal transform
    const res = strategy.computeOptimalTransform(transformed)
    const { optimalTransform } = res
    error = res.error

    // Apply the optimal transform, and update the persistent transform.
    transform = transform.multiply(optimalTransform)

    // Check if we can return early.
    if (Math.abs(prevError - error) < tolerance) {
      if (++times > 10) {
        break
      }
    } else {
      times = 0
      prevError = error
    }
  }

  // Return the final transform from source to ref
  return { transform, error }
}
