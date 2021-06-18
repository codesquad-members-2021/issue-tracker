import React, { Suspense, lazy } from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Header from './components/header/Header';
import LoginPage from 'page/loginPage/LoginPage';
import ErrorBoundary from 'components/common/ErrorBoundary';
function App() {
  const MainPage = lazy(() => import('./page/mainPage/MainPage'));
  const CreateIssuePage = lazy(() => import('./page/createIssuePage/CreateIssuePage'));
  const DetailIssuePage = lazy(() => import('./page/detailIssuePage/DetailIssuePage'));
  const LablePage = lazy(() => import('./page/lablePage/LablePage'));
  const MilestonePage = lazy(() => import('./page/milestonePage/MilestonePage'));

  return (
    <div className='App'>
      <Router>
        <Header />
        <Suspense fallback={<h1>Loading...</h1>}>
          <Switch>
            <Route path='/' component={LoginPage} exact />
            {/* <Route path='/main' component={MainPage} /> */}
            <Route path='/main'>
              <ErrorBoundary>
                <ErrorBoundary>
                  <MainPage />
                </ErrorBoundary>
              </ErrorBoundary>
            </Route>
            <Route path='/create' component={CreateIssuePage} />
            <Route path='/detail' component={DetailIssuePage} />
            <Route path='/label' component={LablePage} />
            <Route path='/milestone' component={MilestonePage} />
          </Switch>
        </Suspense>
      </Router>
    </div>
  );
}

export default App;
