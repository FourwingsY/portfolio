import { useEffect, useState } from "react"

import * as S from "./Thumbnail.style"

const SuspenseThumbnail = () => {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    if (loading) {
      setTimeout(() => setLoading(false), 3000)
    }
  }, [loading])

  function handleReload(e: React.MouseEvent) {
    e.stopPropagation()
    e.preventDefault()
    setLoading(true)
  }
  return (
    <S.SuspenseThumbnail>
      <S.Tag>{`<Suspense>`}</S.Tag>
      <S.Indent>
        {loading && <Loader />}
        {!loading && (
          <S.ContentsWrapper>
            <S.Contents />
            <S.Button onClick={handleReload}>Reload</S.Button>
          </S.ContentsWrapper>
        )}
      </S.Indent>
      <S.Tag>{`</Suspense>`}</S.Tag>
    </S.SuspenseThumbnail>
  )
}
export default SuspenseThumbnail

const Loader = () => (
  <S.Loader>
    <S.Dot />
    <S.Dot />
    <S.Dot />
    <S.Dot />
    <S.Dot />
    <S.Dot />
    <S.Dot />
    <S.Dot />
  </S.Loader>
)
