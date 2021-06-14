import styled from "styled-components"

import { ContentsWidth } from "@styles/adaptive"

export const Intro = styled.section`
  overflow: hidden;
  height: calc(100vh - var(--headerHeight) - var(--mainPadding));
`

export const Background = styled.div`
  position: absolute;
  top: 0;
  left: -1rem;
  width: calc(100% + 2rem);
  height: 100vh;
  background: url("/images/intro.jpg") no-repeat;
  background-size: cover;
  background-position: center;
  filter: blur(8px);
  z-index: -1;
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
