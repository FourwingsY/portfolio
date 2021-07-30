import styled, { css } from "styled-components"

import { ContentsWidth } from "@styles/adaptive"
import { palette } from "@styles/theme"

import { ProductStatus } from "../../data"

export const ShortDescription = styled.div`
  position: relative;
  padding: 2rem 0 0.5rem;
  padding-left: 2rem;
  text-align: left;
`

export const ProductName = styled.span<{ hasLink?: boolean }>`
  font-size: 1.8rem;
  margin: 0.5rem 0;
  ${({ hasLink }) =>
    hasLink &&
    css`
      cursor: pointer;
      :hover {
        color: ${palette.highlight};
      }
    `};
`

export const ProductStatusBadge = styled.span<{ status: ProductStatus }>`
  vertical-align: middle;
  padding: 0.25rem 0.5rem;
  margin-left: 0.5rem;
  border-radius: 0.5rem;
  font-size: 0.8rem;
  color: white;
  background: ${({ status }) => {
    switch (status) {
      case ProductStatus.LIVE:
        return palette.highlight
      case ProductStatus.PRIVATE:
        return "hsl(40, 80%, 50%)"
      case ProductStatus.DEAD:
        return "grey"
    }
  }};
  &::before {
    /* content: "2"; */
    content: ${({ status }) => `"${status}"`};
  }
`

export const Company = styled.p`
  font-size: 1rem;
  ::before {
    content: "@";
  }
`

export const DisplayZone = styled.div`
  position: relative;
`

export const LongDescription = styled.div<{ forSizeDetect?: boolean }>`
  padding: 2rem;
  font-size: 0;
  white-space: pre-line;
  transition: 0.5s;
  overflow: hidden;
  p {
    font-size: 1.5rem;
    &:not(:last-child) {
      margin-bottom: 1rem;
    }
  }
  ${({ forSizeDetect }) =>
    forSizeDetect &&
    css`
      position: absolute;
      height: auto;
      visibility: hidden;
    `}
`

export const More = styled.span`
  font-size: 1rem;
  line-height: 1;
  text-decoration: underline;
  cursor: pointer;
`

export const BorderBox = styled.div`
  position: relative;
  ::before,
  ::after {
    content: "";
    position: absolute;
    top: -1px;
    bottom: -1px;
    display: block;
    width: 50%;
    border: 2px solid black;
    box-sizing: border-box;
  }
  ::before {
    left: 0;
    border-right: none;
    border-radius: 2rem 0 0 2rem;
  }
  ::after {
    right: 0;
    border-left: none;
    border-radius: 0 2rem 2rem 0;
  }
`

export const TimelineItem = styled(ContentsWidth)`
  position: relative;

  font-size: 0;
  &:hover {
    ${More} {
      color: ${palette.highlight};
    }
  }

  &:nth-child(even) {
    ${BorderBox}::before {
      display: none;
    }
  }
  &:nth-child(odd) {
    ${BorderBox}::after {
      display: none;
    }
  }
`
