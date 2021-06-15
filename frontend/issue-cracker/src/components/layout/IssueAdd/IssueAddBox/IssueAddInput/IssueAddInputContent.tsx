import React from 'react';
import TextArea from '../../../../common/TextArea';
import styled from 'styled-components';

const IssueAddInputContent = (): JSX.Element => {
  return (
    <IssueAddInputContentStyle>
      <TextArea />
    </IssueAddInputContentStyle>
  );
};

export default IssueAddInputContent;

const IssueAddInputContentStyle = styled.div`
  margin: 16px 0px;
  padding-left: 50px;
`;
