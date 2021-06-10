import { useEffect, useState } from "react";
import { Redirect } from "react-router-dom";
import API from "./../util/API";

const LoginLoadingPage = () => {
	const [isLogin, setIsLogin] = useState(false);
	const getToken = async () => {
		const params = new URLSearchParams(window.location.search);
		const code = params.get("code");
		console.log(code);
		const res = await fetch(API.login(code));
		const json = await res.json();
		const { accessToken, tokenType } = json;
		localStorage.setItem("accessToken", accessToken);
		localStorage.setItem("tokeType", tokenType);
		setIsLogin(true);
	};
	useEffect(() => {
		getToken();
	}, []);
	return <>${isLogin ? <Redirect to="/main"></Redirect> : <div>로딩</div>}</>;
};

export default LoginLoadingPage;
