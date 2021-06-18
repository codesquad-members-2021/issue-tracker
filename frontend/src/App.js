import React, { Suspense, lazy } from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Header from './components/header/Header';
import LoginPage from 'page/loginPage/LoginPage';
function App() {
  const MainPage = lazy(() => import('./page/mainPage/MainPage'));
  const CreateIssuePage = lazy(() => import('./page/createIssuePage/CreateIssuePage'));
  const DetailIssuePage = lazy(() => import('./page/detailIssuePage/DetailIssuePage'));
  const LablePage = lazy(() => import('./page/lablePage/LablePage'));
  const MilestonePage = lazy(() => import('./page/milestonePage/MilestonePage'));
  const isLogin = true;
  return (
    <div className='App'>
      <Router>
        <Suspense fallback={<h1>Loading...</h1>}>
          {isLogin && <Header />}
          <Switch>
            <Route path='/' component={LoginPage} exact />
            <Route path='/main' component={MainPage} />
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
