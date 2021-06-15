import React, { Suspense, lazy } from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Header from './components/header/Header';
import LoginPage from 'page/loginPage/LoginPage';
// import MainPage from './page/mainPage/MainPage';
// import CreateIssuePage from 'page/createIssuePage/CreateIssuePage';

function App() {
  
  const MainPage = lazy(()=>import('./page/mainPage/MainPage'))
  const CreateIssuePage = lazy(()=>import('./page/createIssuePage/CreateIssuePage'))
  const isLogin = true;
  return (
    <div className='App'>

      <Router>
        <Suspense fallback={<h1>Loading...🎢</h1>}>
          {isLogin && <Header />}
          <Switch>
            <Route path='/' component={LoginPage} exact />
            <Route path='/main' component={MainPage} />
            <Route path='/create' component={CreateIssuePage} />
          </Switch>
        </Suspense>
      </Router>

    </div>
  );
}

export default App;
