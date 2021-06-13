import { useContext, useState, useEffect } from "react";
import { globalStateRoot } from "./../App";

const useStateValue = () => {
	const store = useContext(globalStateRoot).current;
	const [_, setState] = useState({});

	const forceUpdate = () => {
		console.log("called forceUpdate");
		setState({});
	};

	useEffect(() => {
		store.subscribe(forceUpdate);
	});

	return [store];
};

export { useStateValue };
