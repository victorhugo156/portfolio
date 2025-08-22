import styled from 'styled-components'
import { responsive } from '../../utils/mixins'

export const MainContentContainer = styled.main`
  position: relative;
  max-width: 71rem;
  margin: 0 auto;
  padding: 0 6rem;
  overflow-x: visible;

    ${responsive.maxMobileL`
      background:green;
      padding: 0;
    `}
`

export const WrapperProjects = styled.div`
  background-color: ${props=> props.theme.colors["grayMedium"]};
  width: 120vw;   
  position: relative;
  left: 50%;
  /* give yourself enough space to scroll past bottom */
  padding-bottom: 40vh;
  transform: translateX(-50%); /* perfectly center it horizontally */

`

export const ContainerProjects = styled.div`
  max-width: 71rem;
  margin: 0 auto;
  padding: 0 8rem;

`

export const FooterWrapper = styled.div` 
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;             /* for proper z-index stacking */
  z-index: 10;                    /* above your gray section */
`