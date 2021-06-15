import styled, { css, keyframes } from "styled-components"

export const LikesAndDislikes = styled.section`
  width: 100%;
  height: 100vh;
`

export const Title = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 30vh;
  font-size: 4rem;
  font-weight: bold;
`

export const MoleGame = styled.div`
  position: relative;
  height: 70vh;
  ${({ theme }) =>
    theme.large &&
    css`
      --moleSize: 5rem;
    `}
  ${({ theme }) =>
    theme.small &&
    css`
      --moleSize: 4rem;
    `}
`
const shaking = keyframes`
  0% {
    transform: rotate(-10deg)
  } 
  10% {
    transform: rotate(10deg)
  } 
  20% {
    transform: rotate(-10deg)
  } 
  30% {
    transform: rotate(10deg)
  } 
  40% {
    transform: rotate(-10deg)
  } 
  50% {
    transform: rotate(10deg)
  } 
  60% {
    transform: rotate(-10deg)
  } 
  70% {
    transform: rotate(10deg)
  }
  80% {
    transform: rotate(-10deg)
  }
  90% {
    transform: rotate(10deg)
  }
  100% {
    transform: rotate(-10deg)
  } 
`
export const Mole = styled.div<{ show: boolean }>`
  position: absolute;
  transform: translate(-50%, -50%);
  font-family: sans-serif;
  font-size: 0;
  cursor: pointer;

  i {
    line-height: 1;
    font-size: var(--moleSize);
  }
  svg {
    width: var(--moleSize);
    height: var(--moleSize);
  }

  opacity: 1;
  transition: opacity 1s;
  ${({ show }) =>
    !show &&
    css`
      opacity: 0;
    `}
`

export const Animate = styled.div`
  animation: ${shaking} 12s ease-in-out infinite;
`
