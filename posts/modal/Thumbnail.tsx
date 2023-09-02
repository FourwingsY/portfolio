import { useRouter } from "next/router"

import { useModal } from "@/lib/hooks/useModal"

import * as S from "./Thumbnail.style"

const ModalThumbnail = () => {
  const { openModal } = useModal()
  const router = useRouter()

  function askToRead(e: React.MouseEvent) {
    e.preventDefault()
    openModal({
      type: "Alert",
      props: {
        message: "Wanna read my post?",
        confirmText: "Sure",
        onConfirm: () => router.push("/showcase/modal"),
      },
    })
  }
  const createButton = (delay: number) => (
    <S.Button onClick={askToRead} style={{ animationDelay: `-${delay * 2}ms` }}>
      Read This
    </S.Button>
  )
  return (
    <S.ModalThumbnail>
      <S.Row style={{ marginTop: -10, marginLeft: -20 }}>
        {createButton(1300)}
        {createButton(2300)}
        {createButton(500)}
        {createButton(100)}
        {createButton(800)}
        {createButton(2900)}
      </S.Row>
      <S.Row>
        {createButton(1800)}
        {createButton(1000)}
        {createButton(2000)}
        {createButton(400)}
        {createButton(2700)}
        {createButton(1500)}
      </S.Row>
      <S.Row style={{ marginLeft: -40 }}>
        {createButton(1400)}
        {createButton(2400)}
        {createButton(200)}
        {createButton(1100)}
        {createButton(2800)}
        {createButton(1700)}
      </S.Row>
      <S.Row style={{ marginLeft: -10 }}>
        {createButton(900)}
        {createButton(3000)}
        {createButton(1200)}
        {createButton(700)}
        {createButton(300)}
        {createButton(2200)}
      </S.Row>
      <S.Row style={{ marginLeft: -70 }}>
        {createButton(1600)}
        {createButton(1900)}
        {createButton(600)}
        {createButton(2100)}
        {createButton(0)}
        {createButton(2600)}
      </S.Row>
    </S.ModalThumbnail>
  )
}
export default ModalThumbnail
