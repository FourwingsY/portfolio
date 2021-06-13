import Layout from "@pages/Layout"

import { ContentsWidth } from "@styles/adaptive"

import LiveExample from "./components/LiveExample"
import Post from "./components/Post"

interface SSGProps {
  post: Post.Parsed
}
const ShowcasePost: React.FC<SSGProps> = ({ post }) => {
  return (
    <Layout>
      <ContentsWidth>
        <LiveExample postId={post.metadata.id} />
        <Post content={post.content} />
      </ContentsWidth>
    </Layout>
  )
}

export default ShowcasePost
