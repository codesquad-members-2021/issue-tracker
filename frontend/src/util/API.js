const API = {
	default() {
		return "http://13.125.197.4/api";
	},
	login(code) {
		return `${this.default()}/login/github/web?code=${code}`;
	},
	gitHubOAuth() {
		return "https://github.com/login/oauth/authorize?client_id=c39689919134be7915cf&redirect_uri=http://localhost:3000/login";
	},
	labels() {
		return `${this.default()}/labels`;
	},
	labelsId(id) {
		return `${this.default()}/labels/${id}`;
	},
	milestones() {
		return `${this.default()}/milestones`;
	},
	milestonesId(id) {
		return `${this.default()}/milestones/${id}`;
	},
	users() {
		return `${this.default()}/users`;
	},
};
export default API;
