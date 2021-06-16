import { atom } from "recoil";

export const createButtonFlagState = atom({
  key: "createButtonFlagState",
  default: true,
});

export const newIssueState = atom({
  key: "newIssueState",
  default: { title: "", comment: "" },
});
