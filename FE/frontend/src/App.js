import theme from './styles/theme';
import GlobalStyle from './styles/GlobalStyle';
import { ThemeProvider } from 'styled-components';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { RecoilRoot } from 'recoil';
import Login from './components/login/Login';
import Main from './components/main/Main';
import Oauth from './components/login/Oauth';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <div className="App">
        <RecoilRoot>
          <BrowserRouter>
            <Switch>
              <Route path="/" exact component={Login} />
              <Route path="/oauth" exact component={Oauth} />
              <Route path="/main" exact component={Main} />
            </Switch>
          </BrowserRouter>
        </RecoilRoot>
      </div>
    </ThemeProvider>
  );
}

export default App;
