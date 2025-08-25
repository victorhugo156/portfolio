import styled from "styled-components";
import { responsive } from '../../../../utils/mixins'
import type { DefaultTheme } from 'styled-components';


export const Container = styled.div`
  position: relative;
  background: ${props => props.theme.colors["grayLight"]};
  width: 100%;
  padding: 0 2rem;
  padding-bottom: 3rem;

  ${responsive.maxMobileL`
      padding: 0 .8rem;
  `}
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