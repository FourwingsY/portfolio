import Giscus from "@giscus/react"
import "github-markdown-css/github-markdown.css"
import Head from "next/head"

import Layout from "@pages/Layout"

import * as S from "./PostLayout.style"

interface Props {
  meta: { id: string; title: string; written: string; keywords: string[] }
}
export default function PostLayout({ meta, children }: React.PropsWithChildren<Props>) {
  return (
    <Layout>
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
        {children}
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
    </Layout>
  )
}
