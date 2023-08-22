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
    </div>
  )
}

function getTensor(image: number[][]) {
  const polygon = image.map(([x, y]) => ({ x, y }))
  return asTensor(polygon)
}

function asTensor(polygon: Point[]) {
  const hull = makeHull(polygon)
  const { mar, minAngle } = getMAR(hull)
  const boundingRect = getBoundingRect(rectToPolygon(mar))
  const center = getCentroid(hull)
  const rotatedPoints = rotatePolygon(polygon, center, -minAngle)

  const normalizedPoints = rotatedPoints.map(({ x, y }) => ({
    x: (x - boundingRect.x) / boundingRect.width - 0.5,
    y: (y - boundingRect.y) / boundingRect.height - 0.5,
  }))

  const sorted = normalizedPoints.sort((a, b) => Math.atan(a.y / (a.x || 0.01)) - Math.atan(b.y / (b.x || 0.01)))
  const tensor = sorted.map(({ x, y }) => Math.abs(x * x + y * y))
  // const tensor = sorted.map(({ x, y }) => Math.abs(x) + Math.abs(y))

  return tensor
}
