import Layout from "@pages/Layout"

import AboutMe from "./components/AboutMe"
import Intro from "./components/Intro"

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
