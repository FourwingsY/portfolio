import fs from "fs/promises"
import { NextResponse } from "next/server"

import { notEmpty } from "@/lib/utils/types"

export async function GET(): Promise<NextResponse> {
  const posts = await fs.readdir(`./posts`, "utf8")
  const metadata = await Promise.all(
    posts.map((post) =>
      fs
        .readFile(`./posts/${post}/metadata.json`, "utf8")
        .then((text) => JSON.parse(text) as Post.Metadata)
        .catch(() => null),
    ),
  )
  const result = metadata.filter(notEmpty)
  result.sort((a, b) => (a.written < b.written ? 1 : -1))
  return NextResponse.json(result)
}
