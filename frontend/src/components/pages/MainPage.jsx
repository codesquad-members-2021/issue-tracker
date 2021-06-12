import { useState } from "react";
import { Route, Switch, Link, Redirect } from "react-router-dom";
import styled from "styled-components";
import NewIssue from "./NewIssuePage";
import NoMatch from "./NoMatchPage";
import IssueDetailPage from "./IssueDetailPage";
import Labels from "components/Labels/Labels";
import Milestones from "components/Milestones/Milestones";
import Header from "components/common/Header";
import Navigator from "components/common/Navigator";
import Issues from "components/Issues/Issues";

const MainPage = () => {
	const { pathname } = window.location;
	console.log(pathname);

	return localStorage.getItem("accessToken") ? (
		<MainPageLayout>
			<Header pathName={pathname} />

			{(pathname === "/main/labels" || pathname === "/main/milestones") && <Navigator />}
			{pathname === "/main" && <Issues />}
			<Switch>
				<Route exact path="/main/:id" component={IssueDetailPage} />
				<Route exact path="/main/milestones" component={Milestones} />
				<Route exact path="/main/labels" component={Labels} />
				<Route exact path="/main/new" component={NewIssue} />
				<Route path="/main/*" component={NoMatch} />
			</Switch>
		</MainPageLayout>
	) : (
		<Redirect to="/login"></Redirect>
	);
};

const MainPageLayout = styled.div`
	/* display: flex;
	justify-content: center;
	align-items: center;
	padding: 0 80px; */
`;

export default MainPage;
