import "github-markdown-css/github-markdown.css"
import { useEffect, useState } from "react"
import Markdown from "react-markdown"
import gfm from "remark-gfm"
import styled from "styled-components"

import Layout from "@pages/Layout"

import { ContentsWidth } from "@styles/adaptive"

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
        {/* 지금 이 스크린은 어디에 해당되는지 보여주기 */}
      </ContentsWidth>
    </Layout>
  )
}

export default Adaptive

const StyledMarkdown = styled(Markdown)`
  margin-top: 32px;
  code {
    color: hsl(220, 70%, 35%);
  }
`
