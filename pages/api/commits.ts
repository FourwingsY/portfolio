import { format } from "date-fns"
import fs from "fs/promises"
import { NextApiHandler } from "next"
import path from "path"

const COMMITS_DIR = "./public/internal-commits"

export interface CommitLog {
  [date: string]: { [repo: string]: number }
}

export interface Result {
  updated: number
  data: CommitLog
}

const handler: NextApiHandler = async (req, res) => {
  const files = await fs.readdir(COMMITS_DIR)
  const stats = await fs.stat(path.join(COMMITS_DIR, files[0]))

  const jsons = await Promise.all(
    files.map(async (file) => {
      const data = await (await fs.readFile(path.join(COMMITS_DIR, file))).toString()
      const json = JSON.parse(data) as { [date: string]: number }
      return json
    })
  )

  const commitLog = jsons.reduce((acc, commits, i) => {
    const repo = path.basename(files[i], ".json")
    const dates = Object.keys(commits)
    dates.forEach((key) => {
      const date = format(new Date(key), "yyyy-MM-dd")
      acc[date] ??= {}
      acc[date][repo] = commits[key]
    })
    return acc
  }, {} as CommitLog)

  const result: Result = { updated: stats.mtime.valueOf(), data: commitLog }
  res.send(result)
}

export default handler
