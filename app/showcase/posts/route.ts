import fs from "fs/promises"
import { NextResponse } from "next/server"

export async function GET(): Promise<NextResponse> {
  const posts = await fs.readdir(`./posts`, "utf8")
  const metadata = await Promise.all(
    posts.map((post) =>
      fs
        .readFile(`./posts/${post}/metadata.json`, "utf8")
        .then((text) => JSON.parse(text))
        .catch(() => null),
    ),
  )
  const result = metadata.filter((e) => e)
  result.sort((a, b) => (a.writen < b.written ? 1 : -1))
  return NextResponse.json(result)
}
