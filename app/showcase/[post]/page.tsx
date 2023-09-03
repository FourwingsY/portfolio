"use client"

import Giscus from "@giscus/react"
import { MDXProvider } from "@mdx-js/react"
import "github-markdown-css/github-markdown.css"
import { MDXRemote } from "next-mdx-remote"
import Head from "next/head"
import { useParams } from "next/navigation"
import { useEffect, useState } from "react"

import * as S from "./page.style"

async function getPost(id: string) {
  return fetch(`/showcase/${id}/mdx`).then((res) => res.json())
}

export default function PostPage() {
  const [post, setPost] = useState<{ source: string; metadata: Post.Metadata }>()
  const [components, setComponents] = useState<Record<string, React.ComponentType>>({})
  const params = useParams()

  useEffect(() => {
    ;(async function () {
      const { source, metadata } = await getPost(params?.post as string)
      setPost({ source, metadata })
    })()
    ;(async function () {
      // components가 없으면 없는대로 에러 무시
      const module = await import(`../../../posts/${params?.post}/components`).catch(() => void 0)
      setComponents({ ...module })
    })()
  }, [])

  if (!post) return null

  const { source, metadata: meta } = post
  return (
    <MDXProvider components={components}>
      <Head>
        <title>{meta.title}</title>
        <meta name="keywords" content={meta.keywords.join(", ")} />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org/",
              "@type": "BlogPosting",
              "@id": `https://yanggoon.dev/showcase/${meta.id}`,
              headline: meta.title,
              name: meta.title,
              datePublished: meta.written,
              author: {
                "@type": "Person",
                "@id": "https://yanggoon.dev",
                name: "Hyeonseok Yang",
                url: "https://yanggoon.dev",
              },
              url: `https://yanggoon.dev/showcase/${meta.id}`,
              isPartOf: {
                "@type": "Blog",
                "@id": "https://yanggoon.dev/showcase/",
                name: "YG's Portfolio",
              },
            }),
          }}
        />
      </Head>
      <S.Contents className="markdown-body">
        <S.Title className="custom">
          {meta.title} <time>{meta.written}</time>
        </S.Title>
        <MDXRemote compiledSource={source} scope={null} frontmatter={false} />
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
      </S.Contents>
    </MDXProvider>
  )
}
