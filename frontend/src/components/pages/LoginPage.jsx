import styled from "styled-components";
import { Link } from "react-router-dom";
import { LoginButton } from "styles/StyledButtons";
import API from "util/API";
import { ReactComponent as Logo } from "images/LogotypeLarge.svg";

const LoginPage = () => {
	return (
		<LoginPageLayout>
			<Contents>
				<Logo />
				<a href={API.gitHubOAuth()}>
					<LoginButton>GitHub 계정으로 로그인</LoginButton>
				</a>
			</Contents>
		</LoginPageLayout>
	);
};

const LoginPageLayout = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	height: 100vh;
`;

const Contents = styled.div`
	display: flex;
	flex-direction: column;
`;

export default LoginPage;
