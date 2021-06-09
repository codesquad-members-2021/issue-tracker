import { BrowserRouter, Redirect, Route, Switch } from "react-router-dom";
import Login from "@/Routes/LoginPage";
import Home from "@/Components/Home/Home";
import NewIssue from "@/Routes/NewIssuePage";

const Router = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/login" component={Login} />
        {/* <Route path="/issueDetail" component={issueDetail} /> */}
        {/* <Route path="/tab" component={tab} /> */}
        <Route path="/newIssue" component={NewIssue} />
        <Redirect from="*" to="/" />
      </Switch>
    </BrowserRouter>
  );
};

export default Router;
