import { ThemeProvider } from 'styled-components';
import GlobalStyle from 'style/GlobalStyle';
import { theme } from 'style/theme';

import { ThemeProvider as MuiThemeProvider } from '@material-ui/core/styles';
import { unstable_createMuiStrictModeTheme } from '@material-ui/core/styles';
import Header from 'components/header/Header';
import { RecoilRoot } from 'recoil';
import { Suspense } from 'react';

import Router from 'Router';
const MuiTheme = unstable_createMuiStrictModeTheme();

function App() {
  return (
    <RecoilRoot>
      <Suspense fallback={<div>Loading...</div>}>
        <MuiThemeProvider theme={MuiTheme}>
          <ThemeProvider theme={theme}>
            <GlobalStyle />
             <Header />
            <Router />
          </ThemeProvider>
        </MuiThemeProvider>
      </Suspense>
    </RecoilRoot>
  );
}

export default App;
