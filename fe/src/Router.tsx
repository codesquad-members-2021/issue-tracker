import { Route, BrowserRouter, Switch } from 'react-router-dom';
import IssuesPage from 'pages/IssuesPage';
import LoginPage from 'pages/LoginPage';
import OAuthPage from 'pages/OAuthPage';
import NewIssuePage from 'pages/NewIssuePage';
import LabelPage from 'pages/LabelPage';
import MilestoneListPage from 'pages/MilestoneListPage';
import IssueDetailPage from 'pages/IssueDetailPage';
import Header from 'components/header/Header';

const Router = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact>
          <LoginPage />
        </Route>
        <Route path="/api/login">
          <OAuthPage />
        </Route>
        <Header />
      </Switch>

      <Switch>
        <Route path={'/issues/new-issue'}>
          <NewIssuePage />
        </Route>
        <Route path="/issues/:id">
          <IssueDetailPage />
        </Route>
        <Route path="/issues">
          <IssuesPage />
        </Route>
        <Route path="/labels" exact>
          <LabelPage />
        </Route>
        <Route path="/milestones" exact>
          <MilestoneListPage />
        </Route>
      </Switch>
    </BrowserRouter>
  );
};

export default Router;
