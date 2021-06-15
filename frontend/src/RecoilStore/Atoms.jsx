import { atom } from "recoil";

export const selectedIssueCntAtomState = atom({
	key: "selectedIssueCntAtomState",
	default: 0,
});

export const clickedFilterAtomState = atom({
	key: "clickedFilterAtomState",
	default: null,
});
