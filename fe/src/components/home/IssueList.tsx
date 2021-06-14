import React from "react";
// import SimpleTabs from "./IssueFilterMenu";
import IssueAppBar from "./IssueAppBar";
import { IssueType } from "utils/interface";

function IssueList() {
  const openedIssue: IssueType[] = [
    {
      id: 1,
      title: "test title1",
      content: "test content1",
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
      title: "test title2",
      content: "test content2",
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
      title: "test title1",
      content: "test content1",
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
      title: "test title2",
      content: "test content2",
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
      <IssueAppBar {...{ openedIssue, closedIssue }} />
    </div>
  );
}

export default IssueList;
