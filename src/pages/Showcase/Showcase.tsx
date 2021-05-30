import Image from "next/image"

import Layout from "@pages/Layout"

import Link from "@components/Link"

import * as S from "./Showcase.style"

const Showcase = () => {
  return (
    <Layout>
      <S.Showcase>
        <Link href="/showcase/adaptive">
          <S.Card>
            <S.CardThumbnail>
              <Image src="/images/posts/adaptive.png" width="1134" height="386" />
            </S.CardThumbnail>
            <S.CardBody>
              <S.CardTitle>Adaptive Design</S.CardTitle>
            </S.CardBody>
          </S.Card>
        </Link>
      </S.Showcase>
    </Layout>
  )
}

export default Showcase
