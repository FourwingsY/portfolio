import Layout from "@pages/Layout"

import AboutMe from "./sections/AboutMe"
import History from "./sections/History"
import Intro from "./sections/Intro"

const Main: React.FC = () => {
  return (
    <Layout>
      <Intro />
      <AboutMe />
      <History />
    </Layout>
  )
}

export default Main
