import { Route, Switch, Link } from "react-router-dom";
import Milestones from "../Milestones/Milestones";

const MainPage = () => {
	return (
		<>
			<div>메인의 헤더</div>
			<Switch>
				<Route path="/main/milestone" component={Milestones} />
			</Switch>
		</>
	);
};

export default MainPage;
