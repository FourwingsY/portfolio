import { useRef, useState } from "react"
import { createPortal } from "react-dom"

import * as S from "./Tooltip.style"

interface Props {
  title: string
}
export default function Tooltip({ title, children }: React.PropsWithChildren<Props>) {
  const ref = useRef<HTMLSpanElement>(null)
  const [isHover, setIsHover] = useState(false)
  const [position, setPosition] = useState({ top: 0, left: 0, width: 0, height: 0 })

  function show() {
    const rect = ref.current?.getClientRects()?.[0]
    if (!rect) return
    setIsHover(true)
    setPosition(rect)
  }

  function hide() {
    setIsHover(false)
  }

  const ssr = typeof document === "undefined"
  if (ssr) {
    return (
      <S.TooltipWrapper onMouseOver={show} onMouseOut={hide} ref={ref}>
        {children}
      </S.TooltipWrapper>
    )
  }

  const root = document.getElementById("tooltip-root") || document.body
  return (
    <S.TooltipWrapper onMouseOver={show} onMouseOut={hide} ref={ref}>
      {children}
      {isHover &&
        createPortal(
          <S.Tooltip style={{ top: position.top, left: position.left + position.width / 2 }}>{title}</S.Tooltip>,
          root
        )}
    </S.TooltipWrapper>
  )
}
