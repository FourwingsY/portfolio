import styled, { css, keyframes } from "styled-components"

import { palette } from "@styles/theme"

export const SuspenseThumbnail = styled.div`
  width: 100%;
  padding: 0 2rem;
  font-size: 0;
`

export const Tag = styled.p`
  font-size: 2rem;
`

export const Indent = styled.div`
  padding: 5% 0;
  margin-left: 2rem;
`

const rotate = keyframes`
  from {
    transform: rotate(0);
  }
  to {
    transform: rotate(360deg);
  }
`

export const ContentsWrapper = styled.div`
  display: flex;
`
export const Contents = styled.div`
  flex: 1;
  width: 5rem;
  height: 5rem;
  padding: 0.5rem;
  border: 3px solid black;
  ::before {
    content: "";
    display: block;
    width: 80%;
    height: 15%;
    margin-bottom: 0.5rem;
    background: rgba(0, 0, 0, 0.5);
  }
  ::after {
    content: "";
    display: block;
    width: 60%;
    height: 15%;
    background: rgba(0, 0, 0, 0.5);
  }
`

export const Button = styled.button`
  position: relative;
  background: ${palette.primary};
  padding: 0.75rem;
  margin: 0.25rem;
  font-size: 1rem;
  color: white;
  z-index: 1;
  box-shadow: 0 3px 1px #333;
  transition: all 0.2s;
  &:hover {
    background: ${palette.primary60};
    box-shadow: 0 2px 1px black;
    transform: translateY(1px);
  }
  &:active {
    background: ${palette.primary70};
    box-shadow: 0 1px 1px black;
    transform: translateY(2px);
  }
`

// ======= Loader =======
export const Loader = styled.div`
  position: relative;
  width: 5rem;
  height: 5rem;
  animation: ${rotate} 10s linear infinite;
`

const bubble = keyframes`
  0% {
    transform: scale(0);
    opacity: 1;
  }
  80% {
    transform: scale(0.7);
    opacity: 0.3;
  }
  100% {
    transform: scale(1);
    opacity: 0;
  }
`

const nthDot = (n: number) => css`
  :nth-child(${n}) {
    transform: rotate(${n * 45}deg);
    ::before {
      background-color: hsl(${n * 45}, 100%, 50%);
      animation-delay: ${-n * 0.2}s;
    }
  }
`
export const Dot = styled.div`
  position: absolute;
  top: 0;
  left: 50%;
  transform-origin: 0 2.5rem;
  ::before {
    content: "";
    display: block;
    width: 2rem;
    height: 2rem;
    background: red;
    border-radius: 50%;
    animation: ${bubble} 1.6s linear infinite;
  }
  ${nthDot(1)};
  ${nthDot(2)};
  ${nthDot(3)};
  ${nthDot(4)};
  ${nthDot(5)};
  ${nthDot(6)};
  ${nthDot(7)};
  ${nthDot(8)};
`
