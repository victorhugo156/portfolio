
import styled from 'styled-components';

export const Wrapper = styled.div`
  max-width: 100vw;
  height: 80vh;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow-x: auto;
  position: relative;
  &::-webkit-scrollbar { display: none; }
`;

export const List = styled.ul`
  --primary-color: #4000ff;    /* whatever your theme color is */
  --scale: 1;                   /* default scale for your pop-out effect */

  background-color: #888;
  position: absolute;
  height: 0.12rem;
  padding: 0 4rem;
  list-style: none;
  margin: 0;
  display: flex;
  left: 0; top: 50%;
`;



export const Item = styled.li`
  position: relative;
  width: 20rem;

  &::before {
    content: "";
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    width: 0.12rem;
    height: 1rem;
    background-color: #888;
    transition: background-color 0.3s ease;
  }

  &::after {
    content: attr(data-date);
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -150%);
    color: #fff;
    font-size: 0.8rem;
    white-space: nowrap;
  }

  /* flip the date to below the line on even items */
  &:nth-child(even)::after {
    transform: translate(-50%, 200%);
  }

  &:hover::before {
    background-color: var(--primary-color);
  }
  &:hover::after {
    color: var(--primary-color);
  }
`;

export const Title = styled.span`
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, 200%);  /* show below the line by default */
  font-weight: 600;
  white-space: nowrap;
  opacity: 0;
  transition: opacity 0.25s ease;

  /* on hover, fade it in */
  ${Item}:hover & {
    opacity: 1;
  }
`;

export const DataBox = styled.div`
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%) scale(var(--scale));
  width: 1.3rem;
  height: 1.3rem;
  border-radius: 50%;
  background-color: #888;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  color: #fff;
  transition: 
    background-color 0.3s ease,
    transform 0.3s ease;

  &:hover {
    background-color: var(--primary-color);
    --scale: 1.2;
    cursor: pointer;
    z-index: 200;
  }

  &.show {
    background-color: aqua;
    width: 22rem;
    height: 15rem;
    border-radius: 1rem;
    padding: 0.5rem;
    box-shadow: 0 0.1rem 0.4rem #0004;
    --scale: 1;  /* reset scale so the full pane isn’t multiplied again */
    z-index: 300;
    transform: translate(-50%, -50%) scale(1);
  }
`;

export const Heading = styled.h3`
  text-transform: capitalize;
`;

export const Small = styled.small`
  font-size: 0.8rem;
  opacity: 0.7;
`;

export const Paragraph = styled.p`
  background-color: #fff3;
  padding: 1rem;
  margin-left: 0.7rem;
  transition: margin 0.3s ease;
  .show & { margin-left: 0; }
`;

export const Close = styled.span`
  align-self: flex-start;
  background-color: antiquewhite;
  padding: 0.5rem 0.8rem;
  border-radius: 2rem;
  font-size: 1rem;
`;
