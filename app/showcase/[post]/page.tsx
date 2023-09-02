"use client"

import Giscus from "@giscus/react"
import { MDXProvider } from "@mdx-js/react"
import "github-markdown-css/github-markdown.css"
import { MDXRemote, MDXRemoteSerializeResult } from "next-mdx-remote"
import Head from "next/head"
import { useParams } from "next/navigation"
import { useEffect, useState } from "react"

import Adaptive from "@examples/adaptive"

import * as S from "./page.style"

async function getPost(id: string) {
  return fetch(`/showcase/${id}/mdx`).then((res) => res.json())
}

export default function PostPage() {
  const [post, setPost] = useState<MDXRemoteSerializeResult<unknown, Post.Metadata>>()
  const params = useParams()

  useEffect(() => {
    ;(async function () {
      const post = await getPost(params?.post as string)
      setPost(post)
    })()
  }, [])

  if (!post) return null

  const meta = post.frontmatter
  return (
    <MDXProvider components={{ Adaptive }}>
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
        <MDXRemote {...post} />
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
