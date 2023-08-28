import icpts from "icpts"
import { NextApiRequest, NextApiResponse } from "next"

interface Request extends NextApiRequest {
  body: string
}
export default async function handler(req: Request, res: NextApiResponse): Promise<void> {
  await icpts.ready
  const { a, b } = JSON.parse(req.body) as { a: number[]; b: number[] }
  const result = icpts.pointToPoint(a, b, { tolerance: 1, maxIterations: 100 })

  res.send(result)
}
