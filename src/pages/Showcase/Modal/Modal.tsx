import "github-markdown-css/github-markdown.css"
import { useEffect, useState } from "react"
import Markdown from "react-markdown"
import gfm from "remark-gfm"
import styled from "styled-components"

import Layout from "@pages/Layout"

import { ContentsWidth } from "@styles/adaptive"

import ModalTester from "./ModalTester"

const Modal = () => {
  const [post, setPost] = useState("")
  useEffect(() => {
    fetch("/posts/modal.md")
      .then((response) => response.text())
      .then(setPost)
  }, [])

  return (
    <Layout>
      <ContentsWidth>
        <ModalTester />
        <StyledMarkdown className="markdown-body" plugins={[gfm]}>
          {post}
        </StyledMarkdown>
        <div style={{ width: 10, height: "200vh", background: "red" }} />
      </ContentsWidth>
    </Layout>
  )
}

export default Modal

const StyledMarkdown = styled(Markdown)`
  margin: 32px 0 16px;
  code {
    color: hsl(220, 70%, 35%);
  }
`
