import { createGlobalStyle } from 'styled-components';

// --- Styled Components ---
const GlobalStyle = createGlobalStyle`
  #root {
    width: 100%;
    min-height: 100vh;
    background-color: ${({ theme }) => theme.colors.grayScale.bgColor};
    margin: 0 auto;
    font-family: ${({ theme }) => theme.fontFamily.normal};
    font-weight: ${({ theme }) => theme.fontWeight.normal};
  }
`;

export default GlobalStyle;
