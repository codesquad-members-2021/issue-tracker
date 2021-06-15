import { atom } from "recoil";

export const openState = atom({
  key: "openState",
  default: true,
});

export const closeState = atom({
  key: "closeState",
  default: false,
});

export const selectIssueAll = atom({
  key: "selectIssueAll",
  default: false,
});
