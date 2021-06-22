import React from 'react';
import { Issue as S } from '../../../styles/CommonStyles';
import TextGroup from '../../../common/group/TextGroup';
import styled from 'styled-components';
import { v4 as uuidv4 } from 'uuid';
import IssueHeaderButton from '../../../common/IssueHeaderButton';
import ClosedIconGroup from '../../../common/group/ClosedIconGroup';
import CountGroup from '../../../common/group/CountGroup';
import { TEXT as TT, TYPE as T } from '../../../../utils/const';
import FlagIcon from '@material-ui/icons/Flag';
import FlagTwoToneIcon from '@material-ui/icons/FlagTwoTone';

const MilestoneTableHeader = (): JSX.Element => {
  return (
    <S.IssueTableHeader>
      <MilestoneTableHeaderWrapper>
        <IssueHeaderButton
          icon={<FlagTwoToneIcon />}
          text={
            <TextGroup
              type={T.SMALL}
              content={TT.OPEN_MILESTONE}
              color="#222"
            />
          }
          count={<CountGroup count={0} color="#222" />}
        />
        <IssueHeaderButton
          icon={<ClosedIconGroup type={'disabled'} />}
          text={
            <TextGroup
              type={T.SMALL}
              content={TT.CLOSED_MILESTONE}
              color="#6E7191"
            />
          }
          count={<CountGroup count={0} color="#6E7191" />}
        />
      </MilestoneTableHeaderWrapper>
    </S.IssueTableHeader>
  );
};

export default MilestoneTableHeader;

const MilestoneTableHeaderWrapper = styled.div`
  margin-left: 15px;
  display: flex;
  justify-content: flex-start;
`;
