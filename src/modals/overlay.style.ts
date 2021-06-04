import styled, { css } from "styled-components"

import { OVERLAY } from "@styles/zIndex"

const dimmedBackground = css`
  background: rgba(0, 0, 0, 0.6);
`

export const Overlay = styled.div<{ dim: boolean; visible: boolean }>`
  position: fixed;
  display: flex;
  align-items: center;
  justify-content: center;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100%;
  z-index: ${OVERLAY};
  ${({ dim }) => dim && dimmedBackground}

  // animation
  opacity: 0;
  pointer-events: none;
  transition-property: opacity;
  ${({ visible }) =>
    visible &&
    css`
      opacity: 1;
      pointer-events: initial;
    `}
`
