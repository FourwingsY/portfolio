import Layout from "@pages/Layout"

import { ContentsWidth } from "@styles/adaptive"

import Post from "../components/Post"
import ModalTester from "./ModalTester"

const Modal = () => {
  return (
    <Layout>
      <ContentsWidth>
        <ModalTester />
        <Post markdownPath="/posts/modal.md" />
      </ContentsWidth>
    </Layout>
  )
}

export default Modal
