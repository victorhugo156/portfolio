
import styled from 'styled-components';

export const Wrapper = styled.div`
  background: white;
  position: relative;
  width: 100%;
  height: 15rem;
  overflow-x: hidden;
  display: flex;
  align-items: center;
`;

export const List = styled.ul`
  position: absolute;
  left: 0;
  top: 50%;
  transform: translateY(-50%);
  height: 0.12rem;
  padding: 0 4rem;
  transform: translateY(-50%);
  display: flex;
  padding: 0 4rem;
  background: ${props=>props.theme.colors["gray"]};
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
  position: absolute;
  left: 50%;                  /* pin to the center of the Item */
  top: 2.4rem;                /* just below the dot */
  transform: translateX(-50%);/* center it exactly */

  width: 150px;               /* limit how wide it can go */
  text-align: center;         /* wrap nicely under itself */
  white-space: normal;        /* allow multiple lines */

  font-weight: bold;
  font-size: 0.9rem;
  opacity: 1;

  transition: 0.5s ease;

`;

export const Details = styled.div`
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  width: 0;
  height: 0;
  overflow: hidden;
  background: #444;
  color: white;
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
    font-size: 0.85rem;
    line-height: 1.2;
  }
  button {
    margin-top: 0.5rem;
    font-size: 0.8rem;
    background: transparent;
    border: 1px solid white;
    color: white;
    padding: 0.2rem 0.5rem;
    cursor: pointer;
  }
`;
