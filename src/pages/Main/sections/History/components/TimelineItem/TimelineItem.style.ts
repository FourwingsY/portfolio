import styled, { css } from "styled-components"

import { ContentsWidth } from "@styles/adaptive"

export const ShortDescription = styled.div`
  position: relative;
  padding: 2rem 0 0.5rem;
  padding-left: 2rem;
  text-align: left;
  border-left: 2px solid black;
`

export const ProjectName = styled.p`
  font-size: 1.8rem;
  margin: 0.5rem 0;
`
export const Company = styled.p`
  font-size: 1rem;
  ::before {
    content: "@";
  }
`

export const DisplayZone = styled.div`
  position: relative;
  padding: calc(1rem - 2px);
  ::before,
  ::after {
    content: "";
    position: absolute;
    left: 0;
    width: 2rem;
    height: 2rem;
    border-radius: 1rem;
    border: 2px solid transparent;
    box-sizing: border-box;
    transition: 0.5s;
  }
  ::before {
    top: 0;
    border-bottom-color: black;
    transform: translateY(-1rem) rotate(45deg);
  }
  ::after {
    bottom: 0;
    border-top-color: black;
    transform: translateY(1rem) rotate(-45deg);
  }
`

export const BorderBox = styled.div<{ active: boolean }>`
  width: 6rem;
  height: 2rem;
  border: 2px solid black;
  border-color: black black black transparent;
  border-radius: 0 1rem 1rem 0;
  transition: 0.5s;
  box-sizing: content-box;
  overflow: hidden;
  ${({ active }) =>
    active &&
    css`
      width: 100%;
      height: 200px;
      border: 2px solid;
      border-color: black black black transparent;
    `}
`
export const More = styled.span`
  font-size: 1rem;
  line-height: 2;
`

export const LongDescription = styled.div`
  width: 100%;
  height: 200px;
  padding: 1rem;
  font-size: 2rem;
`

export const TimelineItem = styled(ContentsWidth)`
  position: relative;
  font-size: 0;
`
