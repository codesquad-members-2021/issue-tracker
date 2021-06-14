const store = {
	observers: {},
	state: {},
	subscribe({ key, fn }) {
		this.observers[key] = this.observers[key] || [];
		this.observers[key].push(fn);
	},

	setInitState({ key, initialState }) {
		if (this.state[key]) return;
		this.state[key] = initialState;
	},

	getState(key) {
		return this.state[key];
	},

	setState(key) {
		return fn => {
			this.state[key] = fn(this.state[key]);
			this.observers[key].forEach(callback => callback());
		};
	},
};

export default store;
