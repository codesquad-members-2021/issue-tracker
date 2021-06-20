const fetchData = async (url, method, reqData) => {
	const option =
		method === "GET"
			? {
					headers: {
						"Content-Type": "application/json",
						Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
					},
			  }
			: {
					method: method,
					headers: {
						"Content-Type": "application/json",
						Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
					},
					body: JSON.stringify(reqData),
			  };

	console.log("fetchData func initiated");
	try {
		const res = await fetch(url, option);
		const resData = await res.json();
		if (!res.ok) throw new Error(res.status);
		else {
			console.log("in useFetch:", resData);
			return resData;
		}
	} catch (error) {
		console.error("error occured");
	}
};

export default fetchData;
