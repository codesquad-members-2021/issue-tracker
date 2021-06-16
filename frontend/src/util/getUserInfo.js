const getUserInfo = () => {
	const token = localStorage.getItem("accessToken");
	console.log(token.split(".")[1]);
	const parsedToken = atob(token.split(".")[1]);
	const { nickName, imageUrl, gitHubId, iss, id, exp } = JSON.parse(
		parsedToken
	);
	console.log(nickName, imageUrl, gitHubId, iss, id, exp);
	return { nickName, imageUrl, gitHubId, iss, id, exp };
};

export default getUserInfo;
