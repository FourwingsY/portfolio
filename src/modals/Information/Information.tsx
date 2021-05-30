import { useEffect, useRef } from "react"

import { BasicModalProps } from "@modals/types"

import { useScrollTop } from "@hooks/useScroll"

import * as CS from "../common.style"
import * as S from "./Information.style"

interface Props extends BasicModalProps {
  text: string
}
const Information: React.FC<Props> = ({ visible, text, close }) => {
  const scrollTop = useScrollTop()
  const initialScrollTop = useRef(scrollTop)
  useEffect(() => {
    if (scrollTop !== initialScrollTop.current) close()
  }, [scrollTop])

  return (
    <S.Information visible={visible}>
      <CS.Body>
        <CS.Message>{text}</CS.Message>
      </CS.Body>
    </S.Information>
  )
}

export default Information
