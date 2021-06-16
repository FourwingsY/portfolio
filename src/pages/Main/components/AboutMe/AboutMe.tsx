import { TASTES } from "@constants/tastes"

import * as S from "./AboutMe.style"
import Mole from "./components/Mole"
import TasteIcon from "./components/TasteIcon"

const AboutMe = () => {
  return (
    <S.AboutMe>
      <S.Title>Who am I?</S.Title>
      <S.MoleGame>
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
