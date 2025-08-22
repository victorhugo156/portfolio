import styled from 'styled-components'

export const ContainerProjects = styled.div`
  width: 100%;
  display: flex;
  padding: 0 2rem;
`

export const ProjectDetailsContainer = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 3rem;
`

// export const ProjectImage = styled.div<{ visible: boolean }>`
// // width: 50%;

// flex: 1;
// height: 19rem;

//  /* fade via opacity instead of display */
// opacity: ${p => p.visible ? 1 : 0};
// pointer-events: none;     /* so it never blocks your mouseout */
// transition: opacity .3s ease;

// img{
//     width: 100%;
//     height: auto;
//     object-fit: cover;
// }

// `
