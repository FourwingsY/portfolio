import fs from "fs/promises"
import { NextRequest, NextResponse } from "next/server"
import path from "path"

function validatePostId(postId: string): boolean {
  // Only allow alphanumeric characters and hyphens for post IDs
  return /^[a-zA-Z0-9-]+$/.test(postId) && !postId.includes('..')
}

export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ post: string }> },
): Promise<NextResponse> {
  try {
    const { post } = await params
    
    // Validate post ID to prevent path traversal
    if (!validatePostId(post)) {
      return NextResponse.json({ error: "Invalid post ID" }, { status: 400 })
    }
    
    const postsDir = path.join(process.cwd(), "posts")
    const postPath = path.join(postsDir, post)
    
    // Ensure the resolved path is still within the posts directory
    if (!path.normalize(postPath).startsWith(path.normalize(postsDir))) {
      return NextResponse.json({ error: "Invalid post path" }, { status: 400 })
    }
    
    // Check if post directory exists
    const stat = await fs.stat(postPath)
    if (!stat.isDirectory()) {
      return NextResponse.json({ error: "Post not found" }, { status: 404 })
    }
    
    const text = await fs.readFile(path.join(postPath, "post.mdx"), "utf8")
    const metadata = await fs.readFile(path.join(postPath, "metadata.json"), "utf8")
      .then((data) => JSON.parse(data))
    
    return NextResponse.json({ source: text, metadata })
  } catch (error) {
    console.error("Error reading post:", error)
    return NextResponse.json({ error: "Post not found" }, { status: 404 })
  }
}
