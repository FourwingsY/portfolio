// import { useEffect, useState } from "react"
import Layout from "@pages/Layout"

import { ContentsWidth } from "@styles/adaptive"

import ModalTester from "./ModalTester"

const Modal = () => {
  // const [post, setPost] = useState("")
  // useEffect(() => {
  //   fetch("/posts/modal.md")
  //     .then((response) => response.text())
  //     .then(setPost)
  // }, [])

  return (
    <Layout>
      <ContentsWidth>
        <ModalTester />
      </ContentsWidth>
    </Layout>
  )
}

export default Modal
