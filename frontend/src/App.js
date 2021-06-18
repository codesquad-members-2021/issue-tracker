import { useEffect } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import './App.css';

import MainPage from 'pages/MainPage';
import SigninPage from 'pages/SigninPage';
import OAuthCallbackPage from 'pages/OAuthCallbackPage';
import IssueListPage from 'pages/IssueListPage';
import AddIssuePage from 'pages/AddIssuePage';

import Header from 'components/common/Header';
// import CountMyRecoil from './components/Count/CountMyRecoil';

function App() {

  // for test -> have to refactor
  useEffect(() => {
    if (window.location.pathname !== "/" && window.location.pathname !== "/auth/github/callback" && !localStorage.getItem("issue-tracker-user") ) {
      alert("로그인이 만료되었습니다. 로그인을 다시 해주세요");
      window.location.href = "/";
    }
  }, [])

  return(
    <>
      {/* 
        <RecoilRoot>
          <CountMyRecoil />
        </RecoilRoot>
      */}
      { 
        window.location.pathname !== "/" 
        && <Header />
      }
      <BrowserRouter>
        <Route exact path="/" component={SigninPage} />
        <Route path="/main" component={MainPage} />
        <Route path="/add/issue" component={AddIssuePage} />
        <Route path="/auth/github/callback" component={OAuthCallbackPage} />
        <Route path="/issues" component={IssueListPage} />
      </BrowserRouter>
    </>
  );
}

export default App;
