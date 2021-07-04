import styled, { css } from "styled-components"

export const Commits = styled.section`
  margin-top: 4rem;
  .react-calendar {
    width: 100%;
    margin-top: 2rem;
  }
  .react-calendar__month-view__weekdays__weekday {
    font-size: 1rem;
  }
  .react-calendar__tile {
    height: 60px;
  }
  .react-calendar__tile--now {
    background: inherit;
  }
  .react-calendar__tile--active {
    background: hsl(220, 90%, 50%);
  }
  ${({ theme }) =>
    theme.mobile &&
    css`
      .react-calendar__tile {
        padding: 0;
      }
    `}
`
export const Title = styled.h2`
  font-size: 2rem;
`
export const Updated = styled.span`
  display: inline-block;
  font-size: 1rem;
  opacity: 0.5;
`

export const DailyCommits = styled.ul`
  height: 1.5rem;
`

export const Commit = styled.li<{ product: string }>`
  display: inline-block;
  width: 1rem;
  height: 1rem;
  border-radius: 50%;
  margin: 3px;
  background: ${({ product }) => {
    switch (product) {
      case "drmuzy-front":
        return "#312a75"
      case "junior-front":
        return "#2959ff"
      case "qualson-crm-web":
        return "#f20d33"
      case "realclass2-web":
        return "#2bde73"
      default:
        return "grey"
    }
  }};
  font-size: 0.6rem;
  line-height: 1rem;
  text-align: center;
  color: ${({ product }) => {
    switch (product) {
      case "realclass2-web":
        return "#13141a"
      default:
        return "white"
    }
  }};
  ${({ theme }) =>
    theme.mobile &&
    css`
      margin: 0 1px;
    `}
`

export const Details = styled.div`
  padding: 1rem;
  margin-top: 2rem;
  background: hsl(220, 50%, 95%);
`

export const Summary = styled.p`
  font-family: monospace;
`
