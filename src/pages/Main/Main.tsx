import Layout from "@pages/Layout"

import AboutMe from "./sections/AboutMe"
import Intro from "./sections/Intro"

const Main: React.FC = () => {
  return (
    <Layout>
      <Intro />
      <AboutMe />
      {/* <ExperiencedTools /> */}
      {/* <History /> */}
    </Layout>
  )
}

export default Main
