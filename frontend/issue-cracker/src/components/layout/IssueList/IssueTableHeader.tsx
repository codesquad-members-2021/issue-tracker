import React from 'react';
import { Issue as S } from '../../styles/CommonStyles';
import CheckBoxes from '../../common/CheckBoxes';
import OpenIconGroup from '../../common/OpenIconGroup';

const IssueTableHeader = (): JSX.Element => {
  return (
    <S.IssueTableHeader>
      <CheckBoxes />
      <OpenIconGroup type={'large'} />
      <OpenIconGroup type={'small'} />
      <OpenIconGroup type={'disabled'} />
      <OpenIconGroup type={'active'} />
    </S.IssueTableHeader>
  );
};

export default IssueTableHeader;
