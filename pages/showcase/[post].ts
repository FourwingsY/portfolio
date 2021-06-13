import { GetStaticPaths, GetStaticProps } from "next"

export { default } from "@pages/Showcase/Post"

export const getStaticProps: GetStaticProps<{ post?: string }, { post: string }> = async (ctx) => {
  await Promise.resolve()
  return { props: { post: ctx.params?.post } }
}

export const getStaticPaths: GetStaticPaths = async () => {
  await Promise.resolve()
  const posts = ["adaptive", "modal", "confetti"]
  return { paths: posts.map((post) => `/showcase/${post}`), fallback: false }
}
