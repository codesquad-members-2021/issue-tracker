import React from 'react';
import styled from 'styled-components';
import TextGroup from '../../common/group/TextGroup';
import ButtonGroup from '../../common/group/ButtonGroup';
import CloseIcon from '@material-ui/icons/Close';

const IssueAddButton = (): JSX.Element => {
  return (
    <IssueAddButtonStyle>
      <CancelButton>
        <WriteCancelButton />
        <TextGroup type="xSmall" content="작성 취소" color="#6E7191" />
      </CancelButton>
      <ButtonGroup type="medium" name="완료" color="#fff" />
    </IssueAddButtonStyle>
  );
};

export default IssueAddButton;

const IssueAddButtonStyle = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
`;

const CancelButton = styled.button`
  display: flex;
  align-items: center;
  background: none;
  padding: 10px 20px;
  margin: 10px;
`;

const WriteCancelButton = styled(CloseIcon)`
  color: #6e7191;
  font-size: 12px;
  margin: 3px;
`;
