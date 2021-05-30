import { createGlobalStyle } from "styled-components"

export default createGlobalStyle`
  html,
  body {
    padding: 0;
    margin: 0;
    font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu, Helvetica Neue, sans-serif;
    font-size: 16px;
  }
  h1, h2, h3, h4, h5, h6, p {
    margin: 0;
  }
  a {
    color: inherit;
    text-decoration: none;
  }
  button {
    border: none;
    outline: none;
    cursor: pointer;
  }

  * {
    box-sizing: border-box;
  }
`
