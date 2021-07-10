import { useEffect, useState } from "react"

import { TASTES } from "@constants/tastes"
import { throttle } from "@utils/event"

import * as S from "./AboutMe.style"
import Mole from "./components/Mole"
import TasteIcon from "./components/TasteIcon"

const AboutMe = () => {
  const [key, setKey] = useState(Date.now())

  function resetMoleGame() {
    setKey(Date.now())
  }

  // restart mole game when screen resizes
  useEffect(() => {
    const reset = throttle(resetMoleGame, 200)
    window.addEventListener("resize", reset)
    return () => window.removeEventListener("resize", reset)
  }, [])

  return (
    <S.AboutMe>
      <S.Title>Who am I?</S.Title>
      <S.MoleGame key={key}>
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
