"use client"

import styled, { css } from "styled-components"

import { ContentsWidth } from "@/lib/styles/adaptive"
import { palette } from "@/lib/styles/theme"

export const Showcase = styled(ContentsWidth)`
  display: flex;
  flex-flow: column;
  padding-top: 2rem;
  padding-bottom: 2rem;
  ${({ theme }) =>
    theme.large &&
    css`
      flex-flow: row wrap;
      justify-content: space-between;
    `}
`
export const Card = styled.div`
  display: flex;
  flex-flow: column;
  margin: 16px 0;
  border: 1px solid ${palette.primary80};
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
  flex: 1;
  padding: 16px;
  border-top: 1px solid ${palette.primary80};
  background: ${palette.primary95};
`
export const CardTitle = styled.p`
  line-height: 1.5;
  font-weight: bold;
  #medium-logo {
    vertical-align: bottom;
    margin-left: 0.4rem;
  }
`

export const PostList = styled.ul`
  position: absolute;
  top: 0;
  bottom: 0;
  width: 100%;
  padding: 1rem 1.5rem;
  overflow-y: scroll;
  list-style: none;
`

export const Post = styled.li`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0.8rem 0;
  border-bottom: 1px solid ${palette.primary80};
  :last-child {
    border-bottom: 0;
  }
  svg {
    flex-shrink: 0;
    margin-right: 0.5rem;
    vertical-align: bottom;
  }
`

export const PostTitle = styled.span`
  display: inline-block;
`

export const PostWritten = styled.span`
  font-size: 0.8rem;
  opacity: 0.8;
`
export const ExternalLink = styled.a`
  display: inline-flex;
  align-items: center;
  padding-right: 0.5rem;
`

export const Button = styled.button`
  position: relative;
  background: ${palette.primary};
  padding: 12px;
  font-size: 16px;
  color: white;
  z-index: 1;
  box-shadow: 0 3px 1px #333;
  transition: all 0.2s;
  &:hover {
    background: ${palette.primary60};
    box-shadow: 0 2px 1px black;
    transform: translateY(1px);
  }
  &:active {
    background: ${palette.primary70};
    box-shadow: 0 1px 1px black;
    transform: translateY(2px);
  }
`
