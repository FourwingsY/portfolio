import Layout from "@pages/Layout"

import Intro from "./components/Intro"
import LikesAndDislikes from "./components/LikesAndDislikes"

const Main: React.FC = () => {
  return (
    <Layout>
      <Intro />
      <LikesAndDislikes />
      {/* <ExperiencedTools /> */}
      {/* <History /> */}
    </Layout>
  )
}

export default Main
