import "github-markdown-css/github-markdown.css"
import { MDXRemote } from "next-mdx-remote/rsc"
import highlight from "rehype-highlight"
import gfm from "remark-gfm"

import PostWrapper from "./PostWrapper"

export default async function Post({ post }: { post: Post.Parsed }) {
  return (
    <PostWrapper>
      <MDXRemote
        source={post.source}
        options={{
          mdxOptions: {
            remarkPlugins: [gfm],
            rehypePlugins: [highlight],
            // https://github.com/hashicorp/next-mdx-remote/issues/350
            development: process.env.NODE_ENV === "development",
          },
        }}
      />
    </PostWrapper>
  )
}
