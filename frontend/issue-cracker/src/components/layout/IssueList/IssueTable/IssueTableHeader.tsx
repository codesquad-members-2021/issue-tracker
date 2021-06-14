import React from 'react';
import { Issue as S } from '../../../styles/CommonStyles';
import CheckBoxes from '../../../common/CheckBoxes';
import OpenIconGroup from '../../../common/group/OpenIconGroup';
import ClosedIconGroup from '../../../common/group/ClosedIconGroup';
import {
  ASSIGNEE,
  CLOSED_ISSUE,
  LABEL,
  MILESTONE,
  OPEN_ISSUE,
  WRITER,
} from '../../../../utils/const';
import TextGroup from '../../../common/group/TextGroup';
import CountGroup from '../../../common/group/CountGroup';

import IssueHeaderButton from '../../../common/IssueHeaderButton';
import FilterMenu from '../../../common/FilterMenu';

const IssueTableHeader = (): JSX.Element => {
  return (
    <S.IssueTableHeader>
      <S.IssueTableHeaderLeft>
        <CheckBoxes />

        <IssueHeaderButton
          icon={<OpenIconGroup type={'default'} />}
          text={<TextGroup type="small" content={OPEN_ISSUE} color="#222" />}
          count={<CountGroup count={0} color="#222" />}
        />
        <IssueHeaderButton
          icon={<ClosedIconGroup type={'disabled'} />}
          text={
            <TextGroup type="small" content={CLOSED_ISSUE} color="#6E7191" />
          }
          count={<CountGroup count={0} color="#6E7191" />}
        />
      </S.IssueTableHeaderLeft>
      <S.IssueTableHeaderRight>
        {/* <TextGroup type="small" content={ASSIGNEE} color="#6E7191" />
        <TextGroup type="small" content={LABEL} color="#6E7191" />
        <TextGroup type="small" content={MILESTONE} color="#6E7191" />
        <TextGroup type="small" content={WRITER} color="#6E7191" /> */}
        <FilterMenu />
        <FilterMenu />
        <FilterMenu />
        <FilterMenu />
      </S.IssueTableHeaderRight>
    </S.IssueTableHeader>
  );
};

export default IssueTableHeader;
