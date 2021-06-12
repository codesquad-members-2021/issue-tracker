import React from 'react';
import { Issue as S } from '../../styles/CommonStyles';
import CheckBoxes from '../../common/CheckBoxes';
import OpenIconGroup from '../../common/OpenIconGroup';
import ClosedIconGroup from '../../common/ClosedIconGroup';
import { CLOSED_ISSUE, OPEN_ISSUE } from '../../../utils/const';
import TextGroup from '../../common/TextGroup';

import IssueHeaderButton from '../../common/IssueHeaderButton';

const IssueTableHeader = (): JSX.Element => {
  return (
    <S.IssueTableHeader>
      <S.IssueTableHeaderLeft>
        <CheckBoxes />

        <IssueHeaderButton
          icon={<OpenIconGroup type={'default'} />}
          text={<TextGroup type="small" content={OPEN_ISSUE} />}
        />
        <IssueHeaderButton
          icon={<ClosedIconGroup type={'default'} />}
          text={<TextGroup type="small" content={CLOSED_ISSUE} />}
        />
      </S.IssueTableHeaderLeft>
      <S.IssueTableHeaderRight></S.IssueTableHeaderRight>
    </S.IssueTableHeader>
  );
};

export default IssueTableHeader;
