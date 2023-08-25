import { NextApiRequest, NextApiResponse } from "next"

interface Request extends NextApiRequest {
  query: {
    url: string
  }
}
export default async function handler(req: Request, res: NextApiResponse): Promise<void> {
  const { url } = req.query as Request["query"]
  const response = await fetch(url)
  const data = await response.json()
  res.send(data)
}
