import dayjs from "dayjs"
import { NextResponse } from "next/server"

const query = `{
  user(login: "fourwingsy") {
    contributionsCollection(
      from: "${dayjs().subtract(51, 'week').startOf('day').toISOString()}"
      to: "${dayjs().endOf('week').toISOString()}"
    ) {
      contributionCalendar {
        totalContributions
        weeks {
          contributionDays {
            weekday
            date
            contributionCount
            color
          }
        }
        months {
          name
          year
          firstDay
          totalWeeks
        }
      }
    }
  }
}`

export async function GET(): Promise<NextResponse> {
  try {
    if (!process.env.GITHUB_TOKEN) {
      return NextResponse.json({ error: "GitHub token not configured" }, { status: 500 })
    }

    const response = await fetch("https://api.github.com/graphql", {
      method: "POST",
      headers: { 
        authorization: `Bearer ${process.env.GITHUB_TOKEN}`,
        "Content-Type": "application/json",
        "User-Agent": "Portfolio-App/1.0"
      },
      body: JSON.stringify({ query }),
    })

    if (!response.ok) {
      console.error(`GitHub API error: ${response.status} ${response.statusText}`)
      return NextResponse.json(
        { error: "Failed to fetch GitHub data" }, 
        { status: response.status }
      )
    }

    const data = await response.json()

    // Check for GraphQL errors
    if (data.errors) {
      console.error("GitHub GraphQL errors:", data.errors)
      return NextResponse.json(
        { error: "GitHub API returned errors" }, 
        { status: 400 }
      )
    }

    return NextResponse.json(data)
  } catch (error) {
    console.error("Error fetching GitHub commits:", error)
    return NextResponse.json(
      { error: "Internal server error" }, 
      { status: 500 }
    )
  }
}
