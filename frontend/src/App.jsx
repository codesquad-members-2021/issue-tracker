import { Route, Switch, Link } from "react-router-dom";
import styled from "styled-components";
import LoginPage from "./components/pages/LoginPage";
import LoginLoadingPage from "./components/pages/LoginLoadingPage";
import MainPage from "./components/pages/MainPage";
import PrivateRoute from "./components/common/PrivateRoute";
import Milestones from "./components/Milestones/Milestones";
function App() {
	return (
		<>
			{/* <div>레이블/마일스톤</div> */}
			<Switch>
				<PrivateRoute exact path="/" component={MainPage} />
				<Route path="/test" component={LoginPage} />
				<Route path="/login" component={LoginLoadingPage} />
				<Route path="/milestones" component={Milestones} />

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
