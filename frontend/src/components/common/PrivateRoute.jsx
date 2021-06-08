import { Redirect, Route } from "react-router-dom";
const PrivateRoute = ({ component: Component }) => {
	return (
		<Route
			render={props =>
				localStorage.getItem("token") ? (
					<Component {...props} />
				) : (
					<Redirect to="/test" />
				)
			}
		/>
	);
};

export default PrivateRoute;
