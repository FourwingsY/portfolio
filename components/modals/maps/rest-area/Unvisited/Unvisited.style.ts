import styled, { css } from "styled-components"

import * as CS from "@/components/modals/common.style"

export const Slideup = styled(CS.Modal)<{ $visible: boolean }>`
  position: absolute;
  bottom: 0;
  border-radius: 10px 10px 0 0;
  background-color: white;
  ${({ $visible }) => css`
    transition: transform 500ms;
    transform: translateY(${$visible ? 0 : "100%"});
  `}
`

export const Message = styled.p`
  padding: 1rem;
`
