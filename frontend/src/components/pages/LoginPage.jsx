import { Link } from "react-router-dom";
import { BigBlueButton } from "./../../styles/StyledButtons";
import API from "./../util/API";

const LoginPage = () => {
	return (
		<>
			<div>로그인페이지</div>
			<a href={API.gitHubOAuth()}>
				<BigBlueButton>GitHub 계정으로 로그인</BigBlueButton>
			</a>
		</>
	);
};

export default LoginPage;
