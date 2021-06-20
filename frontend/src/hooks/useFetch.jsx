import { useState, useEffect } from "react";
import fetchData from "util/fetchData";

const useFetch = (url, method, callback, reqData = null) => {
	const [status, setStatus] = useState("대기 중");
	const [error, setError] = useState(null);
	console.log("useFetch initiated");

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

	const fetchData = async () => {
		console.log("fetchData func initiated");
		try {
			setStatus(`fetch start from ${url}`);
			const res = await fetch(url, option);
			const resData = await res.json();
			if (!res.ok) throw new Error(res.status);
			else {
				console.log("in useFetch:", resData);
				callback(resData);
				setStatus(`fetch complete from ${url}`);
				return { resData, status };
			}
		} catch (error) {
			setStatus(`fetch failed from ${url} due to ${error}`);
			setError(error);
		}
	};

	useEffect(() => {
		fetchData();
	}, [url]);

	return { status, fetchData };
};

export default useFetch;
