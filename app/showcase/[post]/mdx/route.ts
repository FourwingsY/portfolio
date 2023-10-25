import fs from "fs/promises"
import { NextRequest, NextResponse } from "next/server"
import path from "path"

export async function GET(request: NextRequest, { params }: { params: { post: string } }): Promise<NextResponse> {
  const postPath = path.join(process.cwd(), "posts", params.post)
  const text = await fs.readFile(path.join(postPath, "post.mdx"), "utf8")
  const metadata = await fs.readFile(path.join(postPath, "metadata.json"), "utf8").then((data) => JSON.parse(data))
  return NextResponse.json({ source: text, metadata })
}
