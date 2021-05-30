import { useEffect, useRef } from "react"

import { BasicModalProps } from "@modals/types"

import { useScrollTop } from "@hooks/useScroll"

import * as CS from "../common.style"
import * as S from "./Information.style"

interface Props extends BasicModalProps {
  message: string
}
const Information: React.FC<Props> = ({ visible, message, close }) => {
  const scrollTop = useScrollTop()
  const initialScrollTop = useRef(scrollTop)
  useEffect(() => {
    if (scrollTop !== initialScrollTop.current) close()
  }, [scrollTop])

  return (
    <S.Information visible={visible}>
      <CS.Body>
        <CS.Message>{message}</CS.Message>
      </CS.Body>
    </S.Information>
  )
}

export default Information
