import React, { ReactElement } from 'react';
import { useRecoilValue } from 'recoil';
import styled from 'styled-components';
import { getIssues } from '../../store/issueStore';
import IssueItem from './IssueItem';

export default function IssueTable(): ReactElement {
  const issues = useRecoilValue(getIssues);

  const issueList = issues?.map((issue) => <IssueItem key={issue.id} issue={issue} />);

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
