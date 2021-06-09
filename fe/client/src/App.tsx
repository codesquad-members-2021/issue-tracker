import React, { Suspense } from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import { Switch, Route } from 'react-router-dom';
import { RecoilRoot } from '@/utils/myRecoil/RecoilRoot';

const IssueListLazy = React.lazy(() => import('@/Pages/IssueList'));
const LoginLazy = React.lazy(() => import('@/Pages/LoginPage'));
const Page404Lazy = React.lazy(() => import('@/Pages/Page404'));

function App() {
  return (
    <RecoilRoot>
      <CssBaseline />
      <Suspense fallback="loading...">
        <Switch>
          <Route exact path="/issueList" component={IssueListLazy} />
          <Route exact path="/" component={LoginLazy} />
          <Route component={Page404Lazy} />
        </Switch >
      </Suspense>
    </RecoilRoot>
  );
}

export default App;
