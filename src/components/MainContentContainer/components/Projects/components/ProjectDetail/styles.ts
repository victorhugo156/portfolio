import styled from 'styled-components'

export const ContainerDetails = styled.div`

width: 100%;

display: flex;

padding-bottom: 2rem;

border-bottom: 2px solid ${props=>props.theme.colors["gray"]};

`

export const ContainerIndex = styled.div`
padding-right: .5rem;
p{
    font-size: ${props=> props.theme.fontSizes["base"]};
}

`

export const WrapperDetails = styled.div`
flex: 1;

h3{
    font-size: ${props=> props.theme.fontSizes["lg"]};
    margin: 0%;
    padding:0;
}

ul{
    display: flex;

    padding: .5rem 0 0 0;
}

ul li{
    display: flex;
    justify-content: center;
    align-items: center;
}

ul li div{
    background-color: green;
    width: .5rem;
    height: .5rem;

    border-radius: 50%;

    margin: 0 1rem;
}


`

export const ContainerProjectDescription = styled.div`
width: 100%;

padding: 1.5rem 0 3rem 0;

`

export const ContainerCallToActions = styled.div`
width: 100%;

display: flex;
gap: 2rem;

`

export const Button = styled.div`

width: 6rem;
height: 2.5rem;

border-radius: 2px;
border: 2px solid ${props=>props.theme.colors["green"]};

&:hover{
    background-color: ${props=>props.theme.colors["green"]};
}

a{
    width: 100%;
    height: 100%;

    display: flex;
    justify-content: center;
    align-items: center;

    color: ${props=>props.theme.colors["white"]};
}
`

export const ProjectImage = styled.div<{ visible: boolean }>`
// width: 50%;

flex: 1;
height: 19rem;

 /* fade via opacity instead of display */
opacity: ${p => p.visible ? 1 : 0};
pointer-events: none;     /* so it never blocks your mouseout */
transition: opacity 1s ease;

img{
    width: 100%;
    height: auto;
    object-fit: cover;
}

`