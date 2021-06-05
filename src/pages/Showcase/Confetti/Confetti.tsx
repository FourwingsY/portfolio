import Layout from "@pages/Layout"

import { ContentsWidth } from "@styles/adaptive"

import Post from "../components/Post"
import ConfettiCanvas from "./ConfettiCanvas"

const Confetti = () => {
  return (
    <Layout>
      <ContentsWidth>
        <ConfettiCanvas />
        <Post markdownPath="/posts/confetti.md" />
      </ContentsWidth>
    </Layout>
  )
}

export default Confetti
