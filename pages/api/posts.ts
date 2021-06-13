import fs from "fs/promises"
import metadataParser from "markdown-yaml-metadata-parser"
import { NextApiHandler } from "next"
import path from "path"

interface PostMetadata {
  key: string
  title: string
  author: string
  written: string
}
const POSTS_DIR = "./public/posts"
const handler: NextApiHandler = async (req, res) => {
  const markdowns = await fs.readdir(POSTS_DIR)
  const metadatas = await Promise.all(
    markdowns.map(async (md) => {
      const key = md.replace(/\.md/, "")
      const text = await (await fs.readFile(path.join(POSTS_DIR, md))).toString()
      const parsed = metadataParser(text)
      return { key, ...parsed.metadata } as PostMetadata
    })
  )
  // sort by recent first
  metadatas.sort((a, b) => (a.written < b.written ? 1 : -1))
  res.json(metadatas)
}

export default handler
