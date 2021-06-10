import React, { ReactElement } from 'react';
import styled from 'styled-components';

interface Props {}

export default function IssueListHeaderLeft({}: Props): ReactElement {
  const { openedIssue, closedIssue } = useRecoilValue(CountInfoStorage);
  const setIssues = useSetRecoilState(issuesStorage);
  const asyncOpenIssues = useRecoilValue(getOpenIssues); //요청해서받은 오픈이슈
  const asyncCloseIssues = useRecoilValue(getCloseIssues); //요청해서받은 오픈이슈
  const openIssueList = asyncOpenIssues?.issues;
  const closeIssueList = asyncCloseIssues?.issues;
  const handleOpen = () => setIssues(openIssueList);
  const handleClose = () => setIssues(closeIssueList);
  return (
    <IssueListHeaderLeftBlock>
      <CheckBox />
      <FilterTabBlock>
        <div onClick={handleOpen}>
          <AdjustRoundedIcon /> 열린 이슈 ({openedIssue})
        </div>
        <div onClick={handleClose}>
          <CheckRoundedIcon /> 닫힌 이슈 ({closedIssue})
        </div>
      </FilterTabBlock>
    </IssueListHeaderLeftBlock>
  );
}

const IssueListHeaderLeftBlock = styled.div``;
