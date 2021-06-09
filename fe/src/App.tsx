import { Route, BrowserRouter, Switch } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import GlobalStyle from 'style/GlobalStyle';
import { theme } from 'style/theme';
import IssuesPage from 'pages/IssuesPage';
import LoginPage from 'pages/LoginPage';
import OAuthPage from 'pages/OAuthPage';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <BrowserRouter>
        <Switch>
          <Route path={['/', '/issues']} exact>
            <IssuesPage />
          </Route>
          <Route path="/login" exact>
            <LoginPage />
          </Route>
          <Route path="/login/oauth">
            <OAuthPage />
          </Route>
        </Switch>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
