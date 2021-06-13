import { useRef, createContext } from "react";
import { Route, Switch, Link } from "react-router-dom";
import LoginPage from "./components/pages/LoginPage";
import LoginLoadingPage from "./components/pages/LoginLoadingPage";
import MainPage from "./components/pages/MainPage";
import PrivateRoute from "./components/common/PrivateRoute";
import Milestones from "./components/Milestones/Milestones";
import NoMatch from "./components/pages/NoMatchPage";
import Labels from "./components/Labels/Labels";
import NewIssue from "./components/pages/NewIssuePage";
import { ThemeProvider } from "styled-components";
import theme from "styles/theme";

export const globalStateRoot = createContext();

const store = {
	observers: [],

	subscribe(fn) {
		this.observers.push(fn);
	},

	getData() {
		return this.filters;
	},

	addFilter(newFilter) {
		this.filters.push(newFilter);
		this.observers.forEach((fn) => fn(this.getData()));
	},
	filters: ["milestone", "label", "asignee"],
};

function App() {
	const globalState = useRef(store);
	return (
		<globalStateRoot.Provider value={globalState}>
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
		</globalStateRoot.Provider>
	);
}

export default App;
