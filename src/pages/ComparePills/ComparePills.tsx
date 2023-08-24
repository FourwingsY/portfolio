import { useEffect, useRef, useState } from "react"

import * as S from "./ComparePills.style"
import ComparePreview from "./ComparePreview"
import CompareTable from "./CompareTable"
import { PointSet, loadImage } from "./models"

export default function ComparePills() {
  const ref = useRef<HTMLInputElement>(null)
  const [pointSetList, setPointSetList] = useState<PointSet[]>([])
  const [compareTarget, setCompareTarget] = useState<[string, string]>(["", ""])

  useEffect(() => {
    ;[
      "https://medility-image-detection-seoul.medility.cc/2023/08/23/6/6_2023-08-23_17:07:30.166978_163881b8-8dea-4024-9e19-de5fc7c9c254.jpg", //0
      "https://medility-image-detection-seoul.medility.cc/2023/08/23/6/6_2023-08-23_17:07:07.362993_70cec1cb-bee7-44ca-8f37-38856ab46916.jpg", //1
      "https://medility-image-detection-seoul.medility.cc/2023/08/23/6/6_2023-08-23_17:07:02.272715_95a42131-4e26-4db8-98ae-25cc51523639.jpg", //2
      "https://medility-image-detection-seoul.medility.cc/2023/08/23/6/6_2023-08-23_17:06:52.664564_9097e55e-0eea-4294-b311-6b09936ee720.jpg", //3
      "https://medility-image-detection-seoul.medility.cc/2023/08/23/6/6_2023-08-23_17:06:50.854215_5a2993b4-fd05-48bc-84c7-9a6d241369ca.jpg", //4
      "https://medility-image-detection-seoul.medility.cc/2023/08/23/6/6_2023-08-23_17:06:27.760251_6e0d2ccd-c2c3-42e7-abe8-b77ca72b1970.jpg", //5
      "https://medility-image-detection-seoul.medility.cc/2023/08/23/6/6_2023-08-23_17:05:47.275205_e16adaf8-9ade-40c6-b75e-da7bc69b7942.jpg", //6
      "https://medility-image-detection-seoul.medility.cc/2023/08/23/6/6_2023-08-23_17:05:20.273270_486cf87b-3f6e-4639-be14-bb2b4be9d876.jpg", //7
    ].map(addData)
  }, [])

  function handleClick() {
    const url = ref.current?.value
    if (!url) return
    addData(url)
  }
  function addData(url: string) {
    if (pointSetList.find((points) => points.id === url)) return
    loadImage(url).then((data) => setPointSetList((list) => [...list, data]))
  }

  function deleteItem(id: string) {
    setPointSetList(pointSetList.filter((points) => points.id !== id))
  }

  return (
    <S.Layout>
      <S.InputWrapper>
        <label htmlFor="url">URL</label>
        <input id="url" ref={ref} placeholder="jpg or json url" />
        <button onClick={handleClick}>추가</button>
      </S.InputWrapper>
      <S.Dataset>
        {pointSetList.map((points, i) => (
          <S.DatasetItem key={i}>
            <span title={points.id}>...{points.id.split("-").at(-1)}</span>
            <S.DeleteButton onClick={() => deleteItem(points.id)}>X</S.DeleteButton>
          </S.DatasetItem>
        ))}
      </S.Dataset>
      {pointSetList.length > 0 && (
        <CompareTable dataset={pointSetList} onSelect={(id1, id2) => setCompareTarget([id1, id2])} />
      )}
      <ComparePreview
        set1={pointSetList.find((points) => points.id === compareTarget[0])}
        set2={pointSetList.find((points) => points.id === compareTarget[1])}
      />
    </S.Layout>
  )
}
