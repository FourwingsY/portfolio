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
        <div style={{ width: 10, height: "200vh", background: "red" }} />
      </ContentsWidth>
    </Layout>
  )
}

export default Modal
