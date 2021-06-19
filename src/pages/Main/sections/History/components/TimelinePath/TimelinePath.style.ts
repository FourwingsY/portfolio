import styled from "styled-components"

export const TimelinePath = styled.svg`
  width: 100%;
  height: 500px;
`

export const Path = styled.path`
  transition: 0.5s;
  .active & {
    d: path("M0 0 s0 20 -20 20 h-200 s-20 0 -20 20 v460");
  }
  .active + .active & {
    d: path("M-240 0 s0 20 0 20 h0 s0 20 0 20 v460");
  }
  .active + :not(.active) & {
    d: path("M-240 0 s0 20 20 20 h200 s20 0 20 20 v460");
  }
`
