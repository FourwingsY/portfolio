import styled, { css } from "styled-components"

export const ScreenMonitor = styled.div`
  width: 100%;
`
export const ScreenWidth = styled.p``
export const ScreenType = styled.p``

export const ScreenMeter = styled.svg`
  .yours {
    transition: transform 1s;
  }
`

const fontSize = css`
  ${({ theme }) => (theme.desktop ? 30 : theme.tabletL ? 40 : theme.tabletP ? 50 : 60)}
`
export const Text = styled.text<{ active?: boolean }>`
  font: ${fontSize}px sans-serif;
  text-anchor: middle;
  ${({ active }) =>
    active &&
    css`
      fill: red;
    `}
`

const smallFont = css`
  ${({ theme }) => (theme.desktop ? 25 : theme.tabletL ? 34 : theme.tabletP ? 40 : 50)}
`
export const SmallText = styled(Text)`
  font: ${smallFont}px sans-serif;
`
