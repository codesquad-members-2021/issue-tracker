import { useState, useEffect } from "react";

const useFetch = (url, method, callback, reqData = null) => {
	"";
	const [status, setStatus] = useState("대기 중");

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

	useEffect(() => {
		if (!url) return;

		const fetchData = async () => {
			try {
				setStatus(`fetch start from ${url}`);
				const res = await fetch(url, fetchContent);
				if (!res.ok) throw new Error(res.status);
				else {
					const resData = await res.json();
					callback(resData);
					setStatus(`fetch complete from ${url}`);
				}
			} catch (error) {
				setStatus(`fetch failed from ${url} due to ${error}`);
			}
		};

		fetchData();
	}, [url]);
	return status;
};

export default useFetch;
