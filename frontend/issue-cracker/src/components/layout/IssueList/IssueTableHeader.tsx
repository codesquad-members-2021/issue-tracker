import React from 'react';
import styled from 'styled-components';
import { Issue as S } from '../../styles/CommonStyles';
import CheckBoxes from '../../common/CheckBoxes';

const IssueTableHeader = (): JSX.Element => {
  return (
    <S.IssueTableHeader>
      <CheckBoxes />
    </S.IssueTableHeader>
  );
};

export default IssueTableHeader;
