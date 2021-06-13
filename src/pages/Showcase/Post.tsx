import Layout from "@pages/Layout"

import { ContentsWidth } from "@styles/adaptive"

import LiveExample from "./components/LiveExample"
import Post from "./components/Post"

interface SSGProps {
  post?: string
}
const ShowcasePost: React.FC<SSGProps> = ({ post }) => {
  return (
    <Layout>
      <ContentsWidth>
        {post && <LiveExample post={post} />}
        <Post markdownPath={`/posts/${post}.md`} />
      </ContentsWidth>
    </Layout>
  )
}

export default ShowcasePost
