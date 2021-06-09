import { Route, Switch, Link } from "react-router-dom";
import styled from "styled-components";
import LoginPage from "./components/pages/LoginPage";
import LoginLoadingPage from "./components/pages/LoginLoadingPage";
import MainPage from "./components/pages/MainPage";
import PrivateRoute from "./components/common/PrivateRoute";
import Milestones from "./components/Milestones/Milestones";
import NoMatch from "./components/pages/NoMatchPage";
import Labels from "./components/Labels/Labels";
import NewIssue from "./components/pages/NewIssuePage";
import { ThemeProvider } from "styled-components";
import theme from "./../src/styles/theme";

function App() {
	return (
		<ThemeProvider theme={theme}>
			<Switch>
				<Route exact path="/" component={LoginPage} />
				<PrivateRoute path="/main" component={MainPage} />
				<Route path="/login" component={LoginLoadingPage} />
				<Route path="/main/milestones" component={Milestones} />
				<Route path="/main/labels" component={Labels} />
				{/* <Route path="/main/new" component={NewIssue} /> */}
				<Route path="*" component={NoMatch} />
			</Switch>
		</ThemeProvider>
	);
}

export default App;
