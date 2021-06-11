import React from 'react';
import { Issue as S } from '../../styles/CommonStyles';
import CheckBoxes from '../../common/CheckBoxes';
import styled from 'styled-components';

const IssueCell = (): JSX.Element => {
  return (
    <S.IssueCellStyle>
      <div>
        <CheckBoxes />
      </div>
      <IssueContent></IssueContent>
      <div></div>
    </S.IssueCellStyle>
  );
};

export default IssueCell;
const IssueContent = styled.div``;
