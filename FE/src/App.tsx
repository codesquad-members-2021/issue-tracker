import { ThemeProvider } from 'styled-components';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Container } from '@material-ui/core';
import { StylesProvider } from '@material-ui/core/styles';

import GlobalStyle from './util/styles/GlobalStyle';
import theme from './util/styles/theme';

import Header from './components/Header';
import { RegisterPage, LoginPage, IssuePage } from './pages';

const App = () => {
  return (
    <StylesProvider injectFirst>
      <ThemeProvider theme={theme}>
        <GlobalStyle />

        <Container maxWidth="lg">
          <Router>
            <Switch>
              <Route path={'/'} exact component={LoginPage} />
              <Route path={'/register'} exact component={RegisterPage} />
              <>
                <Header />
                <Route path={'/issues'} exact component={IssuePage} />
              </>
            </Switch>
          </Router>
        </Container>
      </ThemeProvider>
    </StylesProvider>
  );
};

export default App;
