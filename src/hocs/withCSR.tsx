import { useEffect, useState } from "react"

const withCSR = <P,>(Component: React.ComponentType<P>) => {
  const WithCSR = (props: P) => {
    const [isMounted, setMounted] = useState(false)
    useEffect(() => setMounted(true), [])
    if (!isMounted) return null

    return <Component {...props} />
  }
  return WithCSR
}

export default withCSR
