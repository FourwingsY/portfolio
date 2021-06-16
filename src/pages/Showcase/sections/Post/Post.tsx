import "github-markdown-css/github-markdown.css"
import highlight from "rehype-highlight"
import gfm from "remark-gfm"

import { Markdown } from "./Post.style"

interface Props {
  content: string
}
const Post: React.FC<Props> = ({ content }) => {
  return (
    <Markdown className="markdown-body" plugins={[gfm]} rehypePlugins={[highlight]}>
      {content}
    </Markdown>
  )
}

export default Post
