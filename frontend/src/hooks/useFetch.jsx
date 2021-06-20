import { useState, useEffect } from "react";

const useFetch = (url, method, reqData = null) => {
	const [data, setData] = useState();
	const [status, setStatus] = useState("대기 중");
	console.log("useFetch initiated");

	const fetchContent =
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

	const fetchData = async () => {
		console.log("fetchData func initiated");
		try {
			setStatus(`fetch start from ${url}`);
			const res = await fetch(url, fetchContent);
			if (!res.ok) throw new Error(res.status);
			else {
				const resData = await res.json();
				console.log("in useFetch:", resData);
				setData(resData);
				setStatus(`fetch complete from ${url}`);
				return { resData, status };
			}
		} catch (error) {
			setStatus(`fetch failed from ${url} due to ${error}`);
		}
	};

	useEffect(() => {
		fetchData();
	}, []);

	// fetchData();
	return { status, fetchData, data };
};

export default useFetch;
