import { IssueType } from "utils/interface";

export const mock_openedIssue: IssueType[] = [
  {
    id: 3,
    title: "test open title1",
    content: "test open content1",
    status: true,
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
    id: 4,
    title: "test open title2",
    content: "test open content2",
    status: true,
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
