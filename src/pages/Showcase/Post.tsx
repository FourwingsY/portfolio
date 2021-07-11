import Head from "next/head"

import Layout from "@pages/Layout"

import { ContentsWidth } from "@styles/adaptive"

import LiveExample from "./sections/LiveExample"
import Post from "./sections/Post"

interface SSGProps {
  post: Post.Parsed
}
const ShowcasePost: React.FC<SSGProps> = ({ post }) => {
  return (
    <Layout>
      <Head>
        <title>{post.metadata.title}</title>
      </Head>
      <ContentsWidth style={{ paddingTop: "2rem", paddingBottom: "2rem" }}>
        <LiveExample postId={post.metadata.id} />
        <Post content={post.content} />
      </ContentsWidth>
    </Layout>
  )
}

export default ShowcasePost
