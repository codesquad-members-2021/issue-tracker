import { Route, Switch, Link } from "react-router-dom";
import styled from "styled-components";
import LoginPage from "./components/pages/LoginPage";
import LoadingPage from "./components/pages/LoadingPage";
import MainPage from "./components/pages/MainPage";
function App() {
	return (
		<>
			<Switch>
				<Route path="/" exact component={LoginPage} />
				<Route path="/login" exact component={LoadingPage} />
				<Route path="/main" exact component={MainPage} />
				<Route
					render={({ location }) => (
						<div>
							<Link to="/">
								<button>홈으로가기</button>
							</Link>
							<ErrorImage src="https://cdn.dribbble.com/users/252114/screenshots/3840347/mong03b.gif" />
						</div>
					)}
				/>
			</Switch>
		</>
	);
}
const ErrorImage = styled.img`
	position: absolute;
	top: 50%;
	left: 50%;
	transform: translate(-50%, -50%);
`;

export default App;
