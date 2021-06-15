import { atom } from "recoil";

export const toggleAddNewLabelState = atom({
  key: "toggleAddNewLabelState",
  default: false,
});

export const toggleEditLabelState = atom({
  key: "toggleEditLabelState",
  default: {
    isOpen: false,
    rowId: 0,
  },
});

export const toggleAddNewMilestoneState = atom({
  key: "toggleAddNewMilestoneState",
  default: false,
});

export const toggleEditMilestoneState = atom({
  key: "toggleEditMilestoneState",
  default: {
    isOpen: false,
    rowId: 0,
  },
});

export const currentTabState = atom({
  key: "currentTabState",
  default: "label",
});

export const addNewLabelTitleState = atom({
  key: "addNewLabelTitleState",
  default: "",
});

export const addNewLabelDescriptionState = atom({
  key: "addNewLabelDescriptionState",
  default: "",
});
