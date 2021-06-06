import Image from "next/image"

import Layout from "@pages/Layout"

import Link from "@components/Link"

import * as S from "./Showcase.style"

const Showcase = () => {
  return (
    <Layout>
      <S.Showcase>
        <S.Card>
          <Link href="/showcase/confetti">
            <S.CardThumbnail>
              <Image src="/images/posts/confetti.png" width="720" height="405" objectFit="cover" />
            </S.CardThumbnail>
            <S.CardBody>
              <S.CardTitle>Coding Confetti on Canvas</S.CardTitle>
            </S.CardBody>
          </Link>
        </S.Card>
        <S.Card>
          <Link href="/showcase/adaptive">
            <S.CardThumbnail>
              <Image src="/images/posts/adaptive.png" width="720" height="405" objectFit="cover" />
            </S.CardThumbnail>
            <S.CardBody>
              <S.CardTitle>Adaptive Design</S.CardTitle>
            </S.CardBody>
          </Link>
        </S.Card>
        <S.Card>
          <Link href="/showcase/modal">
            <S.CardThumbnail>
              <Image src="/images/posts/modal.jpg" width="720" height="405" objectFit="cover" />
            </S.CardThumbnail>
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
