import Image from "next/image"

import Layout from "@pages/Layout"

import Link from "@components/Link"

import ScreenMonitor from "./Adaptive/ScreenMonitor"
import FireworksCanvas from "./Confetti/FireworksCanvas"
import * as S from "./Showcase.style"

const Showcase = () => {
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
                <Image src="/images/posts/modal.jpg" layout="fill" objectFit="cover" />
              </S.CardThumbnail>
            </S.FixedRate169>
            <S.CardBody>
              <S.CardTitle>Modal system</S.CardTitle>
            </S.CardBody>
          </Link>
        </S.Card>
      </S.Showcase>
    </Layout>
  )
}

export default Showcase
