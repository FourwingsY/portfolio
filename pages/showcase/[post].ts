import fs from "fs/promises"
import metadataParser from "markdown-yaml-metadata-parser"
import { GetStaticPaths, GetStaticProps } from "next"
import path from "path"

export { default } from "@pages/Showcase/Post"

const POSTS_DIR = "./public/posts"

export const getStaticProps: GetStaticProps<{ post?: Post.Parsed }, { post: string }> = async (ctx) => {
  const postId = ctx.params?.post
  if (!postId) return { props: { post: undefined } }

  const markdown = await fs.readFile(path.join(POSTS_DIR, `${postId}.md`)).then((f) => f.toString())
  const parsed = metadataParser<Post.Metadata>(markdown)
  const { content, metadata } = parsed
  return { props: { post: { content, metadata: { ...metadata, id: postId } } } }
}

export const getStaticPaths: GetStaticPaths = async () => {
  const markdowns = await fs.readdir(path.join(POSTS_DIR))
  const posts = markdowns.map((filename) => filename.replace(/\.md/, ""))
  return { paths: posts.map((post) => `/showcase/${post}`), fallback: false }
}
