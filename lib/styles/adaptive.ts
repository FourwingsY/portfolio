"use client"

import styled, { css } from "styled-components"

export const ContentsWidth = styled.div`
  ${({ theme }) =>
    theme.desktop &&
    css`
      width: 1200px;
      padding: 0 20px;
      margin: 0 auto;
    `};
  ${({ theme }) =>
    theme.tabletL &&
    css`
      width: 900px;
      padding: 0 20px;
      margin: 0 auto;
    `};
  ${({ theme }) =>
    theme.tabletP &&
    css`
      width: 600px;
      padding: 0 20px;
      margin: 0 auto;
    `};
  ${({ theme }) =>
    theme.mobile &&
    css`
      width: 100vw;
      padding: 0 6.25vw;
    `};
`
