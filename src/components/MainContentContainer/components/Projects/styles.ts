import styled from 'styled-components'

export const ContainerProjects = styled.div`

width: 100%;

display: flex;

padding: 0 2rem;;

`

export const ProjectDetails = styled.div`
background-color:red;
display: flex;
width: 50%;

div:first-child {
    width: 2rem;
}
div:first-child p {
    font-size: ${props=> props.theme.fontSizes["base"]};
}

div:last-child{
    display: flex;
    flex-direction: column;
}
div:last-child h3{
    font-size: ${props=> props.theme.fontSizes["lg"]};
    margin: 0%;
    padding:0;
}
div:last-child span {

}
div:last-child ul{
    display: flex;

    margin-top: .5rem;

    list-style: none;
}

div:last-child ul li{
    display: flex;
    align-items: center;;
}

div:last-child ul li div {
    background-color: green;
    width: .5rem;
    height: .5rem;

    border-radius: 50%;

    margin: 0 1rem;
}

`

export const ProjectImage = styled.div`
width: 50%;

img{
    width: 100%;
    height: auto;
    object-fit: cover;
}

`
