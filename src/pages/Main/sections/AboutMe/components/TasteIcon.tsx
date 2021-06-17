import modalActions from "@store/modal/modal.actions"
import { useDispatch } from "@store/useStore"

import { Taste } from "@constants/tastes"

import * as S from "../AboutMe.style"

interface Props {
  taste: Taste
}
const TasteIcon: React.FC<Props> = ({ taste }) => {
  const dispatch = useDispatch()
  function showInformation() {
    dispatch(
      modalActions.openModal({
        type: "MoleInformation",
        props: { taste },
        overlayOptions: { closeDelay: 500, dim: false },
      })
    )
  }
  return (
    <S.Jumping style={{ animationDelay: `-${Math.random().toFixed(2)}s` }}>
      <S.Shaking style={{ animationDelay: `-${Math.random().toFixed(2)}s` }}>
        <S.TasteIcon onClick={showInformation}>{taste.icon}</S.TasteIcon>
      </S.Shaking>
    </S.Jumping>
  )
}

export default TasteIcon
