import { atom } from "recoil";

export const selectedIssueCntState = atom({
	key: "selectedIssueCntState",
	default: 0,
});

export const clickedFilterState = atom({
	key: "clickedFilterState",
	default: null,
});

export const filterBarInputState = atom({
	key: "filterBarInputState",
	default: {
		placeholder: "is:issue is:open",
		assignee: null,
		label: null,
		milestone: null,
		author: null,
		issue: null,
	},
});

export const labelButtonFlagState = atom({
	key: "labelButtonFlagState",
	default: true,
});

export const milestoneButtonFlagState = atom({
	key: "milestoneButtonFlag",
	default: false,
});

export const milestoneAddButtonFlagState = atom({
	key: "milestoneAddButtonFlagState",
	default: false,
});

export const milestoneUpdateState = atom({
	key: "milestoneAddButtonFlagState",
	default: false,
});

export const labelInitialData = atom({
	key: "labelInitialData",
	default: null,
});
export const labelAddButtonFlagState = atom({
	key: "labelAddButtonFlagState",
	default: false,
});

export const labelEditButtonFlagState = atom({
	key: "labelEditButtonFlagState",
	default: false,
});

export const navigatorAddButtonFlagState = atom({
	key: "navigatorAddButtonFlagState",
	default: false,
});

export const milestoneCountState = atom({
	key: "milestoneCountState",
	default: 0,
});

export const labelCountState = atom({
	key: "labelCountState",
	default: 0,
});
