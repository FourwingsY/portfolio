import styled, { css } from "styled-components"

import * as CS from "../common.style"

export const Information = styled(CS.Modal)<{ visible: boolean }>`
  background: hsl(220, 80%, 90%);
  ${({ visible }) =>
    css`
      transition: transform 300ms;
      transform: translateY(${visible ? 0 : "-30px"});
    `}
`
