import { similarity } from "ml-distance"
import { useState } from "react"

import { makeHull } from "./convexHull"
import { image1, image2, image3, image4, image5, image6 } from "./images"
import { getBoundingRect, getCentroid, getMAR, rectToPolygon, rotatePolygon } from "./mar"
import { Point } from "./types"

type SimilarityFunctions =
  | "cosine"
  | "czekanowski"
  | "dice"
  | "intersection"
  | "kulczynski"
  | "motyka"
  | "pearson"
  | "squaredChord"
  | "tanimoto"
  | "kumarHassebrook"

export default function ComparePills() {
  const [state, setState] = useState<SimilarityFunctions>("cosine")
  const tensor1 = getTensor(image1)
  const tensor2 = getTensor(image2)
  const tensor3 = getTensor(image3)
  const tensor4 = getTensor(image4)
  const tensor5 = getTensor(image5)
  const tensor6 = getTensor(image6)

  const sim = similarity[state]
  return (
    <div style={{ width: 600, margin: "5rem auto" }}>
      <p style={{ color: "white" }}>
        Similarity algorithms found at <a>https://www.npmjs.com/package/ml-distance</a>
      </p>
      <select onChange={(v) => setState(v.currentTarget.value as SimilarityFunctions)}>
        <option value="cosine">Cosine</option>
        <option value="czekanowski">Czekanowski</option>
        <option value="dice">Dice</option>
        <option value="intersection">Intersection</option>
        <option value="kulczynski">Kulczynski</option>
        <option value="motyka">Motyka</option>
        <option value="pearson">Pearson</option>
        <option value="squaredChord">Squared Chord</option>
        <option value="tanimoto">Tanimoto</option>
        <option value="kumarHassebrook">Kumar Hassebrook</option>
      </select>
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
          <td>{sim(tensor1, tensor1).toFixed(4)}</td>
          <td>{sim(tensor1, tensor2).toFixed(4)}</td>
          <td>{sim(tensor1, tensor3).toFixed(4)}</td>
          <td>{sim(tensor1, tensor4).toFixed(4)}</td>
          <td>{sim(tensor1, tensor5).toFixed(4)}</td>
          <td>{sim(tensor1, tensor6).toFixed(4)}</td>
        </tr>
        <tr>
          <th>image2</th>
          <td></td>
          <td>{sim(tensor2, tensor2).toFixed(4)}</td>
          <td>{sim(tensor2, tensor3).toFixed(4)}</td>
          <td>{sim(tensor2, tensor4).toFixed(4)}</td>
          <td>{sim(tensor2, tensor5).toFixed(4)}</td>
          <td>{sim(tensor2, tensor6).toFixed(4)}</td>
        </tr>
        <tr>
          <th>image3</th>
          <td></td>
          <td></td>
          <td>{sim(tensor3, tensor3).toFixed(4)}</td>
          <td>{sim(tensor3, tensor4).toFixed(4)}</td>
          <td>{sim(tensor3, tensor5).toFixed(4)}</td>
          <td>{sim(tensor3, tensor6).toFixed(4)}</td>
        </tr>
        <tr>
          <th>image4</th>
          <td></td>
          <td></td>
          <td></td>
          <td>{sim(tensor4, tensor4).toFixed(4)}</td>
          <td>{sim(tensor4, tensor5).toFixed(4)}</td>
          <td>{sim(tensor4, tensor6).toFixed(4)}</td>
        </tr>
        <tr>
          <th>image5</th>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td>{sim(tensor5, tensor5).toFixed(4)}</td>
          <td>{sim(tensor5, tensor6).toFixed(4)}</td>
        </tr>
        <tr>
          <th>image6</th>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td>{sim(tensor6, tensor6).toFixed(4)}</td>
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
          image4
        </p>
        {image1
          .map(([x, y]) => ({ x, y }))
          .map((p, i) => (
            <div className="p p1" key={i} style={{ top: p.y, left: p.x }} />
          ))}
        {image4
          .map(([x, y]) => ({ x, y }))
          .map((p, i) => (
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
          image4 - normalized
        </p>
        {getNormalizedPoints(image1.map(([x, y]) => ({ x, y }))).map((p, i) => (
          <div className="p p1" key={i} style={{ top: 160 + 160 * p.y, left: 160 + 160 * p.x }} />
        ))}
        {getNormalizedPoints(image4.map(([x, y]) => ({ x, y }))).map((p, i) => (
          <div className="p p2" key={i} style={{ top: 160 + 160 * p.y, left: 160 + 160 * p.x }} />
        ))}
      </div>
    </div>
  )
}

function getTensor(image: number[][]) {
  const polygon = image.map(([x, y]) => ({ x, y }))
  return asTensor(polygon)
}

function asTensor(polygon: Point[]) {
  const normalizedPoints = getNormalizedPoints(polygon)

  function getTheta(p: Point) {
    if (p.x === 0) {
      return p.y > 0 ? Math.PI / 2 : -Math.PI / 2
    }
    return Math.atan(p.y / p.x)
  }
  function getR(p: Point) {
    return Math.sqrt(p.x * p.x + p.y * p.y)
  }
  const sorted = normalizedPoints.sort((a, b) => getTheta(a) - getTheta(b))
  const tensor = sorted.map((p) => getR(p))
  // const tensor = sorted.map(({ x, y }) => Math.abs(x) + Math.abs(y))

  return tensor
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
