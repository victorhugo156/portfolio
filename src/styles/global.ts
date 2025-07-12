import { createGlobalStyle } from "styled-components";


export const GlobalStyle = createGlobalStyle`
*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

html, body {
  scroll-behavior: smooth;
  
}

body{
    background: ${props=>props.theme.colors["white"]};
    color: ${props=>props.theme.colors["black"]};
    -webkit-font-smoothing: antialiased;
}

  /* Hide scrollbar for Chrome, Safari and Opera */
  body::-webkit-scrollbar {
    display: none;
  }

    /* Hide scrollbar for IE, Edge and Firefox */
  body {
    -ms-overflow-style: none;  /* IE and Edge */
    scrollbar-width: none;     /* Firefox */
  }

a{
    text-decoration: none;
}

body, input, textarea, button{
    font-family: ${props=>props.theme.fonts["body"]};
    font-size: ${props=>props.theme.fontSizes["base"]};
    font-weight: ${props=>props.theme.fontWeights["regular"]}
}

`;