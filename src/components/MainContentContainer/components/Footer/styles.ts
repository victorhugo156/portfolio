import styled from "styled-components";

export const ContainerFooter = styled.footer`
position: relative;


height: 30rem;

display: flex;
align-items: flex-end;
justify-content: center;
gap: 5rem;

z-index: 0;

h1{
    font-size: ${props=>props.theme.fontSizes["4xl"]};
}

`

export const ContainerFooterContact = styled.div`
display: flex;
flex-direction: column;
align-items: center;
gap: 3rem;

p{
    font-size: ${props=>props.theme.fontSizes["md"]};
}

`

export const ContainerExternalLinks = styled.div`

display: flex;
gap: 1.5rem;

`

export const ExternalLink = styled.div`
background-color: red;
display: flex;
align-items:baseline;
gap: .8rem;

p{
    font-size: ${props=>props.theme.fontSizes["base"]};
}

`