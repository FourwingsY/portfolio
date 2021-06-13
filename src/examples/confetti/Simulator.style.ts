import styled, { css, keyframes } from "styled-components"

export const Simulator = styled.section`
  margin-bottom: 2rem;
  ${({ theme }) =>
    theme.desktop &&
    css`
      display: flex;
    `}
`

export const DrawingArea = styled.div`
  position: relative;
  ${({ theme }) =>
    theme.desktop &&
    css`
      flex: 1;
      margin-right: 1rem;
    `}
`

export const SimulatorCanvas = styled.canvas`
  width: 100%;
  height: 400px;
  border: 1px solid #eee;
`

export const Coord = styled.span`
  position: absolute;
  top: 0;
  left: 0;
  pointer-events: none;
`

const disappear = keyframes`
  from {
    opacity: 1;
  }
  to {
    display: none;
    opacity: 0;
  }

`
export const Guide = styled.p`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  pointer-events: none;
  animation: ${disappear} 3s forwards;
  animation-delay: 3s;
  text-align: center;
  line-height: 2;
`

export const Controls = styled.div`
  ${({ theme }) =>
    theme.desktop &&
    css`
      width: 320px;
    `}
`

export const Row = styled.label`
  display: flex;
  width: 100%;
  margin: 0.5rem 0;
`

export const LabelText = styled.span`
  width: 100px;
`
export const InputText = styled.input`
  flex-grow: 1;
`
export const InputRange = styled.input`
  flex-grow: 1;
`

export const Value = styled.span`
  width: 3.5rem;
  padding-left: 0.5rem;
`

export const PauseButton = styled.button`
  padding: 0.5rem 1rem;
  background-color: hsl(220, 70%, 50%);
  color: white;
  :hover {
    background-color: hsl(220, 70%, 60%);
  }
`
