import { Route, Switch, Link, Redirect } from "react-router-dom";
import Labels from "../Labels/Labels";
import Milestones from "../Milestones/Milestones";
import { useState } from "react";
import NewIssue from "./NewIssuePage";
import NoMatch from "./NoMatchPage";
import Header from "../Header/Header";
import Navigator from "../Header/Navigator";
import Issue from "./../Issues/Issues";
import IssueDetailPage from "./IssueDetailPage";

const MainPage = () => {
	const { pathname } = window.location;
	console.log(pathname);

	return localStorage.getItem("token") ? (
		<>
			<Header pathName={pathname} />
			{(pathname === "/main/labels" || pathname === "/main/milestones") && (
				<Navigator /> //이부분 switch 문으로 리팩토링(pathName = "/main"이면 Menu~)
			)}
			{pathname === "/main" && <Issue />}
			<Switch>
				<Route exact path="/main/1" component={IssueDetailPage} />
				<Route exact path="/main/milestones" component={Milestones} />
				<Route exact path="/main/labels" component={Labels} />
				<Route exact path="/main/new" component={NewIssue} />
				<Route path="/main/*" component={NoMatch} />
			</Switch>
		</>
	) : (
		<Redirect to="/login"></Redirect>
	);
};

export default MainPage;
