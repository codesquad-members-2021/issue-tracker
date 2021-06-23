import React from 'react';
import styled from 'styled-components';
import IssueAddInput from './IssueAddInput';
import IssueAddSidebar from './IssueAddSidebar';

const IssueAddBox = (): JSX.Element => {
  return (
    <IssueAddBoxStyle>
      <IssueAddInput />
      <IssueAddSidebar />
    </IssueAddBoxStyle>
  );
};

export default IssueAddBox;

const IssueAddBoxStyle = styled.div`
  display: flex;
`;
