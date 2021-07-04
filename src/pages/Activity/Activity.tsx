import Layout from "@pages/Layout"

import { ContentsWidth } from "@styles/adaptive"

import Commits from "./sections/Commits"
import Contributes from "./sections/Contributes"

const Activity = () => {
  return (
    <Layout>
      <ContentsWidth>
        <Contributes />
        <Commits />
      </ContentsWidth>
    </Layout>
  )
}

export default Activity
