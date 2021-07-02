const API = {
	default() {
		return "http://3.36.131.167/api";
	},
	login(code) {
		return `${this.default()}/login/github/web?code=${code}`;
	},
	gitHubOAuth() {
		return "https://github.com/login/oauth/authorize?client_id=c39689919134be7915cf&redirect_uri=http://localhost:3000/login";
	},
	issues() {
		return `${this.default()}/issues`;
	},
	issue(id) {
		return `${this.default()}/issues/${id}`;
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
	comment() {
		return `${this.default()}/comments`;
	},
	commentId(id) {
		return `${this.default()}/comments/${id}`;
	},
	image() {
		return `${this.default()}/images`;
	},
};
export default API;
