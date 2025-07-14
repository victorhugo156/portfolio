import styled from 'styled-components'

export const MainContentContainer = styled.main`
position: relative;

max-width: 71rem;

margin: 0 auto;

padding: 0 6rem;

overflow-x: visible;   

`

export const WrapperPortfolio = styled.div`

background-color: ${props=> props.theme.colors["grayMedium"]};

position: relative;
left: 50%;

transform: translateX(-50%); /* perfectly center it horizontally */
width: 120vw;   

`

export const ContainerPortfolio = styled.div`
max-width: 71rem;

margin: 0 auto;

padding: 0 8rem;

`