import { createGlobalStyle } from 'styled-components';

// --- Styled Components ---
const GlobalStyle = createGlobalStyle`
  #root {
    background-color: ${({ theme }) => theme.colors.grayScale.bgColor};
  }
`;

export default GlobalStyle;
