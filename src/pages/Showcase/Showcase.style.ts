import styled, { css } from "styled-components"

import { ContentsWidth } from "@styles/adaptive"

export const Showcase = styled(ContentsWidth)`
  display: flex;
  flex-flow: column;
  margin-top: 32px;
  ${({ theme }) =>
    theme.large &&
    css`
      flex-flow: row wrap;
      justify-content: space-between;
    `}
`
export const Card = styled.div`
  margin: 16px 0;
  border: 1px solid hsl(220, 60%, 80%);
  border-radius: 16px;
  overflow: hidden;
  transform: translateZ(0);
  ${({ theme }) =>
    theme.large &&
    css`
      width: 48%;
    `}
`
export const CardThumbnail = styled.div`
  position: relative;
  border-bottom: 1px solid hsl(220, 60%, 80%);
  font-size: 0;
`
export const CardBody = styled.div`
  padding: 16px;
`
export const CardTitle = styled.p`
  font-weight: bold;
`
