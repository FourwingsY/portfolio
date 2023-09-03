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
  ${({ theme }) => (theme.desktop ? "40px" : theme.tabletL ? "45px" : theme.tabletP ? "50px" : "60px")}
`
export const Text = styled.text<{ $active?: boolean }>`
  font: sans-serif;
  font-size: ${fontSize};
  text-anchor: middle;
  ${({ $active }) =>
    $active &&
    css`
      fill: red;
    `}
`

const smallFont = css`
  ${({ theme }) => (theme.desktop ? "30px" : theme.tabletL ? "35px" : theme.tabletP ? "40px" : "50px")}
`
export const SmallText = styled(Text)`
  font: sans-serif;
  font-size: ${smallFont};
`
