import React from 'react';
import { BrowserRouter, Route, Redirect } from 'react-router-dom';
import styled, { ThemeProvider } from 'styled-components';
import theme from '../src/components/styles/theme';
import { GlobalStyle } from './components/styles/GlobalStyle';
import LogIn from './components/layout/LogIn';
import Callback from './components/Callback';
import Header from './components/layout/Header';
import IssueList from './components/layout/IssueList';
import IssueAdd from './components/layout/IssueAdd';

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
          <Route exact path="/callback" component={Callback} />
          <Route path="/main" component={Header} />
          <Route exact path="/main/issue-list" component={IssueList} />
          <Route exact path="/main/issue-add" component={IssueAdd} />
          {/* <Route exact path="/issue-add" component={Header} /> */}
          {/* <Route exact path="/main/add" component={AddList} /> */}
        </AppStyle>
      </ThemeProvider>
    </BrowserRouter>
  );
}

export default App;

const AppStyle = styled.div`
  margin: 0 80px;
`;
