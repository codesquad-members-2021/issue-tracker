import { ThemeProvider } from 'styled-components';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Container } from '@material-ui/core';
import { StylesProvider } from '@material-ui/core/styles';
import { RecoilRoot } from 'recoil';

import GlobalStyle from './util/styles/GlobalStyle';
import theme from './util/styles/theme';

import Header from './components/Header';
import { RegisterPage, LoginPage, IssuePage, IssueWritePage, LabelListPage } from './pages';
import BackgroundFluid from './components/Common/BackgroundFluid';

const App = () => {
  return (
    <RecoilRoot>
      <StylesProvider injectFirst>
        <ThemeProvider theme={theme}>
          <GlobalStyle />
          <BackgroundFluid>
            <Container maxWidth="lg">
              <Router>
                <Switch>
                  <Route path={'/'} exact component={LoginPage} />
                  <Route path={'/register'} exact component={RegisterPage} />
                  <>
                    <Header />
                    <Switch>
                      <Route path={'/issues'} exact component={IssuePage} />
                      <Route path={'/issues/write'} exact component={IssueWritePage} />
                      <Route path={'/labels'} exact component={LabelListPage} />
                    </Switch>
                  </>
                </Switch>
              </Router>
            </Container>
          </BackgroundFluid>
        </ThemeProvider>
      </StylesProvider>
    </RecoilRoot>
  );
};

export default App;
