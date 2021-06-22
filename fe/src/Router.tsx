import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Home from "components/home/Home";
import Detail from "components/detail/Detail";
// import IssueEditor from "components/editor/IssueEditor";
import IssueEditorContainer from "components/editor/IssueEditor.container";

function Router() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/editor" component={IssueEditorContainer} />
        <Route path="/detail" component={Detail} />
      </Switch>
    </BrowserRouter>
  );
}

export default Router;
