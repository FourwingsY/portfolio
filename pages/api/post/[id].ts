import fs from "fs/promises"
import metadataParser from "markdown-yaml-metadata-parser"
import { NextApiHandler } from "next"
import path from "path"

const POSTS_DIR = "./public/posts"
const handler: NextApiHandler = async (req, res) => {
  const id = req.query.id as string
  const text = await fs.readFile(path.join(POSTS_DIR, `${id}.md`)).then((f) => f.toString())
  const parsed = metadataParser(text)
  const { content, metadata } = parsed
  res.json({ content, metadata: { id, ...metadata } })
}

export default handler
