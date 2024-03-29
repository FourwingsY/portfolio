"use client"

import Image from "next/image"
import { useRef, useState } from "react"

import { ContentsWidth } from "@/lib/styles/adaptive"

import ComparePreview from "./ComparePreview"
import CompareTable from "./CompareTable"
import { PointSet, loadImage } from "./models"
import * as S from "./page.style"

export default function ComparePills() {
  const ref = useRef<HTMLInputElement>(null)
  const [pointSetList, setPointSetList] = useState<PointSet[]>([])
  const [compareTarget, setCompareTarget] = useState<[string, string]>(["", ""])
  const [compareResults, setCompareResults] = useState<Record<string, number>>({})

  function handleClick() {
    const url = ref.current?.value
    if (!url) return
    try {
      addData(url)
      ref.current.value = ""
    } catch (e) {
      alert("데이터 로딩 중 에러")
    }
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
      <ContentsWidth>
        <S.InputWrapper>
          <label htmlFor="url">URL</label>
          <input id="url" ref={ref} placeholder="jpg or json url" />
          <button onClick={handleClick}>추가</button>
        </S.InputWrapper>
        <S.Dataset>
          {pointSetList.map((points, i) => (
            <S.DatasetItem key={i} $highlight={compareTarget.findIndex((id) => id === points.id)}>
              <Image src={points.id.replace(/.json$/, ".jpg")} width={250} height={250} alt="image" unoptimized />
              <S.Label>{i + 1}</S.Label>
              <p title={points.id}>...{points.id.split("-").at(-1)}</p>
              <S.DeleteButton onClick={() => deleteItem(points.id)}>X</S.DeleteButton>
            </S.DatasetItem>
          ))}
        </S.Dataset>
        {pointSetList.length > 0 && (
          <CompareTable
            dataset={pointSetList}
            onSelect={(id1, id2) => setCompareTarget([id1, id2])}
            compareResults={compareResults}
          />
        )}
        <ComparePreview
          set1={pointSetList.find((points) => points.id === compareTarget[0])}
          set2={pointSetList.find((points) => points.id === compareTarget[1])}
          onCompareComplete={setCompareResults}
        />
      </ContentsWidth>
    </S.Layout>
  )
}
