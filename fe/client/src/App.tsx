import React, { Suspense } from 'react';
import { Switch, Route } from 'react-router-dom';
import { createGlobalStyle } from 'styled-components';
import CssBaseline from '@material-ui/core/CssBaseline';
import { RecoilRoot } from '@/utils/myRecoil/RecoilRoot';

const HeaderLazy = React.lazy(() => import('@components/common/Header'));
const LoginLazy = React.lazy(() => import('@/Pages/LoginPage'));
const IssueListLazy = React.lazy(() => import('@/Pages/IssueListPage'));
const CreateIssueLazy = React.lazy(() => import('@/Pages/CreateIssuePage'));
const IssueDetailLazy = React.lazy(() => import('@/Pages/IssueDetailPage'));
const LabelListLazy = React.lazy(() => import('@/Pages/LabelListPage'));
const MilestoneLazy = React.lazy(() => import('@/Pages/MilestoneListPage'));
const Page404Lazy = React.lazy(() => import('@/Pages/Page404'));

const routeArray = [
  { path: '/issueList', component: IssueListLazy },
  { path: '/createIssue', component: CreateIssueLazy },
  { path: '/issueDetail', component: IssueDetailLazy },
  { path: '/labelList', component: LabelListLazy },
  { path: '/milestoneList', component: MilestoneLazy }
];

const routePaths = routeArray.map(({ path }) => path);
function App() {
  return (
    <RecoilRoot>
      <CssBaseline />
      <GlobalStyle />
      <Suspense fallback="loading...">
        <HeaderLazy {...{ routePaths }} />
        <Switch>
          <Route exact path="/" component={LoginLazy} />
          {routeArray.map(({ path, component }) => {
            return <Route exact {...{ path, component }} key={path} />
          })}
          <Route component={Page404Lazy} />
        </Switch >
      </Suspense>
    </RecoilRoot>
  );
}


const GlobalStyle = createGlobalStyle`
  body {
    background: #F7F7FC;
    padding: 27px 80px 0;
  }
  a {
    width: inherit;
    text-decoration: none;
    color: inherit;
  }
`;

export default App;