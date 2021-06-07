import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { ChakraProvider } from '@chakra-ui/react';

import theme from '@styles/theme';
import Login from '@pages/Login';
import Issues from '@pages/Issues';
import NewIssue from '@pages/NewIssue';
import Labels from '@pages/Labels';
import MileStones from '@pages/MileStones';
import IssueDetail from '@pages/IssueDetail';

function App() {
  return (
    <ChakraProvider>
      <ThemeProvider theme={theme}>
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
              <MileStones />
            </Route>
          </Switch>
        </BrowserRouter>
      </ThemeProvider>
    </ChakraProvider>
  );
}

export default App;
