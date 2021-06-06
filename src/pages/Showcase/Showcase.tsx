import { useRouter } from "next/router"

import modalActions from "@store/modal/modal.actions"
import { useDispatch } from "@store/useStore"

import Layout from "@pages/Layout"

import Link from "@components/Link"

import ScreenMonitor from "./Adaptive/ScreenMonitor"
import FireworksCanvas from "./Confetti/FireworksCanvas"
import * as S from "./Showcase.style"

const Showcase = () => {
  const dispatch = useDispatch()
  const router = useRouter()
  function openModal(e: React.MouseEvent) {
    e.preventDefault()
    dispatch(
      modalActions.openModal({
        type: "Alert",
        props: {
          message: "Wanna read my post?",
          confirmText: "Sure",
          onConfirm: () => router.push("/showcase/modal"),
        },
      })
    )
  }

  return (
    <Layout>
      <S.Showcase>
        <S.Card>
          <Link href="/showcase/confetti">
            <S.FixedRate169>
              <S.CardThumbnail>
                <FireworksCanvas />
              </S.CardThumbnail>
            </S.FixedRate169>
            <S.CardBody>
              <S.CardTitle>Coding Confetti on Canvas</S.CardTitle>
            </S.CardBody>
          </Link>
        </S.Card>
        <S.Card>
          <Link href="/showcase/adaptive">
            <S.FixedRate169>
              <S.CardThumbnail>
                <ScreenMonitor />
              </S.CardThumbnail>
            </S.FixedRate169>
            <S.CardBody>
              <S.CardTitle>Adaptive Design</S.CardTitle>
            </S.CardBody>
          </Link>
        </S.Card>
        <S.Card>
          <Link href="/showcase/modal">
            <S.FixedRate169>
              <S.CardThumbnail>
                <S.Button onClick={openModal}>Open Modal</S.Button>
              </S.CardThumbnail>
            </S.FixedRate169>
            <S.CardBody>
              <S.CardTitle>Typed Modal system</S.CardTitle>
            </S.CardBody>
          </Link>
        </S.Card>
      </S.Showcase>
    </Layout>
  )
}

export default Showcase
