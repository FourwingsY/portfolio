import React, { useEffect, useState } from "react"

const withCSR = <P,>(Component: React.ComponentType<P>) => {
  const WithCSR = ({ children, ...props }: React.PropsWithChildren<P>) => {
    const [isMounted, setMounted] = useState(false)
    useEffect(() => setMounted(true), [])
    if (!isMounted) return null

    return <Component {...(props as P)}>{children}</Component>
  }
  return WithCSR
}

export default withCSR
