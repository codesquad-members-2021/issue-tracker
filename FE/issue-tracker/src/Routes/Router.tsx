import { BrowserRouter, Redirect, Route, Switch } from "react-router-dom";
import Login from "@/Routes/LoginPage";
import NewIssue from "@/Routes/NewIssuePage";
import MainPage from "@/Routes/MainPage";
import Tab from "@/Routes/TabPage";
import IssueDetail from "@/Routes/IssueDetail";
import Callback from "@/Routes/Callback";

const Router = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={MainPage} />
        <Route path="/login" component={Login} />
        <Route path="/tab" component={Tab} />
        <Route path="/issueDetail" component={IssueDetail} />
        <Route path="/newIssue" component={NewIssue} />
        <Route path="/callback" component={Callback} />
        <Redirect from="*" to="/" />
      </Switch>
    </BrowserRouter>
  );
};

export default Router;
