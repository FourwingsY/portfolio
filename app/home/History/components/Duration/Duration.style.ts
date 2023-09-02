"use client"

import styled from "styled-components"

import { palette } from "@styles/theme"

export const Duration = styled.span`
  display: block;
  font-family: monospace;
  font-weight: bold;
  color: ${palette.primary};
`
export const Year = styled.span`
  font-size: ${({ theme }) => (theme.small ? "2rem" : "3rem")};
`
export const Month = styled.span`
  display: inline-block;
  font-size: ${({ theme }) => (theme.small ? "1.5rem" : "2.5rem")};
`
export const Tilde = styled.span`
  display: inline-block;
  padding: 0 0.3rem;
  font-size: ${({ theme }) => (theme.small ? "1.5rem" : "2.5rem")};
`
