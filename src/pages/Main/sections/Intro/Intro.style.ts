import styled, { css } from "styled-components"

import { ContentsWidth } from "@styles/adaptive"
import { palette } from "@styles/theme"

export const Intro = styled.section`
  overflow: hidden;
  height: calc(100vh - var(--headerHeight));
  background: linear-gradient(${palette.primary}, white);
`

export const Background = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  background: url("/images/intro.jpg") no-repeat;
  background-size: cover;
  background-position: center;
  filter: blur(8px);
  ${({ theme }) =>
    theme.mobile &&
    css`
      height: 0;
      padding-bottom: 200%;
    `}
`

export const Contents = styled(ContentsWidth)`
  position: relative;
  height: 100%;
`

export const Title = styled.h1`
  position: absolute;
  top: 40%;
  left: 50%;
  transform: translate(-50%, -50%);
  margin-bottom: 2rem;
  font-size: 3.5rem;
  color: white;
  text-shadow: 2px 2px 1px black;
  text-align: center;
  strong {
    font-size: 5rem;
    line-height: 2;
  }
`
