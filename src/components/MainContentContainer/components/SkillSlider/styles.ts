import styled, { keyframes} from "styled-components";


const scroll = keyframes`
  0% { transform: translateX(0); }
  100% { transform: translateX(-50%); } // scroll half, because we duplicated
`

export const SliderWrapper = styled.div`

  overflow: hidden;
  width: 100%;
  background-color: #fff; // or transparent
  padding: 1rem 0;

`

export const SLiderTrack = styled.div`

display: flex;
  width: max-content;
  animation: ${scroll} 20s linear infinite;

`

export const SlideItem = styled.div`

  flex: 0 0 auto;
  margin: 0 1.5rem;

  img {
    height: 40px;
    width: auto;
  }

`
