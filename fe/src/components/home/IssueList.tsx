import React from "react";
import { IssueType } from "utils/interface";
import IssueAppBarContainer from "./issueAppBar/IssueAppBar.container";

function IssueList() {
  const openedIssue: IssueType[] = [
    {
      id: 1,
      title: "test open title1",
      content: "test open content1",
      status: true,
      created_at: "2021-06-08 15:00:00",
      label_list: ["BE", "Feature"],
      author: {
        name: "bibi",
        user_id: "bibi6666667",
      },
      milestone: {
        milestone_id: 1,
        title: "[BE] API구현",
      },
    },
    {
      id: 2,
      title: "test open title2",
      content: "test open content2",
      status: true,
      created_at: "2021-06-08 15:00:00",
      label_list: ["BE", "Feature"],
      author: {
        name: "bibi",
        user_id: "bibi6666667",
      },
      milestone: {
        milestone_id: 1,
        title: "[BE] API구현",
      },
    },
  ];
  const closedIssue: IssueType[] = [
    {
      id: 1,
      title: "test close title1",
      content: "test close content1",
      status: false,
      created_at: "2021-06-08 15:00:00",
      label_list: ["BE", "Feature"],
      author: {
        name: "bibi",
        user_id: "bibi6666667",
      },
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
      label_list: ["BE", "Feature"],
      author: {
        name: "bibi",
        user_id: "bibi6666667",
      },
      milestone: {
        milestone_id: 1,
        title: "[BE] API구현",
      },
    },
  ];

  return (
    <div>
      <IssueAppBarContainer {...{ openedIssue, closedIssue }} />
    </div>
  );
}

export default IssueList;
