import { GetStaticPaths, GetStaticProps } from "next"

export { default } from "@pages/Showcase/Post"

const PROTOCOL = process.env.NODE_ENV === "development" ? "http" : "https"

export const getStaticProps: GetStaticProps<{ post?: string }, { post: string }> = async (ctx) => {
  const postKey = ctx.params?.post
  const post = await fetch(`${PROTOCOL}://${process.env.VERCEL_URL}/api/post/${postKey}`).then((res) => res.json())
  return { props: { post: post } }
}

export const getStaticPaths: GetStaticPaths = async () => {
  await Promise.resolve()
  const posts = ["adaptive", "modal", "confetti"]
  return { paths: posts.map((post) => `/showcase/${post}`), fallback: false }
}
