import styled from "styled-components"

import { palette } from "@/lib/styles/theme"

export const Visited = styled.div`
  width: 36rem;
  max-height: 80vh;
  background-color: white;
  border-radius: 0.5rem;
  overflow: auto;
`

export const Title = styled.h1`
  font-size: 1.5rem;
  padding: 1rem;
  border-bottom: 1px solid ${palette.primary95};
`

export const VisitedRestArea = styled.div`
  padding: 1rem;
  & + & {
    border-top: 1px solid ${palette.primary95};
  }
`
export const Subtitle = styled.h4`
  position: relative;
  font-size: 1rem;
  font-weight: 400;
  margin-bottom: 0.5rem;
`

export const VisitedAt = styled.span`
  position: absolute;
  right: 0;
  color: #666;
`
export const Photos = styled.div`
  img {
    width: 100%;
    height: auto;
    aspect-ratio: 4/3;
  }
`
export const Memo = styled.p`
  margin-top: 0.5rem;
`
