import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import IssueListPage from './components/issueListpage/IssueListPage';
import LoginPage from './components/login/LoginPage'
import Header from './components/header/Header'
import { RecoilRoot } from 'recoil'
function App() {
  const isLogin = true
  return (

    <div className="App">
      <RecoilRoot>
        <Router>
          <Switch>
          {isLogin && <Header/>}
          </Switch>
          <Switch>
            <Route path='/' component={LoginPage} exact/>
            //로그인이 되면, 되어있다면 화면 전환.
            <Route path='/main' component={IssueListPage}/>
          </Switch>
        </Router>
      </RecoilRoot>
    </div>
  );
}

export default App;
