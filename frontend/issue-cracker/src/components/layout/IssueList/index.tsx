import React, { FC } from 'react';
import styled from 'styled-components';
import IssueNav from '../IssueList/IssueNav';
const IssueList: FC = () => {
  return (
    <IssueListDiv>
      <IssueNav />
    </IssueListDiv>
  );
};

export default IssueList;

const IssueListDiv = styled.div``;
