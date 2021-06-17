import React from "react";
import { IssueRefMenuProps, IssueRefStateType, IssueType } from "utils/interface";
import { selectionState } from "utils/states";
import IssueAppBarContainer from "./issueAppBar/IssueAppBar.container";
import { openedIssue } from "data/openIssue";
import { closedIssue } from "data/closeIssue";

function IssueList() {
  // TODO: fetch 요청으로 받고, 캐싱하기
  // 캐싱 후에는 캐시한 곳에서 가져오기

  return (
    <div>
      <IssueAppBarContainer {...{ openedIssue, closedIssue }} />
    </div>
  );
}

export default IssueList;
