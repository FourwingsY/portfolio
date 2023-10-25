import "github-markdown-css/github-markdown.css"
import { Metadata } from "next"
import Head from "next/head"

import fetch from "@/lib/thirdParties/fetch"

import PostWrapper from "./PostWrapper"
import * as S from "./page.style"

async function getPost(id: string) {
  return fetch(`/showcase/${id}/mdx`).then((res) => res.json() as Promise<Post.Parsed>)
}

interface Props {
  params: { post: string }
  children: React.ReactNode
}
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const post = await getPost(params.post as string)
  return {
    title: post.metadata.title,
    keywords: post.metadata.keywords,
  }
}

export default async function PostLayout({ params, children }: Props) {
  const post = await getPost(params?.post as string)

  return (
    <>
      <Head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(getJsonLD(post.metadata)),
          }}
        />
      </Head>
      <S.Contents className="markdown-body">
        <S.Title className="custom">
          {post.metadata.title} <time>{post.metadata.written}</time>
        </S.Title>
        <PostWrapper>{children}</PostWrapper>
      </S.Contents>
    </>
  )
}

function getJsonLD(meta: Post.Metadata) {
  return {
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
  }
}
