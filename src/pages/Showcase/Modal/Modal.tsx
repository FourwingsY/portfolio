import Layout from "@pages/Layout"

import { ContentsWidth } from "@styles/adaptive"

import LiveExample from "../components/LiveExample"
import Post from "../components/Post"

const Modal = () => {
  return (
    <Layout>
      <ContentsWidth>
        <LiveExample post="modal" />
        <Post markdownPath="/posts/modal.md" />
      </ContentsWidth>
    </Layout>
  )
}

export default Modal
