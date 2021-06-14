import { BrowserRouter, Redirect, Route, Switch } from "react-router-dom";
import Login from "@/Routes/LoginPage";
import NewIssue from "@/Routes/NewIssuePage";
import MainPage from "@/Routes/MainPage";
import IssueDetail from "@/Routes/IssueDetail";

const Router = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={MainPage} />
        <Route path="/login" component={Login} />
        <Route path="/issueDetail" component={IssueDetail} />
        {/* <Route path="/tab" component={tab} /> */}
        <Route path="/newIssue" component={NewIssue} />
        <Redirect from="*" to="/" />
      </Switch>
    </BrowserRouter>
  );
};

export default Router;
