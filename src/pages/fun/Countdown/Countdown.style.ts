import styled, { css, keyframes } from "styled-components"

import { palette } from "@styles/theme"

const blinking = keyframes`
  0% {
    border-color: ${palette.primary80};
  }
  10% {
    border-color: red;
  }
  20% {
    border-color: ${palette.primary80};
  }
  30% {
    border-color: red;
  }
  40% {
    border-color: ${palette.primary80};
  }
  50% {
    border-color: red;
  }
  60% {
    border-color: ${palette.primary80};
  }
  70% {
    border-color: red;
  }
  80% {
    border-color: ${palette.primary80};
  }
  90% {
    border-color: red;
  }
  100% {
    border-color: red;
  }
`

export const Timer = styled.div<{ runningOut: boolean }>`
  width: 15rem;
  height: 8rem;
  border: 0.2rem solid ${palette.primary80};
  border-radius: 2rem;
  background-color: ${palette.primary95};
  font-size: 2rem;
  text-align: center;
  line-height: 7.8rem;
  transition: border-color 0.4s ease-in-out;

  ${({ runningOut }) =>
    runningOut &&
    css`
      animation: ${blinking} 5s;
      animation-fill-mode: forwards;
    `})}
`

export const Button = styled.button`
  width: 10rem;
  height: 8rem;
  border-radius: 2rem;
  font-size: 1.75rem;
  :disabled {
    background-color: ${palette.primary98};
  }
`

export const StartButton = styled(Button)`
  background-color: hsl(150, 80%, 50%);
  :not(:disabled):hover {
    background-color: hsl(150, 90%, 50%);
  }
`
export const ResetButton = styled(Button)`
  background-color: hsl(260, 80%, 50%);
  color: white;
  :hover {
    background-color: hsl(260, 90%, 50%);
  }
`
export const AddButton = styled(Button)`
  background-color: hsl(50, 80%, 50%);
  :hover {
    background-color: hsl(50, 90%, 50%);
  }
`

export const Centerize = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  width: 100%;
  ${({ theme }) =>
    theme.mobile &&
    css`
      flex-flow: column;
    `}
`
