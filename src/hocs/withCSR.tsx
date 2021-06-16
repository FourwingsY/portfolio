import React, { useEffect, useState } from "react"

const withCSR = <P,>(Component: React.ComponentType<P>) => {
  const WithCSR: React.FC<P> = ({ children, ...props }) => {
    const [isMounted, setMounted] = useState(false)
    useEffect(() => setMounted(true), [])
    if (!isMounted) return null

    return <Component {...(props as P)}>{children}</Component>
  }
  return WithCSR
}

export default withCSR
