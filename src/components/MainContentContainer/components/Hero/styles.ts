import styled from 'styled-components'

export const Banner = styled.div`
background: ${props=>props.theme.colors["grayLight"]};

width: 100%;

padding-left: 3rem;
padding-bottom: 3rem;

`

export const ContainerName = styled.div`
background: purple;

width: 17rem;
height: 18.5rem;

display: flex;
flex-direction: column;
justify-content: center;

font-family: ${props=>props.theme.fonts["heading"]};
font-size: ${props=>props.theme.fontSizes["lg"]};
font-weight: ${props=>props.theme.fontWeights["bold"]};

line-height: 190%;

`