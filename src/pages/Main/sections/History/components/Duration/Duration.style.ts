import styled, { css } from "styled-components"

export const Duration = styled.span`
  display: inline-block;

  font-weight: bold;
  color: hsl(220, 60%, 50%);
  ${({ theme }) =>
    !theme.mobile &&
    css`
      width: 250px;
    `}
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
