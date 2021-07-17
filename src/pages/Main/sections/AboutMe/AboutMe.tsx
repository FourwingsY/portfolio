import { useEffect, useState } from "react"

import { useResponsiveContext } from "@hocs/withResponsive"

import { TASTES } from "@constants/tastes"
import { throttle } from "@utils/event"

import * as S from "./AboutMe.style"
import Mole from "./components/Mole"
import TasteIcon from "./components/TasteIcon"

const AboutMe = () => {
  const [width, setWidth] = useState(0)
  const [height, setHeight] = useState(0)
  const { mobile } = useResponsiveContext()

  function resetMoleGame() {
    setWidth(window.innerWidth)
  }

  // MOBILE ONLY: calculate height, and fix that height
  useEffect(() => {
    if (mobile) setHeight(window.innerHeight)
  }, [])

  // restart mole game when screen width resizes
  useEffect(() => {
    const reset = throttle(resetMoleGame, 500)
    window.addEventListener("resize", reset)
    return () => window.removeEventListener("resize", reset)
  }, [])

  return (
    <S.AboutMe style={{ height: mobile ? height : undefined }}>
      <S.Title>Who am I?</S.Title>
      <S.MoleGame key={width}>
        {TASTES.map((taste) => (
          <Mole key={taste.name} taste={taste}>
            <TasteIcon taste={taste} />
          </Mole>
        ))}
      </S.MoleGame>
    </S.AboutMe>
  )
}

export default AboutMe
