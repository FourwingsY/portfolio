import fs from "fs/promises"
import { getServerSideSitemapIndex } from "next-sitemap"

export async function GET(): Promise<Response> {
  const posts = await fs.readdir("./posts")
  const urls = posts.map((p) => `${process.env.SITE_URL}/showcase/${p}`)
  console.log(urls)

  return getServerSideSitemapIndex(urls)
}
