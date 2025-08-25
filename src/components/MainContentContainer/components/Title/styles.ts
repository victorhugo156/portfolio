
import styled from "styled-components";
import { responsive } from "../../../../utils/mixins";
import type { DefaultTheme } from 'styled-components';

export const Header = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  gap: 1rem;
  padding: 4rem 0;

  h1 {
    white-space: nowrap;

    ${responsive.maxMobileL`
      font-size: ${(props: { theme: DefaultTheme }) => props.theme.fontSizes["md"]};
    `}
  }

  div {
    background-color: ${props => props.theme.colors["gray"]};
    height: .2rem;
    flex: 1;
  }
`