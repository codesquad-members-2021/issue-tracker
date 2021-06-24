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

export const filterData = {
	issue: [
		"열린 이슈",
		"내가 작성한 이슈",
		"나에게 할당된 이슈",
		"내가 댓글을 남긴 이슈",
		"닫힌 이슈",
	],
	assignee: ["daisy", "goody"],
	label: ["bug", "document"],
	milestone: ["마일스톤이 없는 필터", "마스터즈 코스"],
	author: ["daisy", "goody"],
	openClose: ["선택된 이슈 열기", "선택된 이슈 닫기"],
};

export const labelData = {
	creatorTitle: "새로운 레이블 추가",
	editorTitle: "레이블 편집",
	nameTitle: "레이블 이름",
	descriptionTitle: "설명(선택)",
	backgroundColorTitle: "배경 색상",
	textColorTitles: "텍스트 색상",
	buttons: {
		cancel: "취소",
		submit: "완료",
		radio: [
			{ value: "#FEFEFE", text: "밝은 색" },
			{ value: "#000000", text: "어두운 색" },
		],
	},
};

export const CATEGORY = {
	ASSIGNEE: "assignee",
	LABEL: "label",
	MILESTONE: "milestone",
};
