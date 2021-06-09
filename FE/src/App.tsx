import { ThemeProvider } from 'styled-components';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import GlobalStyle from "./util/GlobalStyle";
import theme from "./util/styles/theme";

import { RegisterPage, LoginPage, IssuePage } from "./pages";


const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Router>
        <Switch>
          <Route path={"/"} exact component={LoginPage} />
          <Route path={"/register"} exact component={RegisterPage} />
          <Route path={"/issues"} exact component={IssuePage} />
        </Switch>
      </Router>
    </ThemeProvider>
  );
};

export default App;
