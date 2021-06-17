import { Route, BrowserRouter, Switch } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import GlobalStyle from 'style/GlobalStyle';
import { theme } from 'style/theme';
import IssuesPage from 'pages/IssuesPage';
import LoginPage from 'pages/LoginPage';
import OAuthPage from 'pages/OAuthPage';
import { ThemeProvider as MuiThemeProvider } from '@material-ui/core/styles';
import { unstable_createMuiStrictModeTheme } from '@material-ui/core/styles';
import NewIssuePage from 'pages/NewIssuePage';
import { RecoilRoot } from 'recoil';
import { Suspense } from 'react';
import IssueDetailPage from 'pages/IssueDetailPage';
import LabelPage from 'pages/LabelPage';
import MilestoneListPage from 'pages/MilestoneListPage';

const MuiTheme = unstable_createMuiStrictModeTheme();

function App() {
  return (
    <RecoilRoot>
      <Suspense fallback={<div>Loading...</div>}>
        <MuiThemeProvider theme={MuiTheme}>
          <ThemeProvider theme={theme}>
            <GlobalStyle />
            <BrowserRouter>
              <Switch>
                <Route path={['/', '/issues']} exact>
                  <IssuesPage />
                </Route>
                <Route path={'/issues/new-issue'} exact>
                  <NewIssuePage />
                </Route>
                <Route path="/login" exact>
                  <LoginPage />
                </Route>
                <Route path="/login/oauth">
                  <OAuthPage />
                </Route>
                <Route path="/issues/detail">
                  <IssueDetailPage />
                </Route>
                <Route path="/labels" exact>
                  <LabelPage />
                </Route>
                <Route path="/milestones" exact>
                  <MilestoneListPage />
                </Route>
              </Switch>
            </BrowserRouter>
          </ThemeProvider>
        </MuiThemeProvider>
      </Suspense>
    </RecoilRoot>
  );
}

export default App;
