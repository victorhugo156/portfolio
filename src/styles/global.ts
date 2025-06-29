import { createGlobalStyle } from "styled-components";


export const GlobalStyle = createGlobalStyle`
*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body{
    background: ${props=>props.theme.colors["white"]};
    color: ${props=>props.theme.colors["black"]};
    -webkit-font-smoothing: antialiased;
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