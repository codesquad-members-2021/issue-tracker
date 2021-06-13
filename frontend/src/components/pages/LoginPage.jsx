import styled from "styled-components";
import { Link } from "react-router-dom";
import { StyledLoginButton } from "styles/StyledButtons";
import API from "util/API";
import { ReactComponent as Logo } from "images/LogotypeLarge.svg";
import { useStateValue } from "MyRecoil/useStateValue";

const LoginPage = () => {
	const [store] = useStateValue();
	const filters = store.getData().map((item, i) => <div key={i}>{item}</div>);
	const addFilterHandler = () => {
		store.addFilter.call(store, "author");
	};

	return (
		<LoginPageLayout>
			<Contents>
				<Logo onClick={addFilterHandler} />
				<a href={API.gitHubOAuth()}>
					<StyledLoginButton>GitHub 계정으로 로그인</StyledLoginButton>
				</a>
				{filters}
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
