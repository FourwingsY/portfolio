import "github-markdown-css/github-markdown.css"
import Head from "next/head"
import Script from "next/script"

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
        <section className="giscus" />
      </S.Contents>
      <Script
        src="https://giscus.app/client.js"
        data-repo="FourwingsY/portfolio"
        data-repo-id="MDEwOlJlcG9zaXRvcnkzNzE3NDAyMzg="
        data-category="Comments"
        data-category-id="DIC_kwDOFihOTs4CWOq9"
        data-mapping="pathname"
        data-strict="0"
        data-reactions-enabled="1"
        data-emit-metadata="0"
        data-input-position="top"
        data-theme="light_tritanopia"
        data-lang="ko"
        data-loading="lazy"
        crossOrigin="anonymous"
        async
      />
    </Layout>
  )
}
