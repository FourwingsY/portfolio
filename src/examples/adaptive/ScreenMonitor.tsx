import { useEffect, useState } from "react"

import { useResponsiveContext } from "@hocs/withResponsive"

import { throttle } from "@utils/event"

import * as S from "./ScreenMonitor.style"

const ScreenMonitor: React.FC = () => {
  const screenWidth = useScreenWidth()
  const { mobile, tabletP, tabletL, desktop, large, small, tooSmall } = useResponsiveContext()

  const pseudoScreenWidth = Math.min(screenWidth, 1420)
  return (
    <S.ScreenMonitor>
      <S.ScreenMeter viewBox="0 -250 1500 600">
        <g className="breakpoints" transform="translate(0 -30)">
          <S.Text x="360">360</S.Text>
          <S.Text x="600">600</S.Text>
          <S.Text x="900">900</S.Text>
          <S.Text x="1200">1200</S.Text>
        </g>
        <g className="labels">
          <S.Text x="450" y="300" active={small}>
            small
          </S.Text>
          <S.Text x="1200" y="300" active={large}>
            large
          </S.Text>
          <S.Text x="300" y="200" active={mobile}>
            mobile
          </S.Text>
          <S.Text x="750" y="200" active={tabletP}>
            tabletP
          </S.Text>
          <S.Text x="1050" y="200" active={tabletL}>
            tabletL
          </S.Text>
          <S.Text x="1350" y="200" active={desktop}>
            desktop
          </S.Text>
          <S.Text x="180" y="100" active={tooSmall}>
            tooSmall
          </S.Text>
        </g>
        <g className="vertical-lines" stroke="black" strokeWidth="2" strokeDasharray="10 5">
          <path className="360" d="M360 0 V120" />
          <path className="600" d="M600 0 V220" />
          <path className="900" d="M900 0 V320" />
          <path className="1200" d="M1200 0 V220" />
        </g>
        <path className="number-line" d="M0 0 H1500" stroke="black" strokeWidth="2" />
        <g className="yours" transform={`translate(${pseudoScreenWidth} 0)`}>
          <path d={`M0 -100 V 350`} stroke="red" strokeWidth="3" />
          <S.SmallText x="0" y="-170">
            Your screen
          </S.SmallText>
          <S.Text x="0" y="-120" active>
            {screenWidth}
          </S.Text>
        </g>
      </S.ScreenMeter>
    </S.ScreenMonitor>
  )
}

export default ScreenMonitor

function useScreenWidth() {
  const [screenWidth, setScreenWidth] = useState(0)
  useEffect(() => {
    const handleResize = throttle(() => {
      setScreenWidth(window.innerWidth)
    }, 200)
    handleResize()
    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [])

  return screenWidth
}
