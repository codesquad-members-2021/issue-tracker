import React from 'react'
import styled from 'styled-components';
import IconButton from '@components/common/IconButton';
import ProgressBar from '@components/common/ProgressBar';
import { ReactComponent as MilestoneIcon } from '@/Icons/Milestone.svg';
import { ReactComponent as CalendarIcon } from '@/Icons/Calendar.svg';

const MilestoneItem = () => {
  return (
    <ItemWrapper>
      <LeftContentWrapper>
        <TitleWrapper>
          <MilestoneBlueIcon />
          <TitleSpan>제목</TitleSpan>
          <CalendarIcon />
          <MilestoneTermSpan>완료일정</MilestoneTermSpan>
        </TitleWrapper>
        <DescWrapper>
          레이블설명
        </DescWrapper>
      </LeftContentWrapper>
      <RightContentWrapper>
        <ButtonsWrapper>
          <IconButton icon="closeBox">
            닫기
          </IconButton>
          <IconButton icon="edit">
            편집
          </IconButton>
          <IconButton icon="trash">
            삭제
          </IconButton>
        </ButtonsWrapper>
        <ProgressBar variant="determinate" value={50} />
        <ProgressInfoWrapper>
          <span>50%</span>
          <span>
            <span>열린 이슈 0</span>
            &nbsp;
            <span>닫힌 이슈 1</span>
          </span>
        </ProgressInfoWrapper>
      </RightContentWrapper>
    </ItemWrapper>
  )
}

const ItemWrapper = styled.div`
  display:flex;
  justify-content: space-between;
`;

const LeftContentWrapper = styled.div``;
const RightContentWrapper = styled.div``;

const TitleWrapper = styled.div`
  margin-bottom: 12px;
`;

const DescWrapper = styled.div`
  color: #6E7191;
`;

const TitleSpan = styled.span`
  margin-right: 10px;
  font-size :18px;
  font-weight: 700;
`;

const MilestoneTermSpan = styled.span`
  margin-left: 10px;
  color:#6E7191;
`;

const MilestoneBlueIcon = styled(MilestoneIcon)`
  margin-right: 8px;
  path {
    stroke:#007AFF;
  }
`;

const ButtonsWrapper = styled.div`
  margin-bottom: 12px;
  font-size: 12px;
`;

const ProgressInfoWrapper = styled.div`
  display:flex;
  margin-top:8px;
  justify-content: space-between;
  font-size: 12px;
  color:#6E7191;
`;

export default MilestoneItem;
