import { NextRequest, NextResponse } from "next/server"

// Whitelist of allowed domains for security
const ALLOWED_DOMAINS = [
  'api.github.com',
  'raw.githubusercontent.com',
  // Add other trusted domains as needed
]

function isUrlAllowed(url: string): boolean {
  try {
    const parsedUrl = new URL(url)
    
    // Only allow HTTPS
    if (parsedUrl.protocol !== 'https:') {
      return false
    }
    
    // Check if domain is in whitelist
    return ALLOWED_DOMAINS.includes(parsedUrl.hostname)
  } catch {
    return false
  }
}

export async function GET(request: NextRequest): Promise<NextResponse> {
  try {
    const url = request.nextUrl.searchParams.get("url")
    
    if (!url) {
      return NextResponse.json({ error: "URL parameter is required" }, { status: 400 })
    }
    
    if (!isUrlAllowed(url)) {
      return NextResponse.json({ error: "URL not allowed" }, { status: 403 })
    }
    
    const response = await fetch(url, {
      headers: {
        'User-Agent': 'Portfolio-App/1.0',
      },
      // Add timeout
      signal: AbortSignal.timeout(5000),
    })
    
    if (!response.ok) {
      return NextResponse.json(
        { error: `HTTP ${response.status}: ${response.statusText}` },
        { status: response.status }
      )
    }
    
    const data = await response.json()
    return NextResponse.json(data)
  } catch (error) {
    console.error("Proxy error:", error)
    return NextResponse.json({ error: "Failed to fetch data" }, { status: 500 })
  }
}
