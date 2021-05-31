import "github-markdown-css/github-markdown.css"
import { useEffect, useState } from "react"
import Markdown from "react-markdown"
import highlight from "rehype-highlight"
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
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/highlight.js/10.7.2/styles/github.min.css"
          integrity="sha512-7QTQ5Qsc/IL1k8UU2bkNFjpKTfwnvGuPYE6fzm6yeneWTEGiA3zspgjcTsSgln9m0cn3MgyE7EnDNkF1bB/uCw=="
          crossOrigin="anonymous"
          referrerPolicy="no-referrer"
        />
        <StyledMarkdown className="markdown-body" plugins={[gfm]} rehypePlugins={[highlight]}>
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
