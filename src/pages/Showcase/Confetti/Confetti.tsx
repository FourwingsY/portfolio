import Layout from "@pages/Layout"

import { ContentsWidth } from "@styles/adaptive"

import LiveExample from "../components/LiveExample"
import Post from "../components/Post"

const Confetti = () => {
  return (
    <Layout>
      <ContentsWidth>
        <LiveExample post="confetti" />
        <Post markdownPath="/posts/confetti.md" />
      </ContentsWidth>
    </Layout>
  )
}

export default Confetti
