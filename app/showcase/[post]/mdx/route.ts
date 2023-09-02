import fs from "fs/promises"
import { serialize } from "next-mdx-remote/serialize"
import { NextRequest, NextResponse } from "next/server"
import highlight from "rehype-highlight"
import gfm from "remark-gfm"

export async function GET(request: NextRequest, { params }: { params: { post: string } }): Promise<NextResponse> {
  const text = await fs.readFile(`./posts/${params.post}/post.mdx`, "utf8")
  const data = await serialize(text, {
    mdxOptions: {
      remarkPlugins: [gfm],
      rehypePlugins: [highlight],
      // https://github.com/hashicorp/next-mdx-remote/issues/350
      development: process.env.NODE_ENV === "development",
    },
    parseFrontmatter: true,
  })
  return NextResponse.json(data)
}
