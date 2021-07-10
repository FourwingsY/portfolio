import { useEffect, useState } from "react"

import { TASTES } from "@constants/tastes"
import { throttle } from "@utils/event"

import * as S from "./AboutMe.style"
import Mole from "./components/Mole"
import TasteIcon from "./components/TasteIcon"

const AboutMe = () => {
  const [width, setWidth] = useState(0)

  function resetMoleGame() {
    setWidth(window.innerWidth)
  }

  // restart mole game when screen resizes
  useEffect(() => {
    const reset = throttle(resetMoleGame, 500)
    window.addEventListener("resize", reset)
    return () => window.removeEventListener("resize", reset)
  }, [])

  return (
    <S.AboutMe>
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
