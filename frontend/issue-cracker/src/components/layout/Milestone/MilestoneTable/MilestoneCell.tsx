import React from 'react';
import { Issue as S } from '../../../styles/CommonStyles';
import styled from 'styled-components';
import TextGroup from '../../../common/group/TextGroup';
import FlagTwoToneIcon from '@material-ui/icons/FlagTwoTone';
import { TYPE as T } from '../../../../utils/const';
import IssueHeaderButton from '../../../common/IssueHeaderButton';
import CalendarTodayTwoToneIcon from '@material-ui/icons/CalendarTodayTwoTone';
import ClosedIconGroup from '../../../common/group/ClosedIconGroup';
import EditIcon from '@material-ui/icons/Edit';
import DeleteOutlineIcon from '@material-ui/icons/DeleteOutline';
import ProgressBar from '../../../common/ProgressBar';

const MilestoneCell = (): JSX.Element => {
  return (
    <MilestoneCellStyle>
      <LeftBox>
        <LeftUpper>
          <IssueHeaderButton
            icon={
              <FlagTwoToneIcon
                style={{ width: '16px', height: '16px', color: '#007AFF' }}
              />
            }
            text={
              <TextGroup
                type={T.MEDIUM}
                content={'마일스톤 제목'}
                color="#222"
              />
            }
          />

          <IssueHeaderButton
            icon={
              <CalendarTodayTwoToneIcon
                style={{ fontSize: 'small', color: '#6E7191' }}
              />
            }
            text={
              <TextGroup
                type={T.SMALL}
                content={'완료일 일정'}
                color="#6E7191"
              />
            }
          />
        </LeftUpper>
        <LeftLower>
          <TextGroup type={T.SMALL} content={'레이블 설명'} color="#6E7191" />
        </LeftLower>
      </LeftBox>
      <RightBox>
        <RightUpper>
          <IssueHeaderButton
            icon={<ClosedIconGroup type={'disabled'} />}
            text={<TextGroup type={T.SMALL} content={'닫기'} color="#6E7191" />}
          />
          <IssueHeaderButton
            icon={<EditIcon style={{ color: '#6E7191', fontSize: 16 }} />}
            text={<TextGroup type={T.SMALL} content={'편집'} color="#6E7191" />}
          />
          <IssueHeaderButton
            icon={
              <DeleteOutlineIcon style={{ color: '#FF3B30', fontSize: 16 }} />
            }
            text={<TextGroup type={T.SMALL} content={'삭제'} color="#FF3B30" />}
          />
        </RightUpper>
        <RightCenter>
          <ProgressBar />
        </RightCenter>
        <RightLower>
          <TextGroup type={T.SMALL} content={'70%'} color="#6E7191" />
          <IssueButtonBox>
            <TextGroup type={T.SMALL} content={'열린이슈(0)'} color="#6E7191" />
            &nbsp;
            <TextGroup type={T.SMALL} content={'닫힌이슈(0)'} color="#6E7191" />
          </IssueButtonBox>
        </RightLower>
      </RightBox>
    </MilestoneCellStyle>
  );
};

export default MilestoneCell;

const MilestoneCellStyle = styled(S.IssueCell)`
  align-items: center;
  padding: 0px 25px;
`;

const LeftBox = styled.div`
  display: flex;
  flex-direction: column;
`;

const LeftUpper = styled.div`
  display: flex;
  padding: 3px 0px;
`;
const LeftLower = styled.div`
  padding: 3px 10px;
`;

const RightBox = styled.div`
  display: flex;
  flex-direction: column;
`;

const RightUpper = styled.div`
  display: flex;
  justify-content: flex-end;
`;

const RightCenter = styled.div`
  padding: 5px 0px;
  min-width: 245px;
`;

const RightLower = styled.div`
  display: flex;
  justify-content: space-between;
`;

const IssueButtonBox = styled.div`
  display: flex;
`;
