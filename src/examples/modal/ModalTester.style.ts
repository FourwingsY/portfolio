import styled from "styled-components"

import { palette } from "@styles/theme"

export const ModalTester = styled.div`
  margin-bottom: 32px;
`
export const OpenModalButton = styled.button`
  padding: 8px;
  margin-right: 4px;
  background: ${palette.primary};
  color: white;
  :hover {
    background: ${palette.primary60};
  }
`
