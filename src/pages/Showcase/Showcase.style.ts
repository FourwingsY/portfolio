import styled, { css } from "styled-components"

import { ContentsWidth } from "@styles/adaptive"

export const Showcase = styled(ContentsWidth)`
  display: flex;
  flex-flow: column;
  ${({ theme }) =>
    theme.large &&
    css`
      flex-flow: row wrap;
      justify-content: space-between;
    `}
`
export const Card = styled.div`
  margin: 16px 0;
  border: 1px solid hsl(220, 60%, 80%);
  border-radius: 16px;
  overflow: hidden;
  transform: translateZ(0);
  ${({ theme }) =>
    theme.large &&
    css`
      width: 48%;
    `}
`
export const FixedRate169 = styled.div`
  position: relative;
  width: 100%;
  height: 0;
  padding-bottom: 56.25%;
`
export const CardThumbnail = styled.div`
  position: absolute;
  top: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  font-size: 0;
  overflow: hidden;
`
export const CardBody = styled.div`
  padding: 16px;
  border-top: 1px solid hsl(220, 60%, 80%);
`
export const CardTitle = styled.p`
  line-height: 1.5;
  font-weight: bold;
  #medium-logo {
    vertical-align: baseline;
    margin-left: 0.5rem;
  }
`

export const PostList = styled.ul`
  position: absolute;
  top: 0;
  bottom: 0;
  width: 100%;
  padding: 1rem 2rem;
  list-style: none;
`

export const Post = styled.li`
  display: flex;
  justify-content: space-between;
  padding: 0.8rem 0;
  border-bottom: 1px solid hsl(220, 60%, 90%);
  :last-child {
    border-bottom: 0;
  }
  svg {
    margin-right: 0.5rem;
    vertical-align: bottom;
  }
`

export const PostWritten = styled.span`
  font-size: 0.8rem;
  opacity: 0.8;
`
export const ExternalLink = styled.a``

export const Button = styled.button`
  position: relative;
  background: hsl(220, 60%, 50%);
  padding: 12px;
  font-size: 16px;
  color: white;
  z-index: 1;
  box-shadow: 0 3px 1px #333;
  transition: all 0.2s;
  &:hover {
    background: hsl(220, 60%, 60%);
    box-shadow: 0 2px 1px black;
    transform: translateY(1px);
  }
  &:active {
    background: hsl(220, 60%, 70%);
    box-shadow: 0 1px 1px black;
    transform: translateY(2px);
  }
`
