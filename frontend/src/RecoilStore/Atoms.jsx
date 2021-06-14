import { atom } from "recoil";

export const issueAtomState = atom({
	key: "issueFilter",
	default: "열린 이슈",
});

export const assigneeAtomState = atom({
	key: "assigneeFilter",
	default: [],
});

export const labelAtomState = atom({
	key: "labelFilter",
	default: [],
});

export const milestoneAtomState = atom({
	key: "milestoneFilter",
	default: [],
});

export const authorAtomState = atom({
	key: "authorFilter",
	default: [],
});
