import { Route, Switch, Link } from "react-router-dom";
import Labels from "../Labels/Labels";
import Milestones from "../Milestones/Milestones";
//
const MainPage = () => {
	return (
		<>
			<div>메인의 헤더</div>
			<ul>
				<li>
					<Link to="/milestones">milestones</Link>
				</li>
				<li>
					<Link to="/labels">labels</Link>
				</li>
			</ul>
			{/* <Switch>
				<Route path="/milestones/" component={Milestones} />
				<Route path="/labels/" component={Labels} />
			</Switch> */}
		</>
	);
};

export default MainPage;
