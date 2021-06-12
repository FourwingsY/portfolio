import styled, { css } from "styled-components"

export const LikesAndDislikes = styled.section`
  ${({ theme }) =>
    theme.desktop &&
    css`
      display: flex;
      > * {
        width: 50%;
      }
    `}
  h1 {
    font-size: 2.5rem;
  }
  dt {
    font-size: 2rem;
    margin-top: 1rem;
  }
  a {
    color: blue;
  }
  svg {
    vertical-align: middle;
  }
`
export const Likes = styled.article``
export const Dislikes = styled.article``
