import styled, { css } from "styled-components"

export const Commits = styled.section`
  margin-top: 4rem;
`
export const Title = styled.h2`
  font-size: 2rem;
`

export const Tiles = styled.div`
  display: flex;
  width: 100%;
  margin-top: 1rem;
  gap: 2px;
  overflow: scroll;

  --cellSize: 12px;
  ${({ theme }) =>
    theme.large &&
    css`
      --cellSize: 16px;
    `}
`

export const Week = styled.div`
  display: flex;
  width: calc(var(--cellSize));
  flex-direction: column;
  gap: 2px;
`
export const WeekdayColumn = styled(Week)`
  position: sticky;
  left: 0;
  z-index: 1;
  background: white;
  width: 1.5rem;
  ${() => css`
    ${Commit} {
      width: 1.5rem;
      padding-right: 0.25rem;
      text-align: right;
    }
  `}
`

export const Month = styled.span`
  height: 1rem;
  margin-bottom: 2px;
`
export const Commit = styled.div`
  width: var(--cellSize);
  height: var(--cellSize);
  line-height: var(--cellSize);
`
