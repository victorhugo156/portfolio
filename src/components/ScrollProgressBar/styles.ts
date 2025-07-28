import styled from 'styled-components'

export const ScrollContainer = styled.div`
  position: fixed;
  right: 0.5rem;
  top: 20rem;
  width: 8px;
  height: 30vh;
  background-color: rgba(255, 255, 255, 0.1); // transparent background
  z-index: 999;
  border-radius: 2px;
  pointer-events: none; // this ensures it doesn't block clicks
`

export const ScrollIndicator = styled.div`
  width: 100%;
  background-color: ${props=>props.theme.colors["green"]};
  transition: height 0.25s ease-out;
  border-radius: 2px;
`
