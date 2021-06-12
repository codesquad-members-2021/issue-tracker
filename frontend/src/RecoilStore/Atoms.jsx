import { atom } from "recoil";

export const issueFilterState = atom({
	key: "issueFilter",
	default: "열린 이슈",
});

export const assigneeFilterState = atom({
	key: "assigneeFilter",
	default: null,
});

export const labelFilterState = atom({
	key: "labelFilter",
	default: null,
});

export const milestoneFilterState = atom({
	key: "milestoneFilter",
	default: null,
});

export const authorFilterState = atom({
	key: "authorFilter",
	default: null,
});
