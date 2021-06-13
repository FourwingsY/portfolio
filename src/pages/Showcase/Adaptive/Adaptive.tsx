import Layout from "@pages/Layout"

import { ContentsWidth } from "@styles/adaptive"

import LiveExample from "../components/LiveExample"
import Post from "../components/Post"

const Adaptive = () => {
  return (
    <Layout>
      <ContentsWidth>
        <LiveExample post="adaptive" />
        <Post markdownPath="/posts/adaptive.md" />
      </ContentsWidth>
    </Layout>
  )
}

export default Adaptive
