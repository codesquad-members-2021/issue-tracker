import './App.css';
import MainPage from 'pages/MainPage';
import SigninPage from 'pages/SigninPage';
import OAuthCallbackPage from 'pages/OAuthCallbackPage';
import { BrowserRouter, Route } from 'react-router-dom';
// import CountMyRecoil from './components/Count/CountMyRecoil';

function App() {

  return(
    <>
      {/* 
        <RecoilRoot>
          <CountMyRecoil />
        </RecoilRoot>
      */}
      <BrowserRouter>
        <Route exact path="/" component={MainPage} />
        <Route path="/signin" component={SigninPage} />
        <Route path="/auth/github/callback" component={OAuthCallbackPage} />
      </BrowserRouter>
    </>
  );
}

export default App;
