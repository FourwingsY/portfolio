import Layout from "@pages/Layout"

import { ContentsWidth } from "@styles/adaptive"

import * as S from "./Main.style"

const Main: React.FC = () => {
  return (
    <Layout>
      <ContentsWidth>
        <S.Title>Hello, This is YG</S.Title>
      </ContentsWidth>
    </Layout>
  )
}

export default Main
