import "github-markdown-css/github-markdown.css"
import { MDXRemote } from "next-mdx-remote/rsc"
import highlight from "rehype-highlight"
import gfm from "remark-gfm"

import fetch from "@/lib/thirdParties/fetch"
import { ScreenMonitor } from "@/posts/adaptive-design/components"
import { ConfettiSimulator } from "@/posts/confetti/components"
import { ModalTester } from "@/posts/modal/components"

import Tooltip from "@/components/Tooltip"

const components = { ScreenMonitor, ConfettiSimulator, Tooltip, ModalTester }

async function getPost(id: string) {
  return fetch(`/showcase/${id}/mdx`).then((res) => res.json() as Promise<Post.Parsed>)
}

interface Props {
  params: Promise<{ post: string }>
}

export default async function PostPage(props: Props) {
  const params = await props.params
  const post = await getPost(params.post)

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
      components={components}
    />
  )
}
