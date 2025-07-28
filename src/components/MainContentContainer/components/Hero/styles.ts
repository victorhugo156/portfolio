import styled from 'styled-components'

export const Banner = styled.div`
background: ${props => props.theme.colors["grayLight"]};

width: 100%;

padding-left: 3rem;
padding-bottom: 3rem;

`

export const ContainerHero = styled.div`

width: 40rem;
height: 25.25rem;

display: flex;

@media (min-width: ${props => props.theme.brakpoints.mobileS}) {
    height: 15rem;
}



`

export const WrapperName = styled.div`

    display: flex;
    flex-direction: column;
    align-items:flex-end;
    justify-content: center;

    padding-right: .5rem;

h1{
    font-family: ${props => props.theme.fonts["heading"]};
    font-size: ${props=> props.theme.fontSizes["3xl"]};
    font-weight: ${props=>props.theme.fontWeights["bold"]};

    line-height: 100%;
    letter-spacing: -.2rem;

}

@media (min-width: ${props => props.theme.brakpoints.mobileS}) {
    h1{
        font-size: ${props=> props.theme.fontSizes["2xl"]};
    }
}

`

export const WrapperJobName = styled.div`

    display: flex;
    flex-direction: column;


div:first-child{
    background-color: ${props => props.theme.colors["gray"]};

    width: .2rem;
    height: 10.68rem;

    margin-bottom: 4rem;

}
p{
    font-family: ${props => props.theme.fonts["heading"]};
    font-size: ${props=> props.theme.fontSizes["md"]};
    
    letter-spacing: .125rem;

}
div:last-child{
    width: .1rem;
    height: 4.8rem;

    background-color: ${props => props.theme.colors["gray"]};

    margin-top: .5rem

}

`