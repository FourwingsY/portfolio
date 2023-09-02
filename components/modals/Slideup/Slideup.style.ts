import styled, { css } from "styled-components"

import { palette } from "@/lib/styles/theme"

import * as CS from "../common.style"

export const Slideup = styled(CS.Modal)<{ visible: boolean }>`
  position: absolute;
  bottom: 0;
  border-radius: 10px 10px 0 0;
  background-color: ${palette.primary95};
  ${({ visible }) => css`
    transition: transform 500ms;
    transform: translateY(${visible ? 0 : "100%"});
  `}
`
