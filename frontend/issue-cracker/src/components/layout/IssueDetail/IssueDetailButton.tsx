import React from 'react';
import styled from 'styled-components';
import ButtonGroup from '../../common/group/ButtonGroup';

const IssueDetailButton = (): JSX.Element => {
  return (
    <IssueDetailButtonStyle>
      <ButtonGroup type="smallFill" name="코멘트 작성" />
    </IssueDetailButtonStyle>
  );
};

export default IssueDetailButton;

const IssueDetailButtonStyle = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  margin-top: 20px;
`;
