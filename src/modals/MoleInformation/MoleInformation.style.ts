import styled, { css } from "styled-components"

import * as CS from "../common.style"

export const MoleInformation = styled(CS.Modal)<{ visible: boolean }>`
  background: hsl(220, 80%, 95%);
  font-size: 1.5rem;

  a {
    color: blue;
  }
  ${({ visible }) =>
    css`
      transition: transform 500ms;
      transform: translateY(${visible ? 0 : "-30px"});
    `}
`
