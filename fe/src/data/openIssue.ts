import { IssueType } from "utils/interface";

export const openedIssue: IssueType[] = [
  {
    id: 3,
    title: "test open title1",
    content: "test open content1",
    status: true,
    created_at: "2021-06-08 15:00:00",
    label_list: [
      { id: 10, title: "BE", content: null, color: "0052CC" },
      { id: 12, title: "Feature", content: null, color: "FFFFFF" },
    ],
    author: {
      name: "bibi",
      user_id: "bibi6666667",
    },
    assignee: {
      name: "bibi",
      user_id: "bibi6666667",
    },
    milestone: {
      milestone_id: 1,
      title: "[BE] API구현",
    },
  },
  {
    id: 4,
    title: "test open title2",
    content: "test open content2",
    status: true,
    created_at: "2021-06-08 15:00:00",
    label_list: [
      { id: 10, title: "BE", content: null, color: "0052CC" },
      { id: 12, title: "Feature", content: null, color: "FFFFFF" },
    ],
    author: {
      name: "bibi",
      user_id: "bibi6666667",
    },
    assignee: {
      name: "bibi",
      user_id: "bibi6666667",
    },
    milestone: {
      milestone_id: 1,
      title: "[BE] API구현",
    },
  },
];
