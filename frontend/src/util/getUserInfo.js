const getUserInfo = () => {
	const token = localStorage.getItem("accessToken");
	const parsedToken = atob(token.split(".")[1]);
	const { imageUrl, gitHubId, iss, id, exp } = JSON.parse(parsedToken);
	return { imageUrl, gitHubId, iss, id, exp };
};

export default getUserInfo;
