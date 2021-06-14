import React, { Suspense } from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import { Switch, Route } from 'react-router-dom';
import { RecoilRoot } from '@/utils/myRecoil/RecoilRoot';
import { createGlobalStyle } from 'styled-components';

const HeaderLazy = React.lazy(() => import('@components/common/Header'));
const IssueListLazy = React.lazy(() => import('@/Pages/IssueListPage'));
const LoginLazy = React.lazy(() => import('@/Pages/LoginPage'));
const Page404Lazy = React.lazy(() => import('@/Pages/Page404'));
const CreateIssueLazy = React.lazy(() => import('@/Pages/CreateIssuePage'));

function App() {
  return (
    <RecoilRoot>
      <CssBaseline />
      <GlobalStyle />
      <Suspense fallback="loading...">
        <HeaderLazy />
        <Switch>
          <Route exact path="/" component={LoginLazy} />
          <Route exact path="/issueList" component={IssueListLazy} />
          <Route exact path="/createIssue" component={CreateIssueLazy} />
          <Route component={Page404Lazy} />
        </Switch >
      </Suspense>
    </RecoilRoot>
  );
}


const GlobalStyle = createGlobalStyle`
  body{
    background: #F7F7FC;
    padding: 27px 80px 0;
  }
`

export default App;