import styled from "styled-components"

import { palette } from "@styles/theme"

export const Contributes = styled.section``
export const Title = styled.h2`
  font-size: 2rem;
`
export const List = styled.ul``
export const Item = styled.li`
  margin: 1rem 0;
  list-style: none;
  font-size: 1.5rem;
`

export const Repository = styled.span``
export const PullRequest = styled.span`
  margin-left: 0.4rem;
  font-size: 1.2rem;
  color: ${palette.primary60};
  ::before {
    content: "#";
  }
`
export const MergedDate = styled.span`
  margin-left: 1rem;
  font-size: 1rem;
  opacity: 0.5;
`
