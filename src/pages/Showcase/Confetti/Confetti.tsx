import Layout from "@pages/Layout"

import { ContentsWidth } from "@styles/adaptive"

import Post from "../components/Post"
import ConfettiCanvas from "./ConfettiCanvas"
import FireworksCanvas from "./FireworksCanvas"

const Confetti = () => {
  return (
    <Layout>
      <ContentsWidth>
        <ConfettiCanvas />
        <Post markdownPath="/posts/confetti.md" />
        <FireworksCanvas />
      </ContentsWidth>
    </Layout>
  )
}

export default Confetti
