import { format } from "date-fns"
import fs from "fs/promises"
import { NextApiHandler } from "next"
import path from "path"

const COMMITS_DIR = "./public/internal-commits"

const handler: NextApiHandler = async (req, res) => {
  const files = await fs.readdir(COMMITS_DIR)
  const jsons = await Promise.all(
    files.map(async (file) => {
      const data = await (await fs.readFile(path.join(COMMITS_DIR, file))).toString()
      const json = JSON.parse(data) as { [date: string]: number }
      return json
    })
  )
  const merged: { [date: string]: { [repo: string]: number } } = {}
  jsons.map((commits, i) => {
    const fileName = path.basename(files[i], ".json")
    const dates = Object.keys(commits)
    dates.forEach((key) => {
      const date = format(new Date(key), "yyyy-MM-dd")
      merged[date] ??= {}
      merged[date][fileName] = commits[key]
    })
  })
  res.send(merged)
}

export default handler
