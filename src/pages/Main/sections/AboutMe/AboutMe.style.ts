import styled, { css, keyframes } from "styled-components"

export const AboutMe = styled.section`
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

const jumping = keyframes`
  from {
    transform: scale(1);
  }
  to {
    transform: scale(1.1);
  }
`
export const Mole = styled.div<{ show: boolean }>`
  position: absolute;
  transform: translate(-50%, -50%);
  opacity: 1;
  transition: opacity 1s;
  animation: ${jumping} 1.3s ease-in-out alternate infinite;
  transform-origin: center;
  ${({ show }) =>
    !show &&
    css`
      opacity: 0;
    `}
`

const shaking = keyframes`
  from {
    transform: rotate(-10deg)
  } 
  to {
    transform: rotate(10deg)
  }
`
export const TasteIcon = styled.div`
  animation: ${shaking} 1s ease-in-out alternate infinite;
  font-family: sans-serif;
  font-size: 0;
  cursor: pointer;
  filter: drop-shadow(2px 2px 3px rgba(0, 0, 0, 0.4));
  i {
    line-height: 1;
    font-size: var(--moleSize);
  }
  svg {
    width: var(--moleSize);
    height: var(--moleSize);
  }
`
