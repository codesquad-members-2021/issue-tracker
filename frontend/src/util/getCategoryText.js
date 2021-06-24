const getCategoryText = category => {
	switch (category) {
		case "assignee":
			return "담당자";
		case "label":
			return "라벨";
		case "milestone":
			return "마일스톤";
		default:
			return "undefined category";
	}
};

export default getCategoryText;
