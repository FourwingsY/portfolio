import styled, { css } from "styled-components"

export const Layout = styled.main`
  width: 1200px;
  margin: 5rem auto;
`

export const InputWrapper = styled.div`
  display: flex;
  label {
    color: white;
    line-height: 2rem;
  }
  input {
    margin-left: 0.5rem;
    flex: 1;
    height: 2rem;
    border: none;
    outline: none;
    padding: 0 0.5rem;
    font-size: 1.25rem;
  }
  button {
    margin-left: 0;
    width: 5rem;
    height: 2rem;
    background: #1e90ff;
    color: white;
  }
`

export const Dataset = styled.ol`
  display: flex;
  flex-flow: row wrap;
  list-style: none;
  justify-content: space-between;
  margin-top: 2rem;
  color: white;
  padding-left: 2rem;
`
export const DatasetItem = styled.li<{ $highlight?: number }>`
  position: relative;
  display: flex;
  flex-flow: column;

  margin-bottom: 0.5rem;
  img {
    width: 284px;
    height: 284px;
  }
  p {
    position: absolute;
    display: inline-block;
    bottom: 0;
    left: 0;
    width: 100%;
    text-align: right;
    background: rgba(0, 0, 0, 0.5);
  }
  ${({ $highlight }) =>
    $highlight === 0 &&
    css`
      outline: 3px solid red;
    `};
  ${({ $highlight }) =>
    $highlight === 1 &&
    css`
      outline: 3px solid skyblue;
    `};
`

export const Label = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 28px;
  height: 28px;
  background: rgba(0, 0, 0, 0.5);
  text-align: center;
  line-height: 28px;
  border-bottom-right-radius: 8px;
`

export const DeleteButton = styled.button`
  position: absolute;
  top: 0;
  right: 0;
  background: #fd342088;
  padding: 0.25rem 0.5rem;
  margin-left: 0.5rem;
  color: white;
  &:hover {
    background: #fd3420;
  }
`

export const CompareTable = styled.table`
  width: 100%;
  margin-top: 2rem;
  background: white;
  td,
  th {
    text-align: center;
    padding: 0.25rem 0;
  }
  td:not(:empty) {
    cursor: pointer;
    &:hover {
      background: #f0f0f0;
    }
  }
`

export const ComparePreview = styled.section`
  display: flex;
  width: 100%;
  gap: 1rem;
  margin-top: 2rem;

  .raw,
  .norm {
    position: relative;
    width: 50%;
    aspect-ratio: 1;
    background: white;
    h3 {
      position: absolute;
      top: 0;
      left: 0;
      padding: 0.5rem;
    }
  }
`
