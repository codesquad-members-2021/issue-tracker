import { HashRouter, Redirect, Route, Switch } from "react-router-dom";

const Router = () => {
  return (
    <HashRouter>
      <Switch>
        {/* <Route exact path="/" component={Main} /> */}
        <Redirect from="*" to="/" />
      </Switch>
    </HashRouter>
  );
};

export default Router;
