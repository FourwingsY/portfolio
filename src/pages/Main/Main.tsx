import Layout from "@pages/Layout"

import AboutMe from "./sections/AboutMe"
import History from "./sections/History"
import Intro from "./sections/Intro"

export default function Main() {
  return (
    <Layout>
      <Intro />
      <AboutMe />
      <History />
    </Layout>
  )
}
