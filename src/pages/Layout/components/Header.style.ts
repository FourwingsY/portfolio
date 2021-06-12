import styled, { css } from "styled-components"

import { ContentsWidth } from "@styles/adaptive"
import { POSITION } from "@styles/zIndex"

const hidden = css`
  transform: translateY(-100%);
`

export const Header = styled.header<{ hide?: boolean }>`
  --height: 50px;
  position: sticky;
  top: 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: var(--height);
  margin: 0 auto;
  background: hsl(220, 60%, 50%);
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);
  transition: transform 0.5s;
  z-index: ${POSITION};
  ${({ hide }) => hide && hidden}
`

export const Wrapper = styled(ContentsWidth)`
  display: flex;
  align-items: center;
  justify-content: space-between;
`

export const NavGroup = styled.nav`
  font-size: 0;
`

export const NavLink = styled.span<{ match: boolean }>`
  position: relative;
  display: inline-block;
  height: 100%;
  padding: 0 16px;
  margin: 0 4px;
  line-height: var(--height);
  font-size: 16px;
  color: hsl(220, 60%, 95%);
  cursor: pointer;
  overflow: hidden;
  ::after {
    content: "";
    position: absolute;
    bottom: 0;
    left: 0;
    display: block;
    width: 100%;
    height: 4px;
    background: hsl(220, 60%, 95%);
    transition: transform 0.3s;
    transform: translateY(100%);
  }
  &:hover {
    opacity: 0.8;
    &::after {
      transform: translateY(50%);
    }
  }
  ${({ match }) =>
    match &&
    css`
      font-weight: bold;
      &:hover {
        opacity: 1;
      }
      &::after {
        transform: translateY(0);
      }
    `}
`

export const ExternalLink = styled.a`
  margin-left: 1rem;
  transition: transform 0.3s;
  &:hover {
    opacity: 0.8;
  }
`
