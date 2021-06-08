import Layout from "@pages/Layout"

import { ContentsWidth } from "@styles/adaptive"

import Post from "../components/Post"
import Simulator from "./Simulator"

const Confetti = () => {
  return (
    <Layout>
      <ContentsWidth>
        <Simulator />
        <Post markdownPath="/posts/confetti.md" />
      </ContentsWidth>
    </Layout>
  )
}

export default Confetti
