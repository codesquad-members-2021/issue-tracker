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

function App(): JSX.Element {
  const token = localStorage.getItem('token');

  return (
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <AppStyle>
          <Route exact path="/">
            {token ? (
              <Redirect to="/main/issue-list" />
            ) : (
              <Redirect to="/login" />
            )}
          </Route>
          <Route exact path="/login" component={LogIn} />
          <Route exact path="/callback" component={Authentication} />
          <Route path="/main" component={Header} />
          <Route exact path="/main/issue-list" component={IssueList} />
          <Route exact path="/main/issue-add" component={IssueAdd} />
          <Route exact path="/main/issue-detail/:id" component={IssueDetail} />
          <Route exact path="/main/label-list" component={LabelList} />
        </AppStyle>
      </ThemeProvider>
    </BrowserRouter>
  );
}

export default App;

const AppStyle = styled.div`
  margin: 0 80px;
`;
