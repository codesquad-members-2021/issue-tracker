import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Home from "components/home/Home";
import Editor from "components/editor/Editor";
import Detail from "components/detail/Detail";

function Router() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/editor" component={Editor} />
        <Route exact path="/detail" component={Detail} />
      </Switch>
    </BrowserRouter>
  );
}

export default Router;
