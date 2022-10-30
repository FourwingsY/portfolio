import { endOfWeek, startOfDay, subWeeks, formatISO } from "date-fns"
import { NextApiHandler } from "next"

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

const handler: NextApiHandler = async (req, res) => {
  const response = await fetch("https://api.github.com/graphql", {
    method: "POST",
    headers: { authorization: `Bearer ${process.env.GITHUB_TOKEN}` },
    body: JSON.stringify({ query }),
  })
  const data = await response.json()
  res.json(data)
}

export default handler
