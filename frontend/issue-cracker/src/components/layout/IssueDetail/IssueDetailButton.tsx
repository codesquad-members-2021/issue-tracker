import React from 'react';
import styled from 'styled-components';
import TextGroup from '../../common/group/TextGroup';
import ButtonGroup from '../../common/group/ButtonGroup';
import CloseIcon from '@material-ui/icons/Close';

const IssueDetailButton = (): JSX.Element => {
  return (
    <IssueDetailButtonStyle>
      <ButtonGroup type="smallFill" name="완료" />
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
