import { Route, Switch, Link, Redirect } from "react-router-dom";
import Labels from "../Labels/Labels";
import Milestones from "../Milestones/Milestones";
import { useState } from "react";
import NewIssue from "./NewIssue";
import NoMatch from "./NoMatch";
import Header from "../Header/Header";
import Navigator from "../Header/Navigator";
const MainPage = () => {
	const { pathname } = window.location;
	console.log(pathname);

	return localStorage.getItem("token") ? (
		<>
			<Header pathName={pathname} />
			{(pathname === "/main/labels" || pathname === "/main/milestones") && (
				<Navigator /> //이부분 switch 문으로 리팩토링(pathName = "/main"이면 Menu~)
			)}
			<Switch>
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
