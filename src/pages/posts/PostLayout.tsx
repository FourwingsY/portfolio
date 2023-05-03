import Giscus from "@giscus/react"
import "github-markdown-css/github-markdown.css"
import Head from "next/head"

import Layout from "@pages/Layout"

import * as S from "./PostLayout.style"

interface Props {
  meta: { title: string; keywords: string[] }
}
export default function PostLayout({ meta, children }: React.PropsWithChildren<Props>) {
  return (
    <Layout>
      <Head>
        <title>{meta.title}</title>
        <meta name="keywords" content={meta.keywords.join(", ")} />
      </Head>
      <S.Contents className="markdown-body">
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
