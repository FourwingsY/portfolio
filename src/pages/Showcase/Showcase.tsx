import Layout from "@pages/Layout"

import Link from "@components/Link"

import * as S from "./Showcase.style"

const Showcase = () => {
  return (
    <Layout>
      <S.Showcase>
        <Link href="/showcase/adaptive">
          <S.Card>
            <S.CardTitle>Adaptive Design</S.CardTitle>
          </S.Card>
        </Link>
      </S.Showcase>
    </Layout>
  )
}

export default Showcase
