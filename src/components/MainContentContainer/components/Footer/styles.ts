import styled from "styled-components";


export const ContainerFooter = styled.footer<{ visible: boolean }>`
position: relative;


height: 30rem;

display: flex;
align-items: flex-end;
justify-content: center;
gap: 5rem;

z-index: 0;

opacity: ${h1 => h1.visible ? 1 : 0};
transition: opacity 3s ease;

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

export const ExternalLink = styled.a`
display: flex;
align-items:baseline;
gap: .8rem;

text-decoration: none;

p{
    font-size: ${props=>props.theme.fontSizes["base"]};
    color: ${props=>props.theme.colors["black"]};
}

`