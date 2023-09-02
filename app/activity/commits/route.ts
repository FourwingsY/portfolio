import { endOfWeek, startOfDay, subWeeks, formatISO } from "date-fns"
import { NextResponse } from "next/server"

const query = `{
  user(login: "fourwingsy") {
    contributionsCollection(
      from: "${formatISO(subWeeks(startOfDay(Date.now()), 51))}"
      to: "${formatISO(endOfWeek(Date.now()))}"
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
  const response = await fetch("https://api.github.com/graphql", {
    method: "POST",
    headers: { authorization: `Bearer ${process.env.GITHUB_TOKEN}` },
    body: JSON.stringify({ query }),
  })
  const data = await response.json()
  return NextResponse.json(data)
}
