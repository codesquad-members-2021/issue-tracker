import { BrowserRouter, Switch, Route } from "react-router-dom";
import { RegisterPage, LoginPage } from "./pages";

const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path={"/"} exact component={LoginPage} />
        <Route path={"/register"} exact component={RegisterPage} />
      </Switch>
    </BrowserRouter>
  );
};

export default App;
