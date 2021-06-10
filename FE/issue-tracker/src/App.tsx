import { BrowserRouter, Switch, Route } from 'react-router-dom';
import styled, { ThemeProvider } from 'styled-components';

import GlobalStyle from './globalStyle';
import customTheme from '@styles/theme';
import Login from '@pages/Login';
import Issues from '@pages/Issues';
import NewIssue from '@pages/NewIssue';
import Labels from '@pages/Labels';
import Milestones from '@pages/Milestones';
import IssueDetail from '@pages/IssueDetail';

function App() {
  return (
    <>
      <GlobalStyle />
      <ThemeProvider theme={customTheme}>
        <Background>
          <BrowserRouter>
            <Switch>
              <Route path="/" exact>
                <Login />
              </Route>
              <Route path="/issues">
                <Issues />
              </Route>
              <Route path="/new-issue">
                <NewIssue />
              </Route>
              <Route path="/issue-detail">
                <IssueDetail />
              </Route>
              <Route path="/labels">
                <Labels />
              </Route>
              <Route path="/milestones">
                <Milestones />
              </Route>
            </Switch>
          </BrowserRouter>
        </Background>
      </ThemeProvider>
    </>
  );
}

export default App;

const Background = styled.div`
  background-color: #f7f7fc;
  width: 100%;
  height: 100%;
`;
