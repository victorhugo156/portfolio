
import styled from 'styled-components';
import { responsive } from '../../../../../../utils/mixins';

export const Wrapper = styled.div`
  background: ${props => props.theme.colors["white"]};
  width: 100%;
  height: 15rem;
  position: relative;
  overflow-x: hidden;
  display: flex;

  ${responsive.maxMobileL`
      display: none;
  `}

`;

export const List = styled.ul`
  background: ${props=>props.theme.colors["gray"]};
  display: flex;
  height: 0.12rem;
  position: absolute;
  left: 0;
  top: 30%;
  padding: 0 4rem;
  transform: translateY(-50%);
  list-style: none;
  transition: left 0.3s ease-out;

`;

export const Item = styled.li`
  position: relative;
  flex: 0 0 auto;      /* never shrink, never grow */
  margin: 0 8rem;      /* tweak horizontal spacing as you like */
`;

export const Dot = styled.span`
  pointer-events: auto;
  position: absolute;
  left: 50%;
  top: 50%;
  width: 20px;
  height: 20px;
  background-color: ${props=>props.theme.colors["green"]};
  border-radius: 50%;
  transform: translate(-50%, -50%);
`;

export const Title = styled.span`
  width: 190px;               /* limit how wide it can go */
  position: absolute;
  left: 50%;                  /* pin to the center of the Item */
  top: 2.4rem;                /* just below the dot */
  transform: translateX(-50%);/* center it exactly */
  font-weight: ${props=>props.theme.fontWeights["bold"]};
  font-size: ${props=>props.theme.fontSizes["base"]};
  text-align: center;         /* wrap nicely under itself */
  white-space: normal;        /* allow multiple lines */
  opacity: 1;
  transition: 0.5s ease;
`;

export const Details = styled.div`
  background: ${props=>props.theme.colors["green"]};

  width: 0;
  height: 0;

  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);

  color: white;

  overflow: hidden;

  border-radius: 8px;
  padding: 0;
  transition: all 0.3s ease;
  
  /* when “open”, we’ll expand */
  &.open {
    width: 220px;
    height: 150px;
    padding: 1rem;
  }

  h3 {
    margin: 0 0 0.5rem;
  }
  small {
    display: block;
    margin-bottom: 0.5rem;
    opacity: 0.8;
  }
  p {
    font-size: ${props=>props.theme.fontSizes["sm"]};
    line-height: 1.2;
  }
  button {
    background: transparent;
    color: white;
    margin-top: 0.5rem;
    font-size: 0.8rem;
    border: 1px solid white;
    padding: 0.2rem 0.5rem;
    cursor: pointer;
  }
`;
