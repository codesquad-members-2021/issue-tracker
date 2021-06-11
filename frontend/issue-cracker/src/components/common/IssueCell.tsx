import React from 'react';
import { Issue as S } from '../styles/CommonStyles';
import CheckBoxes from '../common/CheckBoxes';

const IssueCell = (): JSX.Element => {
  return (
    <S.IssueCell>
      <CheckBoxes />
    </S.IssueCell>
  );
};

export default IssueCell;
