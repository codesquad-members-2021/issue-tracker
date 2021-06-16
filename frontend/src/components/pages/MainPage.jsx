import { Route, Switch, Redirect } from "react-router-dom";
import styled from "styled-components";
import NewIssue from "./NewIssuePage";
import NoMatch from "./NoMatchPage";
import IssueDetailPage from "./IssueDetailPage";
// import Labels from "components/Labels/Labels";
import LabelsPage from "./LabelsPage";
// import Milestones from "components/Milestones/Milestones";
import MilestonesPage from "./MilestonesPage";
import Header from "components/common/Header";
import Navigator from "components/common/Navigator";
import Issues from "components/Issues/Issues";

const MainPage = () => {
	const { pathname } = window.location;

	return localStorage.getItem("accessToken") ? (
		<MainPageLayout>
			<Header pathName={pathname} />
			{pathname === "/main" && <Issues />}
			<Switch>
				<Route exact path="/main/milestones" component={MilestonesPage} />
				<Route exact path="/main/labels" component={LabelsPage} />
				<Route exact path="/main/new" component={NewIssue} />
				<Route exact path="/main/:id" component={IssueDetailPage} />
				<Route path="/main/*" component={NoMatch} />
			</Switch>
		</MainPageLayout>
	) : (
		<Redirect to="/" />
	);
};

const MainPageLayout = styled.div`
	padding: 0 5%;
`;

export default MainPage;
