import { useContext, useState, useCallback, useEffect } from "react";
import { globalStateRoot } from "App";

export const useRecoilValue = atom => {
	const { key } = atom;
	const store = useContext(globalStateRoot).current;
	const [, setReRender] = useState({});
	store.setInitState(atom);

	const forceUpdate = useCallback(() => {
		console.log("forced Update");
		setReRender({});
	}, []);

	useEffect(() => {
		store.subscribe({ key, fn: forceUpdate });
	}, []);

	return store.getState(key);
};
