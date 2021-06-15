import { atom } from "recoil";

export const issueAtomState = atom({
	key: "issueAtomState",
	default: "열린 이슈",
});

export const assigneeAtomState = atom({
	key: "assigneeAtomState",
	default: [],
});

export const labelAtomState = atom({
	key: "labelAtomState",
	default: [],
});

export const milestoneAtomState = atom({
	key: "milestoneAtomState",
	default: [],
});

export const authorAtomState = atom({
	key: "authorAtomState",
	default: [],
});

export const selectedIssueCntAtomState = atom({
	key: "selectedIssueCntAtomState",
	initialState: 0,
});

export const clickedFilterAtomState = atom({
	key: "clickedFilterAtomState",
	initialState: null,
});
