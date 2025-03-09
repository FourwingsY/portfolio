import { Taste } from "@/lib/constants/tastes"
import { useModal } from "@/lib/hooks/useModal"

import * as S from "../AboutMe.style"

interface Props {
  taste: Taste
}
const TasteIcon: React.FC<Props> = ({ taste }) => {
  const { openModal } = useModal()
  function showInformation() {
    openModal({
      type: "MoleInformation",
      props: { taste },
      overlayOptions: { closeDelay: 500, dim: false },
    })
  }
  return (
    <S.Jumping style={{ animationDelay: `-${Math.random().toFixed(2)}s` }} suppressHydrationWarning>
      <S.Shaking style={{ animationDelay: `-${Math.random().toFixed(2)}s` }} suppressHydrationWarning>
        <S.TasteIcon onClick={showInformation}>{taste.icon}</S.TasteIcon>
      </S.Shaking>
    </S.Jumping>
  )
}

export default TasteIcon
