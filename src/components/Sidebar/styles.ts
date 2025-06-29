import styled from 'styled-components'

export const SidebarMenu = styled.aside`

height: 100vh;
width: 80px;

display: flex;
flex-direction: column;
align-items: center;

position: fixed;
top: 25rem;
left: 2rem;

z-index: 100;

nav{
    display: flex;
    flex-direction: column;
    gap: .5rem;
}

img{
    width: 32px;
    height: 32px;
}

div{
    width: .3rem;
    height: 11rem;

    margin-top: 2rem;

    background-color: ${props=>props.theme.colors["lime"]};
}

`