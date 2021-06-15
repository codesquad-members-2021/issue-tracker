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

	return localStorage.getItem("accessToken") ? (
		<MainPageLayout>
			<Header pathName={pathname} />
			{(pathname === "/main/labels" || pathname === "/main/milestones") && (
				<Navigator />
			)}
			{pathname === "/main" && <Issues />}
			<Switch>
				<Route exact path="/main/milestones" component={Milestones} />
				<Route exact path="/main/labels" component={Labels} />
				<Route exact path="/main/new" component={NewIssue} />
				<Route exact path="/main/:id" component={IssueDetailPage} />
				<Route path="/main/*" component={NoMatch} />
			</Switch>
		</MainPageLayout>
	) : (
		<Redirect to="/login" />
	);
};

const MainPageLayout = styled.div`
`;

export default MainPage;
