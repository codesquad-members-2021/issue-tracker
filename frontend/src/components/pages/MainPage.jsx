import { Route, Switch, Link, Redirect, BrowserRouter } from "react-router-dom";

import Labels from "../Labels/Labels";
import Milestones from "../Milestones/Milestones";
import { useState } from "react";

const MainPage = () => {
	return localStorage.getItem("token") ? (
		<BrowserRouter>
			<div>메인의 헤더</div>
			<ul>
				<li>
					<Link to="/milestones">milestones</Link>
				</li>
				<li>
					<Link to="/labels">labels</Link>
				</li>
			</ul>
			<Switch>
				<Route path="/milestones" component={Milestones} />
			</Switch>
		</BrowserRouter>
	) : (
		<Redirect to="/login"></Redirect>
	);
};

export default MainPage;
