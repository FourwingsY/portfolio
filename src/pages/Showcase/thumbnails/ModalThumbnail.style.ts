import styled, { keyframes } from "styled-components"

import { palette } from "@styles/theme"

export const ModalThumbnail = styled.div`
  font-size: 0;
`

export const Row = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 42rem;
`

const blinking = keyframes`
  0% {
    background: ${palette.primary};
  }
  10% {
    background: ${palette.primary70};
  }
  20% {
    background: ${palette.primary};
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
  animation: ${blinking} 5s infinite;
`
