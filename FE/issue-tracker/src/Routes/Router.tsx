import { HashRouter, Redirect, Route, Switch } from "react-router-dom";
import Home from "@/Components/Home/Home";

const Router = () => {
  return (
    <HashRouter>
      <Switch>
        <Route exact path="/" component={Home} />
        {/* <Route path="/login" component={login} /> */}
        {/* <Route path="/issueDetail" component={issueDetail} /> */}
        {/* <Route path="/tab" component={tab} /> */}
        {/* <Route path="/newIssue" component={newIssue} /> */}
        <Redirect from="*" to="/" />
      </Switch>
    </HashRouter>
  );
};

export default Router;
