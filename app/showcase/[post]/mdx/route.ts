import fs from "fs/promises"
import { serialize } from "next-mdx-remote/serialize"
import { NextRequest, NextResponse } from "next/server"
import path from "path"
import highlight from "rehype-highlight"
import gfm from "remark-gfm"

export async function GET(request: NextRequest, { params }: { params: { post: string } }): Promise<NextResponse> {
  const postPath = path.join(process.cwd(), "posts", params.post)
  const text = await fs.readFile(path.join(postPath, "post.mdx"), "utf8")
  const metadata = await fs.readFile(path.join(postPath, "metadata.json"), "utf8").then((data) => JSON.parse(data))
  const data = await serialize(text, {
    mdxOptions: {
      remarkPlugins: [gfm],
      rehypePlugins: [highlight],
      // https://github.com/hashicorp/next-mdx-remote/issues/350
      development: process.env.NODE_ENV === "development",
    },
  })
  return NextResponse.json({ source: data.compiledSource, metadata })
}
