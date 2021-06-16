import React from 'react';
import TextArea from '../../../../common/TextArea';
import styled from 'styled-components';
import IssueDetailButton from '../../IssueDetailButton';

const IssueDetailInputContent = (): JSX.Element => {
  return (
    <IssueDetailInputContentStyle>
      <TextArea />
      <IssueDetailButton />
    </IssueDetailInputContentStyle>
  );
};

export default IssueDetailInputContent;

const IssueDetailInputContentStyle = styled.div`
  padding-left: 50px;
`;
