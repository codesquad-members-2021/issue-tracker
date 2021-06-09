import React from 'react';
import styled, { ThemeProvider } from 'styled-components';
import theme from '../src/components/styles/theme';
import { GlobalStyle } from './components/styles/GlobalStyle';
import LogIn from './components/layout/LogIn';

function App(): JSX.Element {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <AppStyle>
        <LogIn />
      </AppStyle>
    </ThemeProvider>
  );
}

export default App;

const AppStyle = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  height: 100vh;
`;
