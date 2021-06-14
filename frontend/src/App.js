import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import LoginPage from 'page/loginPage/LoginPage';
import Header from './components/header/Header';
import MainPage from './page/mainPage/MainPage';
import CreateIssuePage from 'page/createIssuePage/CreateIssuePage';

function App() {
  const isLogin = true;
  return (
    <div className='App'>
      <Router>
        {isLogin && <Header />}
        <Switch>
          <Route path='/' component={LoginPage} exact />
          <Route path='/main' component={MainPage} />
          <Route path='/create' component={CreateIssuePage} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
