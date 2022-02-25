import { useEffect, useState } from "react"

interface ImportedModule {
  default: React.ComponentType
}

interface Props {
  postId: string
}
const LiveExample: React.FC<Props> = ({ postId }) => {
  const [Component, setComponent] = useState<React.ComponentType>()

  useEffect(() => {
    void import(`@examples/${postId}`)
      .then((module: ImportedModule) => {
        setComponent(() => module.default)
      })
      .catch((e) => void e)
  }, [postId])

  if (!Component) return null
  return <Component />
}

export default LiveExample
