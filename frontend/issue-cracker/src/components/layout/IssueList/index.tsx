import React from 'react';
import styled from 'styled-components';
import IssueNav from '../IssueList/IssueNav';
import IssueTable from '../IssueList/IssueTable';

const IssueList = (): JSX.Element => {
  return (
    <IssueListDiv>
      <IssueNav />
      <IssueTable />
    </IssueListDiv>
  );
};

export default IssueList;

const IssueListDiv = styled.div``;
