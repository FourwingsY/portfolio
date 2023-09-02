import { ContentsWidth } from "@/lib/styles/adaptive"

import Commits from "./sections/Commits"
import Contributes from "./sections/Contributes"

const Activity = () => {
  return (
    <ContentsWidth style={{ paddingTop: "2rem", paddingBottom: "2rem" }}>
      <Contributes />
      <Commits />
    </ContentsWidth>
  )
}

export default Activity
