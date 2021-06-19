import styled, { css } from "styled-components"

import { ContentsWidth } from "@styles/adaptive"

export const ShortDescription = styled.div`
  width: 280px;
  text-align: right;
  ${({ theme }) =>
    theme.mobile &&
    css`
      width: 40%;
    `}
`

export const DisplayZone = styled.div`
  position: absolute;
  top: 40px;
  width: 0;
  height: 460px;
  border-radius: 12px;
  transition: all 0.5s;
  background: hsl(220, 60%, 95%);
`

const mobile = css`
  ${ShortDescription} {
    left: 50%;
    transform: translateX(calc(-100% - 20px));
  }
  ${DisplayZone} {
    left: 50%;
    transform: translateX(20px);
  }
  &.active {
    ${ShortDescription} {
      left: 10%;
    }
    ${DisplayZone} {
      transform: translateX(-33vw);
      width: calc(77vw);
    }
  }
`

export const TimelineItem = styled(ContentsWidth)`
  position: relative;
  font-size: 0;
  ${ShortDescription} {
    position: absolute;
    top: 2rem;
    left: 280px;
    transform: translateX(-100%);
    transition: left 0.5s;
  }
  ${DisplayZone} {
    left: 300px;
    transform: translateX(20px);
  }

  &.active {
    ${ShortDescription} {
      left: 40px;
    }
    ${DisplayZone} {
      transform: translateX(-220px);
      width: calc(100% - 100px);
    }
  }
  ${({ theme }) => theme.mobile && mobile}
`
