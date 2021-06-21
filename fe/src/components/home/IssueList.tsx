import React from "react";
// import { IssueRefMenuProps, IssueRefStateType, IssueType } from "utils/interface";
// import { selectionState } from "utils/states";
import IssueAppBarContainer from "./issueAppBar/IssueAppBar.container";
import { mock_openedIssue } from "data/openIssue";
import { mock_closedIssue } from "data/closeIssue";
import { useRecoilState } from "recoil";
import { openedIssues, closedIssues } from "utils/states";
import { useEffect } from "react";

function IssueList() {
  // TODO: fetch 요청으로 받고, 캐싱하기
  // 캐싱 후에는 캐시한 곳에서 가져오기
  // const openIssue = mock_openedIssue;
  // const closeIssue = mock_closedIssue;
  const [openIssues, setOpenIssues] = useRecoilState(openedIssues);
  const [closeIssues, setCloseIssues] = useRecoilState(closedIssues);

  useEffect(() => {
    setOpenIssues([...mock_openedIssue]);
    setCloseIssues([...mock_closedIssue]);
  }, []);

  return (
    <div>
      <IssueAppBarContainer />
    </div>
  );
}

export default IssueList;
