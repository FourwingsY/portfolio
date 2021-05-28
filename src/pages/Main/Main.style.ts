import styled, { css } from "styled-components"

export const Title = styled.h1``

export const ScreenTypeChecker = styled.div`
  ${({ theme }) =>
    theme.large &&
    css`
      font-size: 16px;
    `};
  ${({ theme }) =>
    theme.small &&
    css`
      font-size: 14px;
    `};
  ${({ theme }) =>
    theme.tooSmall &&
    css`
      font-size: 12px;
    `};
`
export const ScreenType = styled.p``
