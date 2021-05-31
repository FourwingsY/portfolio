import "github-markdown-css/github-markdown.css"
import { useEffect, useState } from "react"
import highlight from "rehype-highlight"
import gfm from "remark-gfm"

import { Markdown } from "./Post.style"

interface Props {
  markdownPath: string
}
const Post: React.FC<Props> = ({ markdownPath }) => {
  const [post, setPost] = useState("")
  useEffect(() => {
    fetch(markdownPath)
      .then((response) => response.text())
      .then(setPost)
  }, [])

  return (
    <Markdown className="markdown-body" plugins={[gfm]} rehypePlugins={[highlight]}>
      {post}
    </Markdown>
  )
}

export default Post
