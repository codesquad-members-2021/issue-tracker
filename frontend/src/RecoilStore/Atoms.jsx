import { atom } from "recoil";

export const selectedIssueCntAtomState = atom({
	key: "selectedIssueCntAtomState",
	default: 0,
});

export const clickedFilterAtomState = atom({
	key: "clickedFilterAtomState",
	default: null,
});

export const filterBarInputAtomState = atom({
	key: "filterBarInputAtomState",
	default: {
		placeholder: "is:issue is:open",
		assignee: null, // asignee 필터 모달 에서 마지막으로 클릭한 값이 저장
		label: null, // label 필터모달 에서 마지막으로 클릭한 값이 저장
		milestone: null, // "마일스톤": null
		author: null,
		issue: null,
	},
});
