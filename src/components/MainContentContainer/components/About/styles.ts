import styled from "styled-components";
import { responsive } from '../../../../utils/mixins'
import type { DefaultTheme } from 'styled-components';


export const Container = styled.div`
  position: relative;
  background: ${props => props.theme.colors["grayLight"]};
  width: 100%;
  padding: 0 2rem;
  padding-bottom: 3rem;
`

export const ContainerAboutMe = styled.div`
  display: flex;

  ${responsive.maxMobileL`
      flex-direction: column;
  `}

  div:first-child {
    width: 20%;

    ${responsive.maxMobileL`
      width: 100%;
      padding: 1rem 0;
  `}
  }

  div:last-child {
    flex: 1;
  }

  p {
    line-height: 130%;
  }
`

export const ContainerEducation = styled.div`
  display: flex;
  padding-left: 3rem;
  padding-right: 3rem;

  ${responsive.maxMobileL`
    flex-direction: column;
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
    align-items: center;
  }

  div {
    background-color: ${props => props.theme.colors["gray"]};
    width: .1rem;
    height: 3rem;
    margin-left: 1rem;
    margin-right: 1rem;
  }

  ul li div:last-child {
    background-color: transparent;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: .5rem;
  }

  li div p {
    font-weight: ${props=>props.theme.fontWeights["bold"]};
  }

  li div p:last-child {
    font-weight: ${props=>props.theme.fontWeights["regular"]};
  }
`