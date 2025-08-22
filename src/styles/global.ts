import { createGlobalStyle } from "styled-components";


export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html, body {
    scroll-behavior: smooth;
  }

  body {
    background: ${props=>props.theme.colors["white"]};
    color: ${props=>props.theme.colors["black"]};
    -webkit-font-smoothing: antialiased;
    scrollbar-width: none;      /* Firefox */
    -ms-overflow-style: none;   /* IE10+ */
    overflow-x: hidden;         /* Prevent horizontal scroll */
  }

  /* 2) WebKit (Chrome, Safari, Edge) */
  html::-webkit-scrollbar,
  body::-webkit-scrollbar {
    display: none;
  }

  a {
    text-decoration: none;
  }

  body, input, textarea, button {
    font-family: ${props=>props.theme.fonts["body"]};
    font-size: ${props=>props.theme.fontSizes["base"]};
    font-weight: ${props=>props.theme.fontWeights["regular"]}
  }

  li {
    list-style: none;
  }

  /* Responsive images */
  img {
    max-width: 100%;
    height: auto;
  }

  /* Responsive tables */
  table {
    width: 100%;
    max-width: 100%;
    overflow-x: auto;
    display: block;
  }

  /* Responsive iframes */
  iframe {
    max-width: 100%;
  }
`;