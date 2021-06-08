import { theme } from 'style/theme';
import GlobalStyle from 'style/GlobalStyle';
import { ThemeProvider } from 'styled-components';
import { Route, BrowserRouter, Switch } from 'react-router-dom';
import IssuesPage from 'pages/IssuesPage';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <BrowserRouter>
        <Switch>
          <Route path={['/', '/issues']}>
            <IssuesPage />
          </Route>
        </Switch>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
