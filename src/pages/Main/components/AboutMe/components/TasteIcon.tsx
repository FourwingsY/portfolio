import modalActions from "@store/modal/modal.actions"
import { useDispatch } from "@store/useStore"

import * as S from "../AboutMe.style"
import { Taste } from "../data"

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
    <S.TasteIcon onClick={showInformation} style={{ animationDelay: `${Math.random().toFixed(2)}s` }}>
      {taste.icon}
    </S.TasteIcon>
  )
}

export default TasteIcon
