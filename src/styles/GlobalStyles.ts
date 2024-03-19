"use client";

import { createGlobalStyle, css } from "styled-components";

const styles = css`
  :root {
    --color-cta: #9d8d79;
    --color-background: #feecda;
    --color-tine: #b1a592;

    --color-dark-grey: #383838;
  }

  * {
    box-sizing: border-box;
    padding: 0;
    margin: 0;
  }

  html {
    font-size: 62.5%;
  }

  body {
    font-size: 1.6rem;
    font-weight: 500;
    letter-spacing: 0.09rem;
    color: var(--color-dark-grey);
  }

  html,
  body {
    max-width: 100vw;
    overflow-x: hidden;
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  li {
    list-style: none;
  }

  button {
    border: none;
    font-family: inherit;
    letter-spacing: 0.09rem;
  }

  .container {
    margin: 3rem 5em;
  }

  .root {
    background-color: #ffecda;
    border-radius: 1rem;
  }
`;

const GlobalStyles = createGlobalStyle`
  ${styles}
`;

export default GlobalStyles;
