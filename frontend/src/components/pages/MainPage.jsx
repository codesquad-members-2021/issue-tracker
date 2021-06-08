import { Route, Switch, Link, Redirect, BrowserRouter } from "react-router-dom";

import Labels from "../Labels/Labels";
import Milestones from "../Milestones/Milestones";
import { useState } from "react";
import NewIssue from "./NewIssue";
import NoMatch from "./NoMatch";

const MainPage = () => {
	return localStorage.getItem("token") ? (
		<>
			<div>메인의 헤더</div>
			<ul>
				<li>
					<Link to="/main/milestones">milestones</Link>
				</li>
				<li>
					<Link to="/main/labels">labels</Link>
				</li>
				<li>
					<Link to="/main/new_issue">이슈 작성</Link>
				</li>
				<div>이슈리스트</div>
			</ul>
			<Switch>
				<Route exact path="/main/milestones" component={Milestones} />
				<Route exact path="/main/labels" component={Labels} />
				<Route exact path="/main/new_issue" component={NewIssue} />
				<Route path="/main/*" component={NoMatch} />
			</Switch>
		</>
	) : (
		<Redirect to="/login"></Redirect>
	);
};

export default MainPage;
