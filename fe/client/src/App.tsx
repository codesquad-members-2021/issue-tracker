import React, { Suspense } from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import { Switch, Route } from 'react-router-dom';

const LoginLazy = React.lazy(() => import('@/Pages/LoginPage'));
const Page404Lazy = React.lazy(() => import('@/Pages/Page404'));

function App() {
  return (
    <>
    <CssBaseline />
    <Suspense fallback="loading...">
      <Switch>
        <Route exact path="/issueList">

        </Route>

        <Route exact path="/" component={LoginLazy} />

        <Route>
          <Page404Lazy />
        </Route>
      </Switch >
    </Suspense>
    </>
  );
}

export default App;
