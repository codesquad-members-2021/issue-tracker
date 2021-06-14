import { Redirect, Route } from "react-router-dom";
const PrivateRoute = ({ component: Component }) => {
	return (
		<Route
			render={props =>
				localStorage.getItem("accessToken") ? (
					<Component {...props} />
				) : (
					<Redirect to="/" />
				)
			}
		/>
	);
};

export default PrivateRoute;
