import React from 'react';
import styled from 'styled-components';
import ButtonGroup from '../../common/group/ButtonGroup';
import { BUTTON_SIZE as BS } from '../../../utils/const';
const IssueDetailButton = (): JSX.Element => {
  return (
    <IssueDetailButtonStyle>
      <ButtonGroup type={BS.SMALL_FILL} name="코멘트 작성" />
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
