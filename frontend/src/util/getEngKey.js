const getEngKey = str => {
	switch (str) {
		case "담당자":
			return "assignee";
		case "레이블":
			return "label";
		case "마일스톤":
			return "milestone";
		case "작성자":
			return "author";
		case "필터":
			return "issue";
		default:
			console.error("unhandled English name");
	}
};

export default getEngKey;
