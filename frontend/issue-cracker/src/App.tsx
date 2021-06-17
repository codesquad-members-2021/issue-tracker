import React from 'react';
import { BrowserRouter, Route, Redirect } from 'react-router-dom';
import styled, { ThemeProvider } from 'styled-components';
import theme from '../src/components/styles/theme';
import { GlobalStyle } from './components/styles/GlobalStyle';
import LogIn from './components/layout/LogIn';
import Authentication from './components/Authentication';
import Header from './components/layout/Header';
import IssueList from './components/layout/IssueList';
import IssueAdd from './components/layout/IssueAdd';
import IssueDetail from './components/layout/IssueDetail';
import LabelList from './components/layout/LabelList';
import { PATH as P } from './utils/const';

function App(): JSX.Element {
  const token = localStorage.getItem('token');

  return (
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <AppStyle>
          <Route exact path={P.ROOT}>
            {token ? <Redirect to={P.ISSUE_LIST} /> : <Redirect to={P.LOGIN} />}
          </Route>
          <Route exact path={P.LOGIN} component={LogIn} />
          <Route exact path={P.AUTH} component={Authentication} />
          <Route path={P.MAIN} component={Header} />
          <Route exact path={P.ISSUE_LIST} component={IssueList} />
          <Route exact path={P.ISSUE_ADD} component={IssueAdd} />
          <Route exact path={P.ISSUE_DETAIL} component={IssueDetail} />
          <Route exact path={P.ISSUE_LABELLIST} component={LabelList} />
        </AppStyle>
      </ThemeProvider>
    </BrowserRouter>
  );
}

export default App;

const AppStyle = styled.div`
  margin: 0 80px;
`;
