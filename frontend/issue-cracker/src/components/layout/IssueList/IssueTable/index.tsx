import React from 'react';
import styled from 'styled-components';
import IssueTableHeader from './IssueTableHeader';
import IssueCell from './IssueCell';

const IssueTable = (): JSX.Element => {
  return (
    <IssueTableContainer>
      <IssueTableHeader />
      <IssueCell />
    </IssueTableContainer>
  );
};

export default IssueTable;

const IssueTableContainer = styled.div``;
