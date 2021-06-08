import { useEffect } from "react";
const LoginLoadingPage = () => {
	const getToken = async () => {
		const params = new URLSearchParams(window.location.search);
		console.log(params);
		const code = params.get("code");
		console.log(code);
		// const token = await API.post.code(code);
		// localStorage.setItem("token", token);
	};
	useEffect(() => {
		getToken();
	}, []);
	return <div>로딩</div>;
};

export default LoginLoadingPage;
