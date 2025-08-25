import styled from "styled-components";
import { responsive } from '../../../../utils/mixins'

export const ContainerEducation = styled.div`
  display: flex;
  padding-left: 3rem;
  padding-right: 3rem;

  ${responsive.maxMobileL`
    flex-direction: column;
    padding-left: 0;
    padding-right: 0;
  `}

  ul {
    width: 100%;
    list-style: none;
    display: flex;
    flex-direction: column;
    gap: 3rem;
  }

  ul li {
    width: 100%;
    display: flex;
    align-items: flex-start;
    gap: 2rem;

    ${responsive.maxMobileL`
    align-items: center;
  `}
  }

  /* div {
    background-color: ${props => props.theme.colors["gray"]};
    width: .1rem;
    height: 3rem;
    margin-left: 1rem;
    margin-right: 1rem;
  } */

  /* ul li div:last-child {
    background-color: transparent;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: .5rem;
  } */

  li div p {
    font-weight: ${props=>props.theme.fontWeights["bold"]};
  }

  li div p:last-child {
    font-weight: ${props=>props.theme.fontWeights["regular"]};
  }
  
`

export const ContainerDate = styled.div`

height: 3rem;

  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;

  ${responsive.maxMobileL`
      flex-direction: column;
      height: 5rem
  `}
`

export const Divider = styled.div` 
  background-color: ${props => props.theme.colors["gray"]};
  width: 0.2rem;
  height: 3rem;
  border-radius: 0.1rem;
`