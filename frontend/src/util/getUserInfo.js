const getUserInfo = () => {
	const token = localStorage.getItem("accessToken");
	const parsedToken = atob(token.split(".")[1]);
	const { nickName, imageUrl, gitHubId, iss, id, exp } =
		JSON.parse(parsedToken);
	return { nickName, imageUrl, gitHubId, iss, id, exp };
};

export default getUserInfo;
