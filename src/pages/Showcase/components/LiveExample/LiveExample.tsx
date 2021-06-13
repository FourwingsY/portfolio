import { useEffect, useState } from "react"

interface ImportedModule {
  default: React.ComponentType
}

interface Props {
  post: string
}
const LiveExample: React.FC<Props> = ({ post }) => {
  const [Component, setComponent] = useState<React.ComponentType>()

  useEffect(() => {
    void import(`@examples/${post}`).then((module: ImportedModule) => {
      setComponent(() => module.default)
    })
  }, [post])

  if (!Component) return null
  return <Component />
}

export default LiveExample
