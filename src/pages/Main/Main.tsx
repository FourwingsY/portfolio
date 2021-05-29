import { useEffect, useState } from "react"

import Layout from "@pages/Layout"

import { useResponsiveContext } from "@hocs/withResponsive"

import * as S from "./Main.style"

const Main: React.FC = () => {
  const [screenWidth, setScreenWidth] = useState(0)
  const { DLPM, large, small, tooSmall } = useResponsiveContext()
  const screenType = DLPM("Desktop", "Tablet-Landscape", "Tablet-Portrait", "Mobile")

  useEffect(() => {
    function handleResize() {
      setScreenWidth(window.innerWidth)
    }
    handleResize()
    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [])

  return (
    <Layout>
      <S.Title>Hello, This is YG</S.Title>
      <S.ScreenTypeChecker>
        <S.ScreenType>
          {screenType} - {screenWidth}
        </S.ScreenType>
        {large && <S.ScreenType>Large</S.ScreenType>}
        {small && <S.ScreenType>Small</S.ScreenType>}
        {tooSmall && <S.ScreenType>Too Small!</S.ScreenType>}
      </S.ScreenTypeChecker>
    </Layout>
  )
}

export default Main
