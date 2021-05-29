import "github-markdown-css/github-markdown.css"
import { useEffect, useState } from "react"
import Markdown from "react-markdown"
import gfm from "remark-gfm"
import styled from "styled-components"

import Layout from "@pages/Layout"

import { ContentsWidth } from "@styles/adaptive"

import ScreenMonitor from "./ScreenMonitor"

const Adaptive = () => {
  const [post, setPost] = useState("")
  useEffect(() => {
    fetch("/posts/adaptive.md")
      .then((response) => response.text())
      .then(setPost)
  }, [])

  return (
    <Layout>
      <ContentsWidth>
        <StyledMarkdown className="markdown-body" plugins={[gfm]}>
          {post}
        </StyledMarkdown>
        <ScreenMonitor />
      </ContentsWidth>
    </Layout>
  )
}

export default Adaptive

const StyledMarkdown = styled(Markdown)`
  margin: 32px 0 16px;
  code {
    color: hsl(220, 70%, 35%);
  }
`
