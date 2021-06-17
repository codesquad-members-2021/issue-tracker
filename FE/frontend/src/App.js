import theme from './styles/theme';
import GlobalStyle from './styles/GlobalStyle';
import { ThemeProvider } from 'styled-components';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { Redirect } from 'react-router';
import { RecoilRoot } from 'recoil';
import { QueryClient, QueryClientProvider } from 'react-query';
import Login from './components/login/Login';
import Main from './components/main/Main';
import Oauth from './components/login/Oauth';

const queryClient = new QueryClient();
function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <QueryClientProvider client={queryClient}>
        <div className="App">
          <RecoilRoot>
            <BrowserRouter>
              <Switch>
                <Route exact path="/">
                  {localStorage.getItem('token') ? (
                    <Redirect to="/main" />
                  ) : (
                    <Login />
                  )}
                </Route>
                <Route path="/login/github" component={Oauth} />
                <Route path="/main" component={Main} />
              </Switch>
            </BrowserRouter>
          </RecoilRoot>
        </div>
      </QueryClientProvider>
    </ThemeProvider>
  );
}

export default App;
