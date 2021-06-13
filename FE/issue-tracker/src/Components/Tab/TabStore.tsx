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

export const currentTabState = atom({
  key: "currentTabState",
  default: "label",
});
