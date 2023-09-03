import { NextRequest, NextResponse } from "next/server"

export async function GET(request: NextRequest): Promise<NextResponse> {
  const url = request.nextUrl.searchParams.get("url") as string
  const response = await fetch(url)
  const data = await response.json()
  return NextResponse.json(data)
}
