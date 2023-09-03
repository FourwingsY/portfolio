"use client"

import { createContext, useContext, useEffect, useState } from "react"
import { useMediaQuery } from "react-responsive"
import styled, { DefaultTheme, ThemeProvider } from "styled-components"

declare module "styled-components" {
  interface DefaultTheme {
    desktop: boolean
    tabletL: boolean
    tabletP: boolean
    mobile: boolean
    tooSmall: boolean
    large: boolean
    small: boolean
  }
}

const MIMINUM = 360 // some mobile devices are smaller than 360, and will be treated
const MOBILE_MAX = 600
const TABLETP_MAX = 900
const TABLETL_MAX = 1200

const ResponsiveContext = createContext<DefaultTheme>({
  desktop: false,
  tabletL: false,
  tabletP: false,
  mobile: true,
  tooSmall: false,
  large: false,
  small: true,
})

// fix responsive + hydration issue
const HideAndLoad = styled.div<{ $isInitialRender: boolean }>`
  visibility: ${({ $isInitialRender }) => ($isInitialRender ? "hidden" : "visible")};
`

/**
 *                 small                 |           large
 *          mobile         |   tabletP   |   tabletL   |   desktop
 *  tooSmall  |            |             |             |
 * -----------|------------|-------------|-------------|------------->>>>
 *          (360)        (600)         (900)         (1200)
 *         MINIMUM     MOBILE_MAX    TABLETP_MAX   TABLETL_MAX
 */
function useResponsive() {
  const [isMounted, setMounted] = useState(false)
  useEffect(() => setMounted(true), [])

  const isDesktop = useMediaQuery({ minWidth: TABLETL_MAX })
  const isTabletLandscape = useMediaQuery({ minWidth: TABLETP_MAX, maxWidth: TABLETL_MAX - 1 })
  const isTabletPortrait = useMediaQuery({ minWidth: MOBILE_MAX, maxWidth: TABLETP_MAX - 1 })
  const isMobile = useMediaQuery({ maxWidth: MOBILE_MAX - 1 })
  const tooSmall = useMediaQuery({ maxWidth: MIMINUM - 1 })

  // on initialRender, only mobile is true.
  const context = {
    desktop: isMounted && isDesktop,
    tabletL: isMounted && isTabletLandscape,
    tabletP: isMounted && isTabletPortrait,
    mobile: !isMounted || isMobile,
    large: isMounted && (isDesktop || isTabletLandscape),
    small: !isMounted || isMobile || isTabletPortrait,
    tooSmall,
  }
  return { isMounted, ...context }
}

export function useResponsiveContext() {
  const context = useContext(ResponsiveContext)

  // this is utility function
  function DLPM<T>(desktop: T, tabletL: T, tabletP: T, mobile: T) {
    if (context.desktop) return desktop
    if (context.tabletL) return tabletL
    if (context.tabletP) return tabletP
    return mobile
  }

  return { ...context, DLPM }
}

const WithResponsive = ({ children }: { children: React.ReactNode }) => {
  const { isMounted, ...context } = useResponsive()

  return (
    <ThemeProvider theme={context}>
      <ResponsiveContext.Provider value={context}>
        <HideAndLoad $isInitialRender={!isMounted}>{children}</HideAndLoad>
      </ResponsiveContext.Provider>
    </ThemeProvider>
  )
}

export default WithResponsive
