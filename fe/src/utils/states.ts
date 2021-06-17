import { atom } from "recoil";

export const openState = atom({
  key: "openState",
  default: true,
});

export const closeState = atom({
  key: "closeState",
  default: false,
});

export const selectCheckBoxAppBar = atom({
  key: "selectCheckBoxAppBar",
  default: false,
});

export const selectIssueAll = atom({
  key: "selectIssueAll",
  default: false,
});

export const selectionState = atom({
  key: "selectState",
  default: {
    assignee: "",
    author: "",
    milestone: "",
    label: "",
  },
});
