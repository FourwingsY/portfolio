import Image from "next/image"

import Layout from "@pages/Layout"

import Link from "@components/Link"

import * as S from "./Showcase.style"

const Showcase = () => {
  return (
    <Layout>
      <S.Showcase>
        <Link href="/showcase/confetti">
          <S.Card>
            <S.CardThumbnail>
              <Image src="/images/posts/confetti.png" width="720" height="405" objectFit="cover" />
            </S.CardThumbnail>
            <S.CardBody>
              <S.CardTitle>Coding Confetti on Canvas</S.CardTitle>
            </S.CardBody>
          </S.Card>
        </Link>
        <Link href="/showcase/adaptive">
          <S.Card>
            <S.CardThumbnail>
              <Image src="/images/posts/adaptive.png" width="720" height="405" objectFit="cover" />
            </S.CardThumbnail>
            <S.CardBody>
              <S.CardTitle>Adaptive Design</S.CardTitle>
            </S.CardBody>
          </S.Card>
        </Link>
        <Link href="/showcase/modal">
          <S.Card>
            <S.CardThumbnail>
              <Image src="/images/posts/modal.jpg" width="720" height="405" objectFit="cover" />
            </S.CardThumbnail>
            <S.CardBody>
              <S.CardTitle>Modal system</S.CardTitle>
            </S.CardBody>
          </S.Card>
        </Link>
      </S.Showcase>
    </Layout>
  )
}

export default Showcase
