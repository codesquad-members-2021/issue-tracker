import React from 'react';
import styled from 'styled-components';
import IssueAddInputContent from '../IssueAddInput/IssueAddInputContent';
import IssueAddInputTitle from '../IssueAddInput/IssueAddInputTitle';

const IssueAddInput = (): JSX.Element => {
  return (
    <IssueAddInputStyle>
      <IssueAddInputTitle />
      <IssueAddInputContent />
    </IssueAddInputStyle>
  );
};

export default IssueAddInput;

const IssueAddInputStyle = styled.div`
  display: flex;
  flex-direction: column;
  padding: 10px;
  width: 100%;
`;
