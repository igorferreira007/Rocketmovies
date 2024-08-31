import { createGlobalStyle } from "styled-components"

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  :root {
    font-size: 62.5%;
  }

  body {
    background-color: ${({ theme }) => theme.COLORS.BACKGROUND_MAIN};
    -webkit-font-smoothing: antialiased;
  }
  
  body, input, button, textarea {
    font-size: 1.6rem;
    font-family: "Roboto Slab", sans-serif;
    color: ${({ theme }) => theme.COLORS.TEXT_WHITE};
    outline: none;
  }

  a {
    text-decoration: none;
  }

  button, a {
    cursor: pointer;
    transition: filter 0.2s;
    border: none;
  }

  button:hover, a:hover {
    filter: brightness(0.9);
  }
`