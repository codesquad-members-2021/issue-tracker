import { useState, useEffect } from "react";

const useFetchGet = (url) => {
	const [data, setData] = useState();
	const [status, setStatus] = useState("대기 중");

	useEffect(() => {
		if (!url) return;

		const fetchData = async () => {
			try {
				setStatus(`fetch start from ${url}`);
				const res = await fetch(url);
				if (!res.ok) throw new Error(res.status);
				else {
					const resData = await res.json();
					setData(resData);
					setStatus(`fetch complete from ${url}`);
				}
			} catch (error) {
				setStatus(`fetch failed from ${url} due to ${error}`);
			}
		};

		fetchData();
	}, [url]);

	return { status, data };
};

export default useFetchGet;
