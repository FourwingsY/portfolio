import { createGlobalStyle } from "styled-components"

const DEFAULT_FONT_SIZE = 16
const MINIMUM = 360

export const FontStyle = createGlobalStyle`
  html {
    font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu, Helvetica Neue, sans-serif;
    font-size: ${DEFAULT_FONT_SIZE}px;

    /* below mimimum screen width: use vw */
    @media only screen and (max-width: ${MINIMUM}px) {
      font-size: calc(${DEFAULT_FONT_SIZE} * 100vw / ${MINIMUM});
    }
  }
`

export default createGlobalStyle`
  html,
  body {
    padding: env(safe-area-inset-top) env(safe-area-inset-right) env(safe-area-inset-bottom) env(safe-area-inset-left);
    margin: 0;
  }
  h1, h2, h3, h4, h5, h6, p {
    margin: 0;
  }
  a {
    color: inherit;
    text-decoration: none;
  }
  ul, ol {
    padding: 0;
    margin: 0;
  }
  button {
    border: none;
    outline: none;
    cursor: pointer;
  }
  abbr[title] {
    text-decoration: none;
  }

  * {
    box-sizing: border-box;
  }

`
