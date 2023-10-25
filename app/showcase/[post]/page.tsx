"use client"

import Giscus from "@giscus/react"
import { MDXProvider } from "@mdx-js/react"
import "github-markdown-css/github-markdown.css"
import { MDXRemote } from "next-mdx-remote"
import { useEffect, useState } from "react"

export default function PostPage({ post }: { post: Post.Parsed }) {
  const [components, setComponents] = useState<Record<string, React.ComponentType>>({})

  useEffect(() => {
    ;(async function () {
      // components가 없으면 없는대로 에러 무시
      const module = await import(`../../../posts/${post.metadata.id}/components`).catch(() => void 0)
      setComponents({ ...module })
    })()
  }, [])

  return (
    <MDXProvider components={components}>
      <MDXRemote compiledSource={post?.source} scope={null} frontmatter={false} />
      <Giscus
        repo="FourwingsY/portfolio"
        repoId="MDEwOlJlcG9zaXRvcnkzNzE3NDAyMzg="
        category="Comments"
        categoryId="DIC_kwDOFihOTs4CWOq9"
        mapping="pathname"
        strict="0"
        reactions-enabled="1"
        emit-metadata="0"
        input-position="top"
        theme="light_tritanopia"
        lang="ko"
        loading="lazy"
      />
    </MDXProvider>
  )
}
