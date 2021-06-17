import React from 'react';
import styled from 'styled-components';
import IssueDetailInput from './IssueDetailInput';
import IssueDetailSidebar from './IssueDetailSidebar';

const IssueDetailBox = (): JSX.Element => {
  return (
    <IssueDetailBoxStyle>
      <IssueDetailInput />
      <IssueDetailSidebar />
    </IssueDetailBoxStyle>
  );
};

export default IssueDetailBox;

const IssueDetailBoxStyle = styled.div`
  display: flex;
`;
