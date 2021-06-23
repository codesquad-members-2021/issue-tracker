import React from 'react';
import { Issue as S } from '../../../styles/CommonStyles';
import TextGroup from '../../../common/group/TextGroup';
import styled from 'styled-components';
import { TYPE as T } from '../../../../utils/const';

const LabelTableHeader = (): JSX.Element => {
  return (
    <S.IssueTableHeader>
      <TextBox>
        <TextGroup type={T.SMALL} content={'3개의 레이블'} color="#6E7191" />
      </TextBox>
    </S.IssueTableHeader>
  );
};

export default LabelTableHeader;

const TextBox = styled.div`
  margin-left: 25px;
`;
