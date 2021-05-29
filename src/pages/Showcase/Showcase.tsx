import Link from "next/link"

import Layout from "@pages/Layout"

import * as S from "./Showcase.style"

const Showcase = () => {
  return (
    <Layout>
      <S.Showcase>
        <Link href="/showcase/adaptive">
          <a>
            <S.Card>
              <S.CardTitle>Adaptive Design</S.CardTitle>
            </S.Card>
          </a>
        </Link>
      </S.Showcase>
    </Layout>
  )
}

export default Showcase
