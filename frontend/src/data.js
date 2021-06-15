export const issues = [
	{
		title: "issue-list 만들기",
		id: 1,
		labelId: 2,
		milestoneId: 4,
		author: "goody",
		createdAt: "2021-06-10T23:50:14",
		isOpen: true,
	},
	{
		title: "mainPage에 menu 만들기",
		id: 2,
		labelId: 2,
		milestoneId: 4,
		author: "daisy",
		createdAt: "2021-06-14T15:00:00",
		isOpen: false,
	},
];

export const filter = {
	issue: [
		"열린 이슈",
		"내가 작성한 이슈",
		"나에게 할당한 이슈",
		"나에게 할당된 이슈",
		"내가 댓글을 남긴 이슈",
		"닫힌 이슈",
	],
	assignee: ["daisy", "goody"],
	label: ["bug", "document"],
	milestone: ["마일스톤이 없는 필터", "마스터즈 코스"],
	author: ["daisy", "goody"],
};
