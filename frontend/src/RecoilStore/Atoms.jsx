import { atom, selector } from "recoil";

export const selectedIssueCntAtomState = atom({
	key: "selectedIssueCntAtomState",
	default: 0,
});

export const clickedFilterAtomState = atom({
	key: "clickedFilterAtomState",
	default: null,
});

export const assigneeFilterAtomState = atom({
	key: "assigneeFilterAtomState",
	default: null,
});

export const labelFilterAtomState = atom({
	key: "labelFilterAtomState",
	default: null,
});

export const milestoneFilterAtomState = atom({
	key: "milestoneFilterAtomState",
	default: null,
});

export const authorFilterAtomState = atom({
	key: "authorFilterAtomState",
	default: null,
});

export const issueFilterAtomState = atom({
	key: "issueFilterAtomState",
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

// export const filterBarInputAtomState = selector({
// 	key: "filterBarInputAtomState",
// 	get: ({ get }) => {
// 		const placeholder = "is:issue is:open";
// 		const assignee = get(assigneeFilterAtomState);
// 		const label = get(labelFilterAtomState);
// 		const milestone = get(milestoneFilterAtomState);
// 		const author = get(authorFilterAtomState);
// 		const issue = get(issueFilterAtomState);
// 		const filters = [placeholder, assignee, label, milestone, author, issue];
// 		console.log("assignee", assignee);
// 		console.log(filters);
// 		return filters.reduce((acc, item) => {
// 			if (item) acc += item;
// 			return acc;
// 		}, "");
// 	},
// 	set: ({ set }, filterType) => {
// 		switch (filterType) {
// 			case "담당자": {
// 				set(assigneeFilterAtomState, clickedFilterAtomState);
// 				break;
// 			}
// 			case "레이블": {
// 				set(labelFilterAtomState, clickedFilterAtomState);
// 				break;
// 			}
// 			case "마일스톤": {
// 				set(milestoneFilterAtomState, clickedFilterAtomState);
// 				break;
// 			}
// 			case "작성자": {
// 				set(authorFilterAtomState, clickedFilterAtomState);
// 				break;
// 			}
// 			case "필터": {
// 				set(issueFilterAtomState, clickedFilterAtomState);
// 				break;
// 			}
// 			default:
// 				throw new Error("Unhandled  Type");
// 		}
// 	},
// });
