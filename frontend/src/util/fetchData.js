const fetchData = async (url, method, reqData) => {
	const option =
		(method === "GET") | "DELETE"
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

	try {
		console.log("reqData:", reqData);
		const res = await fetch(url, option);
		const resData = await res.json();
		if (!res.ok) throw new Error(res.status);
		else {
			return await resData;
		}
	} catch (error) {
		console.error("error occurred");
	}
};

export default fetchData;
