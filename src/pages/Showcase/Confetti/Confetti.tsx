import Layout from "@pages/Layout"

import { ContentsWidth } from "@styles/adaptive"

import Post from "../components/Post"
import ConfettiCanvas from "./ConfettiCanvas"
import Simulator from "./Simulator"

const Confetti = () => {
  return (
    <Layout>
      <ContentsWidth>
        <ConfettiCanvas />
        <Post markdownPath="/posts/confetti.md" />
        <Simulator />
      </ContentsWidth>
    </Layout>
  )
}

export default Confetti
