import "github-markdown-css/github-markdown.css"
import Head from "next/head"

import Layout from "@pages/Layout"

import * as S from "./PostLayout.style"

interface Props {
  meta: { title: string }
}
export default function PostLayout({ meta, children }: React.PropsWithChildren<Props>) {
  return (
    <Layout>
      <Head>
        <title>{meta.title}</title>
      </Head>
      <S.Contents className="markdown-body" style={{ paddingTop: "2rem", paddingBottom: "2rem" }}>
        {children}
      </S.Contents>
    </Layout>
  )
}
