import styled from "styled-components"

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
    width: 25rem;
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
  margin-top: 2rem;
  color: white;
  padding-left: 2rem;
`
export const DatasetItem = styled.li`
  margin-bottom: 0.5rem;
  span {
    display: inline-block;
    width: 12rem;
  }
`
export const DeleteButton = styled.button`
  background: #fd3420;
  padding: 0.25rem 0.5rem;
  margin-left: 0.5rem;
  color: white;
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
