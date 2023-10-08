import styled, { css } from "styled-components"

export const TooltipWrapper = styled.span`
  ${() => css`
    &:hover ${Tooltip} {
      display: block;
    }
  `}
`
export const Tooltip = styled.div`
  position: fixed;
  transform: translate(-50%, -100%) translateY(-0.5rem);
  z-index: 9999;

  width: 12rem;
  background: rgba(0, 0, 0, 0.7);
  padding: 0.25rem;
  border-radius: 0.25rem;

  font-size: 0.75rem;
  color: white;
  text-align: center;

  ::after {
    content: "";
    position: absolute;
    top: 100%;
    left: 50%;
    transform: translateX(-50%);
    border: 0.25rem solid transparent;
    border-top-color: rgba(0, 0, 0, 0.7);
  }
`
