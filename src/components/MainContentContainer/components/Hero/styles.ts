import styled from 'styled-components'
import { responsive } from '../../../../utils/mixins'
import type { DefaultTheme } from 'styled-components';

export const Banner = styled.div`
  background: ${props => props.theme.colors["grayLight"]};
  width: 100%;
  padding-left: 3rem;
  padding-bottom: 3rem;

    ${responsive.maxMobileL`
    padding-bottom: 1rem;
  `}
`

export const ContainerHero = styled.div`
  width: 40rem;
  height: 25.25rem;
  display: flex;

  ${responsive.maxMobileL`
    height: 20rem;
  `}
`

export const WrapperName = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: center;
  padding-right: .5rem;

  h1 {
    font-family: ${props => props.theme.fonts["heading"]};
    font-size: ${props=> props.theme.fontSizes["3xl"]};
    font-weight: ${props=>props.theme.fontWeights["bold"]};
    line-height: 100%;
    letter-spacing: -.2rem;

    ${responsive.maxMobileL`
      font-size: ${({ theme }: { theme: DefaultTheme }) => theme.fontSizes["2xl"]};
    `}

  }

  
`

export const WrapperJobName = styled.div`
  display: flex;
  flex-direction: column;

  div:first-child {
    background-color: ${props => props.theme.colors["gray"]};
    width: .2rem;
    height: 10.68rem;
    margin-bottom: 4rem;

    ${responsive.maxMobileL`
      height: 6.68rem;
      margin-bottom: 5rem;
    `}
  }

  p {
    font-family: ${props => props.theme.fonts["heading"]};
    font-size: ${props=> props.theme.fontSizes["md"]};
    letter-spacing: .125rem;
  }

  div:last-child {
    width: .1rem;
    height: 4.8rem;
    background-color: ${props => props.theme.colors["gray"]};
    margin-top: .5rem;

    ${responsive.maxMobileL`
      margin-top: .8rem;
    `}
  }
`