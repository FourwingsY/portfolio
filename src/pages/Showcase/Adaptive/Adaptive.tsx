import Layout from "@pages/Layout"

import { ContentsWidth } from "@styles/adaptive"

import Post from "../components/Post"
import ScreenMonitor from "./ScreenMonitor"

const Adaptive = () => {
  return (
    <Layout>
      <ContentsWidth>
        <Post markdownPath="/posts/adaptive.md" />
        <ScreenMonitor />
      </ContentsWidth>
    </Layout>
  )
}

export default Adaptive
