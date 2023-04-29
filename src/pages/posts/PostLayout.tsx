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
      <S.Contents className="markdown-body">{children}</S.Contents>
    </Layout>
  )
}
