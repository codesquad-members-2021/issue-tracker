import React from 'react';
import styled from 'styled-components';
import IssueListHeaderLeft from './IssueListHeaderLeft';
import IssueListHeaderRight from './IssueListHeaderRight';

function IssueListHeader() {
  return (
    <IssueListHeaderBlock>
      <IssueListHeaderLeft />
      <IssueListHeaderRight />
    </IssueListHeaderBlock>
  );
}
const IssueListHeaderBlock = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 10px;
  background-color: ${({ theme }) => theme.color.bgGrey};
  border: ${({ theme }) => theme.color.bgGrey};
  border-radius: 16px 16px 0 0;
`;

export default IssueListHeader;
