// import { useContext, useState, useCallback, useEffect } from "react";
// import { globalStateRoot } from "App";

// export const atom = ({ key, initialState }) => {
// 	return { key, initialState };
// };

// export const useRecoilState = atom => {
// 	const { key } = atom;
// 	const store = useContext(globalStateRoot).current;
// 	const [, setReRender] = useState({});
// 	store.setInitState(atom);

// 	const forceUpdate = useCallback(() => {
// 		console.log("forced Update");
// 		setReRender({});
// 	}, []);

// 	useEffect(() => {
// 		store.subscribe({ key, fn: forceUpdate });
// 	}, []);

// 	return [store.getState(key), store.setState(key)];
// };
// export const useRecoilValue = atom => {
// 	const { key } = atom;
// 	const store = useContext(globalStateRoot).current;
// 	const [, setReRender] = useState({});
// 	store.setInitState(atom);

// 	const forceUpdate = useCallback(() => {
// 		console.log("forced Update");
// 		setReRender({});
// 	}, []);

// 	useEffect(() => {
// 		store.subscribe({ key, fn: forceUpdate });
// 	}, []);

// 	return store.getState(key);
// };

// export const useSetRecoilState = atom => {
// 	const { key } = atom;
// 	const store = useContext(globalStateRoot).current;
// 	const [, setReRender] = useState({});
// 	store.setInitState(atom);

// 	const forceUpdate = useCallback(() => {
// 		console.log("forced Update");
// 		setReRender({});
// 	}, []);

// 	useEffect(() => {
// 		store.subscribe({ key, fn: forceUpdate });
// 	}, []);

// 	return store.setState(key);
// };

// export const store = {
// 	observers: {},
// 	state: {},
// 	subscribe({ key, fn }) {
// 		this.observers[key] = this.observers[key] || [];
// 		this.observers[key].push(fn);
// 	},

// 	setInitState({ key, initialState }) {
// 		if (this.state[key]) return;
// 		this.state[key] = initialState;
// 	},

// 	getState(key) {
// 		return this.state[key];
// 	},

// 	setState(key) {
// 		return fn => {
// 			this.state[key] = fn(this.state[key]);
// 			this.observers[key].forEach(callback => callback());
// 		};
// 	},
// };

// export default store;
