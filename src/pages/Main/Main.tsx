import Layout from "@pages/Layout"

import { ContentsWidth } from "@styles/adaptive"

import * as S from "./Main.style"
import LikesAndDislikes from "./components/LikesAndDislikes"

const Main: React.FC = () => {
  return (
    <Layout>
      <ContentsWidth>
        <S.Title>Frontend Developer YG</S.Title>
        <LikesAndDislikes />
        {/* <ExperiencedTools /> */}
        {/* <History /> */}
      </ContentsWidth>
    </Layout>
  )
}

export default Main
