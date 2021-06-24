const fetchImage = async (url, method, reqData) => {
	const option = {
		method: method,
		headers: {
			Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
		},
		body: reqData,
	};

	try {
		const res = await fetch(url, option);
		const resData = await res.json();
		console.log(resData);
		if (!res.ok) throw new Error(res.status);
		else {
			return await resData;
		}
	} catch (error) {
		console.error("error occurred");
	}
};

export default fetchImage;
