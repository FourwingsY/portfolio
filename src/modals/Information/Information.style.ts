import styled, { css } from "styled-components"

import { palette } from "@styles/theme"

import * as CS from "../common.style"

export const Information = styled(CS.Modal)<{ visible: boolean }>`
  background: ${palette.primary95};
  ${({ visible }) =>
    css`
      transition: transform 300ms;
      transform: translateY(${visible ? 0 : "-30px"});
    `}
`
