import styled from "styled-components";
import { Route, Switch, Link, Redirect, BrowserRouter } from "react-router-dom";
const NoMatch = () => {
	return (
		<>
			<Link to="/main">홈으로</Link>
			<ErrorImage src="https://cdn.dribbble.com/users/252114/screenshots/3840347/mong03b.gif"></ErrorImage>
		</>
	);
};

export default NoMatch;

const ErrorImage = styled.img`
	position: absolute;
	top: 50%;
	left: 50%;
	transform: translate(-50%, -50%);
`;
