import React, { ReactElement } from 'react';
import { useRecoilValue } from 'recoil';
import styled from 'styled-components';
import { issuesStorage } from '../../hooks/store';
import IssueItem from './IssueItem';
import { IssuesType } from './issueType';

export default function IssueTable(): ReactElement {
  const openIssues: IssuesType[] = useRecoilValue(issuesStorage);

  const issueList = openIssues.map((issue, idx) => <IssueItem key={issue.id} issue={issue} />);

  return (
    <IssueTableBlock>
      {/* <IssueListHead /> */}
      {issueList}
    </IssueTableBlock>
  );
}

const IssueTableBlock = styled.div`
  min-width: 680px;
  border-radius: 16px;
  border: 1px solid ${({ theme }) => theme.color.lineGrey};
`;
