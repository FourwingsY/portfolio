import styled from "styled-components"

import { palette } from "@styles/theme"

export const ModalTester = styled.div`
  margin-bottom: 2rem;
`
export const OpenModalButton = styled.button`
  padding: 0.5rem;
  margin-right: 0.25rem;
  margin-bottom: 0.25rem;
  background: ${palette.primary};
  color: white;
  :hover {
    background: ${palette.primary60};
  }
`
