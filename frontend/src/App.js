import React, { Suspense, lazy, useEffect } from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import Header from './components/header/Header';
import LoginPage from 'page/loginPage/LoginPage';
import { useSetRecoilState } from 'recoil';
import { controlLoginState } from 'store/loginStore';
import API from 'util/api/api';

function App() {
  const MainPage = lazy(() => import('./page/mainPage/MainPage'));
  const CreateIssuePage = lazy(() => import('./page/createIssuePage/CreateIssuePage'));
  const DetailIssuePage = lazy(() => import('./page/detailIssuePage/DetailIssuePage'));
  const LabelPage = lazy(() => import('./page/labelPage/LabelPage'));
  const MilestonePage = lazy(() => import('./page/milestonePage/MilestonePage'));
  const setLoginData = useSetRecoilState(controlLoginState);
  const token = localStorage.getItem('token');
  const isLogin = () => !!token
  useEffect(() => {
    if (isLogin()) {
      getUserInfoUsingJWT()
    }
  }, []);

  const getUserInfoUsingJWT = async() =>{
    
    const headerInfo = {
      headers: {
        Authorization : `Bearer ${token}`
        }
      }
    
    try {
      const response = await fetch(API.getUserInfo, headerInfo)
      const userData = await response.json()
      const loginData = {avatarUrl: userData.avatarUrl, name: userData.name}
      setLoginData({ isLogin: true, loginData });
    } catch(err){
       console.log(err)
    }
  }

  return (
    <div className='App'>
      <Router>
        <Header />
        <Suspense fallback={<h1>Loading...</h1>}>
          <Switch>
            <Route path='/' exact>
              {isLogin() ? <Redirect to='/main' /> : <LoginPage />}
            </Route>
            <Route path='/main' component={MainPage} />
            <Route path='/create' component={CreateIssuePage} />
            <Route path='/detail' component={DetailIssuePage} />
            <Route path='/label' component={LabelPage} />
            <Route path='/milestone' component={MilestonePage} />
          </Switch>
        </Suspense>
      </Router>
    </div>
  );
}

export default App;
