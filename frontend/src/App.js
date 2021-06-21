import React, { Suspense, lazy, useEffect } from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Header from './components/header/Header';
import LoginPage from 'page/loginPage/LoginPage';

import { useSetRecoilState } from 'recoil';
import { controlLoginState } from 'store/loginStore';

function App() {
  const MainPage = lazy(() => import('./page/mainPage/MainPage'));
  const CreateIssuePage = lazy(() => import('./page/createIssuePage/CreateIssuePage'));
  const DetailIssuePage = lazy(() => import('./page/detailIssuePage/DetailIssuePage'));
  const LabelPage = lazy(() => import('./page/labelPage/LabelPage'));
  const MilestonePage = lazy(() => import('./page/milestonePage/MilestonePage'));
  const setLoginData = useSetRecoilState(controlLoginState);
  const isLogin = () => !!localStorage.getItem('token');
  useEffect(()=>{
    if (isLogin()) setLoginData({isLogin: true, loginData: null})
  },[])
  /*
  token유무로 로그인상태 확인=> jwt api 요청=> setLoginData => redirect(/main)
  : loginPage에서 token값확인하는 부분 삭제하기.
  */

  return (
    <div className='App'>
      <Router>
        <Header/>
        <Suspense fallback={<h1>Loading...</h1>}>
          <Switch>
            <Route path='/' component={LoginPage} exact />
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
