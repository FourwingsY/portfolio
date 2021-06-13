import { GetStaticProps } from "next"

export { default } from "@pages/Showcase"

export const getStaticProps: GetStaticProps = async () => {
  const posts = await fetch(`${process.env.VERCEL_URL}/api/posts`).then((res) => res.json())
  return { props: { posts } }
}
