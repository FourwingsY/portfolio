import styled, { css, keyframes } from "styled-components"

export const AboutMe = styled.section`
  width: 100%;
  ${({ theme }) =>
    !theme.mobile &&
    css`
      height: 100vh;
    `}
`

export const Title = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 30%;
  font-size: 4rem;
  font-weight: bold;
`

export const MoleGame = styled.div`
  position: relative;
  height: 70%;
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

export const Mole = styled.div<{ show: boolean }>`
  position: absolute;
  transform: translate(-50%, -50%);
  opacity: 1;
  transition: opacity 1s;
  ${({ show }) =>
    !show &&
    css`
      opacity: 0;
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
export const Jumping = styled.div`
  animation: ${jumping} 1.3s ease-in-out alternate infinite;
  transform-origin: center;
`

const shaking = keyframes`
  from {
    transform: rotate(-10deg)
  } 
  to {
    transform: rotate(10deg)
  }
`
export const Shaking = styled.div`
  animation: ${shaking} 1s ease-in-out alternate infinite;
`

export const TasteIcon = styled.div`
  font-family: sans-serif;
  font-size: 0;
  cursor: pointer;
  /* this filter makes browser devourer GPUs */
  /* filter: drop-shadow(2px 2px 3px rgba(0, 0, 0, 0.4)); */
  i {
    font-style: normal;
    line-height: 1;
    font-size: var(--moleSize);
  }
  svg {
    width: var(--moleSize);
    height: var(--moleSize);
  }
`
