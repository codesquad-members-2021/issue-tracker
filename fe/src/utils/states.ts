import { atom } from "recoil";
import { IssueType, ListItemsType } from "utils/interface";

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

export const refFileterState = atom({
  key: "selectState",
  default: {
    assignee: "",
    author: "",
    milestone: "",
    label: "",
  },
});

export const selectedIssuesState = atom({
  key: "selectedIssuesState",
  default: new Set(),
});

export const openedIssues = atom({
  key: "openedIssues",
  default: [] as IssueType[],
});

export const closedIssues = atom({
  key: "closedIssues",
  default: [] as IssueType[],
});

export const temporalRefState = atom({
  key: "temporalRefState",
  default: {
    assignees: [] as ListItemsType[],
    milestones: [] as ListItemsType[],
    labels: [] as ListItemsType[],
  },
});

export const currDetailState = atom({
  key: "currDetailState",
  default: -1,
});
