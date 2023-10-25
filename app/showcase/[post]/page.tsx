import "github-markdown-css/github-markdown.css"
import { MDXRemote } from "next-mdx-remote/rsc"
import highlight from "rehype-highlight"
import gfm from "remark-gfm"

import fetch from "@/lib/thirdParties/fetch"

async function getPost(id: string) {
  return fetch(`/showcase/${id}/mdx`).then((res) => res.json() as Promise<Post.Parsed>)
}

interface Props {
  params: { post: string }
}

export default async function PostPage({ params }: Props) {
  const post = await getPost(params?.post as string)

  return (
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
  )
}
