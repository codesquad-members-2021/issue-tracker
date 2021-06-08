import { Link } from "react-router-dom";
const LoginPage = () => {
	return (
		<>
			<div>로그인페이지</div>

			<button>
				<a href="https://github.com/login/oauth/authorize?client_id=c39689919134be7915cf&redirect_uri=http://localhost:3000/login">
					GitHub 계정으로 로그인
				</a>
			</button>
		</>
	);
};

export default LoginPage;
