import { makeHull } from "./convexHull"
import { image1, image2, image3, image4, image5, image6 } from "./images"
import { getBoundingRect, getCentroid, getMAR, rectToPolygon, rotatePolygon } from "./mar"
import { Point } from "./types"

export default function ComparePills() {
  return (
    <div style={{ width: 600, margin: "5rem auto" }}>
      <p>SUM OF DISTANCE TO CLOSEST POINT</p>
      <table style={{ width: "100%", background: "white" }}>
        <tr>
          <th></th>
          <td>image1</td>
          <td>image2</td>
          <td>image3</td>
          <td>image4</td>
          <td>image5</td>
          <td>image6</td>
        </tr>
        <tr>
          <th>image1</th>
          <td>{comparePolygons(image1, image1).toFixed(4)}</td>
          <td>{comparePolygons(image1, image2).toFixed(4)}</td>
          <td>{comparePolygons(image1, image3).toFixed(4)}</td>
          <td>{comparePolygons(image1, image4).toFixed(4)}</td>
          <td>{comparePolygons(image1, image5).toFixed(4)}</td>
          <td>{comparePolygons(image1, image6).toFixed(4)}</td>
        </tr>
        <tr>
          <th>image2</th>
          <td></td>
          <td>{comparePolygons(image2, image2).toFixed(4)}</td>
          <td>{comparePolygons(image2, image3).toFixed(4)}</td>
          <td>{comparePolygons(image2, image4).toFixed(4)}</td>
          <td>{comparePolygons(image2, image5).toFixed(4)}</td>
          <td>{comparePolygons(image2, image6).toFixed(4)}</td>
        </tr>
        <tr>
          <th>image3</th>
          <td></td>
          <td></td>
          <td>{comparePolygons(image3, image3).toFixed(4)}</td>
          <td>{comparePolygons(image3, image4).toFixed(4)}</td>
          <td>{comparePolygons(image3, image5).toFixed(4)}</td>
          <td>{comparePolygons(image3, image6).toFixed(4)}</td>
        </tr>
        <tr>
          <th>image4</th>
          <td></td>
          <td></td>
          <td></td>
          <td>{comparePolygons(image4, image4).toFixed(4)}</td>
          <td>{comparePolygons(image4, image5).toFixed(4)}</td>
          <td>{comparePolygons(image4, image6).toFixed(4)}</td>
        </tr>
        <tr>
          <th>image5</th>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td>{comparePolygons(image5, image5).toFixed(4)}</td>
          <td>{comparePolygons(image5, image6).toFixed(4)}</td>
        </tr>
        <tr>
          <th>image6</th>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td>{comparePolygons(image6, image6).toFixed(4)}</td>
        </tr>
      </table>

      <div style={{ position: "relative", width: 320, height: 320, background: "white", marginTop: 20 }}>
        <style>{`
          .p {
            position: absolute;
            width: 5px;
            height: 5px;
            border-radius: 50%;
            opacity: 0.5;
          }
          .p1 {
            background: red;
          }
          .p2 {
            background: blue;
          }
          .p3 {
            background: green;
          }
        `}</style>
        <p style={{ fontSize: 10, marginLeft: 4 }}>
          <div className="p p1" style={{ position: "relative", display: "inline-block", opacity: 1, marginRight: 4 }} />
          image1
        </p>
        <p style={{ fontSize: 10, marginLeft: 4 }}>
          <div className="p p2" style={{ position: "relative", display: "inline-block", opacity: 1, marginRight: 4 }} />
          image3
        </p>
        {image1.map((p, i) => (
          <div className="p p1" key={i} style={{ top: p.y, left: p.x }} />
        ))}
        {image3.map((p, i) => (
          <div className="p p2" key={i} style={{ top: p.y, left: p.x }} />
        ))}
      </div>

      <div style={{ position: "relative", width: 320, height: 320, background: "white", marginTop: 20 }}>
        <style>{`
          .p {
            position: absolute;
            width: 5px;
            height: 5px;
            border-radius: 50%;
            opacity: 0.5;
          }
          .p1 {
            background: red;
          }
          .p2 {
            background: blue;
          }
          .p3 {
            background: green;
          }
        `}</style>
        <p style={{ fontSize: 10, marginLeft: 4 }}>
          <div className="p p1" style={{ position: "relative", display: "inline-block", opacity: 1, marginRight: 4 }} />
          image1 - normalized
        </p>
        <p style={{ fontSize: 10, marginLeft: 4 }}>
          <div className="p p2" style={{ position: "relative", display: "inline-block", opacity: 1, marginRight: 4 }} />
          image3 - normalized
        </p>
        {getNormalizedPoints(image1).map((p, i) => (
          <div className="p p1" key={i} style={{ top: 160 + 160 * p.y, left: 160 + 160 * p.x }} />
        ))}
        {getNormalizedPoints(image3).map((p, i) => (
          <div className="p p2" key={i} style={{ top: 160 + 160 * p.y, left: 160 + 160 * p.x }} />
        ))}
      </div>
    </div>
  )
}

function comparePolygons(polygon1: Point[], polygon2: Point[]): number {
  const sorted1 = getNormalizedPoints(polygon1).sort((a, b) => a.x - b.x)
  const sorted2 = getNormalizedPoints(polygon2).sort((a, b) => a.x - b.x)

  const tensor1 = sorted1.map((p) => getDistance(findNearestPoint(sorted2, p), p))
  const tensor2 = sorted2.map((p) => getDistance(findNearestPoint(sorted1, p), p))
  const diff = tensor1.map((v, i) => tensor1[i] - tensor2[i])

  return diff.reduce((a, b) => a + b, 0)
}

function findNearestPoint(polygon: Point[], point: Point) {
  let minDistance = Infinity
  let minPoint = polygon[0]
  for (const p of polygon) {
    const distance = getDistance(p, point)
    if (distance < minDistance) {
      minDistance = distance
      minPoint = p
    }
  }
  return minPoint
}

function getDistance(p1: Point, p2: Point) {
  return Math.sqrt((p1.x - p2.x) ** 2 + (p1.y - p2.y) ** 2)
}

function getNormalizedPoints(polygon: Point[]) {
  const hull = makeHull(polygon)
  const { mar, minAngle } = getMAR(hull)
  const boundingRect = getBoundingRect(rectToPolygon(mar))
  const center = getCentroid(hull)
  const rotatedPoints = rotatePolygon(polygon, center, -minAngle)

  const normalizedPoints = rotatedPoints.map(({ x, y }) => ({
    x: (x - boundingRect.x) / boundingRect.width - 0.5,
    y: (y - boundingRect.y) / boundingRect.height - 0.5,
  }))
  return normalizedPoints
}
