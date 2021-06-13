import { GetStaticProps } from "next"

export { default } from "@pages/Showcase"

const PROTOCOL = process.env.NODE_ENV === "development" ? "http" : "https"

export const getStaticProps: GetStaticProps = async () => {
  const posts = await fetch(`${PROTOCOL}://${process.env.VERCEL_URL}/api/posts`).then((res) => res.json())
  return { props: { posts } }
}
