import styled, { css } from "styled-components"

import { ContentsWidth } from "@styles/adaptive"
import { POSITION } from "@styles/zIndex"

const hidden = css`
  transform: translateY(-100%);
`

export const Header = styled.header<{ hide?: boolean }>`
  position: sticky;
  top: 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: var(--headerHeight);
  margin: 0 auto;
  background: hsl(220, 60%, 50%);
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);
  transition: transform 0.5s;
  overflow-x: hidden;
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
  padding: 0 1rem;
  margin: 0 0.25rem;
  line-height: var(--headerHeight);
  font-size: 1rem;
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
    height: 0.25rem;
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

const bar = css`
  position: absolute;
  display: inline-block;
  top: 50%;
  left: 50%;
  width: 100%;
  height: 0;
  border: 1px solid white;
  box-sizing: border-box;
  background: white;
  transition: transform 0.3s;
`
export const Menu = styled.button<{ opened: boolean }>`
  position: relative;
  width: 1.5rem;
  height: 1.5rem;
  background: none;
  z-index: 1;
  ::before {
    content: "";
    ${bar};
    transform: translate(-50%, -50%) translateY(-0.5625rem);
  }
  ::after {
    content: "";
    ${bar};
    transform: translate(-50%, -50%) translateY(0.5625rem);
  }
  i {
    ${bar};
    transform: translate(-50%, -50%);
  }
  ${({ opened }) =>
    opened &&
    css`
      ::before {
        transform: translate(-50%, -50%) rotate(45deg) scaleX(1.3);
      }
      i {
        transform: translate(-50%, -50%) scaleX(0);
      }
      ::after {
        transform: translate(-50%, -50%) rotate(-45deg) scaleX(1.3);
      }
    `}
`

export const Drawer = styled.div<{ opened: boolean }>`
  position: fixed;
  top: 0;
  left: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 100vw;
  height: 100vh;
  background: hsla(220, 60%, 50%);
  transition: left 0.3s;
  ${({ opened }) =>
    opened &&
    css`
      left: 0;
    `};
  a {
    margin: 0.75rem;
  }
  ${NavLink} {
    font-size: 2rem;
  }
`

export const DrawerFooter = styled.div`
  position: absolute;
  bottom: 2rem;
  display: flex;
`
