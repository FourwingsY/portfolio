import styled, { css } from "styled-components"

import { palette } from "@/lib/styles/theme"

import * as CS from "../common.style"

export const MoleInformation = styled(CS.Modal)<{ visible: boolean }>`
  width: 100%;
  max-width: 24rem;
  background: ${palette.primary98};
  font-size: 1.5rem;

  a {
    color: blue;
  }
  ${({ visible }) => css`
    transition: transform 500ms;
    transform: translateY(${visible ? 0 : "-30px"});
  `}
`

export const Title = styled.h4`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  padding: 1rem 0;
  min-height: 3rem;
  font-size: 2rem;
  font-weight: 700;
  color: #000;
  line-height: 1.5;
  svg {
    width: 1.5rem;
    height: 1.5rem;
    margin-right: 0.5rem;
  }
  i {
    margin-right: 0.5rem;
    font-family: sans-serif; // coffee emoji bug
  }
`
