import { IssueType } from "utils/interface";

export const mock_closedIssue: IssueType[] = [
  {
    id: 1,
    title: "test close title1",
    content: "test close content1",
    status: false,
    created_at: "2021-06-08 15:00:00",
    label_list: [
      { id: 10, title: "BE", color: "#f59342" },
      { id: 12, title: "Feature", color: "#1ed469" },
    ],
    author: {
      name: "bibi",
      user_id: "bibi6666667",
    },
    assignees: [
      {
        name: "bibi",
        user_id: "bibi6666667",
      },
    ],
    milestone: {
      milestone_id: 1,
      title: "[BE] API구현",
    },
  },
  {
    id: 2,
    title: "test close title2",
    content: "test close content2",
    status: false,
    created_at: "2021-06-08 15:00:00",
    label_list: [
      { id: 10, title: "BE", color: "#f59342" },
      { id: 12, title: "Feature", color: "#1ed469" },
    ],
    author: {
      name: "bibi",
      user_id: "bibi6666667",
    },
    assignees: [
      {
        name: "bibi",
        user_id: "bibi6666667",
      },
    ],
    milestone: {
      milestone_id: 1,
      title: "[BE] API구현",
    },
  },
];
