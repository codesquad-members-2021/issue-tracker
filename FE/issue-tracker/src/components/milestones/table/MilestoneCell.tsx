import styled from 'styled-components';
import { Progress } from '@chakra-ui/react';
import { ReactComponent as MilestoneIcon } from '@assets/milestone.svg';
import { ReactComponent as CalendarIcon } from '@assets/calendar.svg';
import EditMiniButton from '@components/common/EditMiniButton';
import DeleteMiniButton from '@components/common/DeleteMiniButton';
import CloseMiniButton from '@components/common/CloseMiniButton';

interface Props {
  isLastItemStyle: boolean;
}

function MilestoneCell({ isLastItemStyle }: Props) {
  let progressValue = 80;
  return (
    <MilestoneWrap isLastItemStyle={isLastItemStyle}>
      {/* 마일스톤 왼쪽 */}
      <MilestoneLeft>
        <TitleBox>
          <MilestoneTitle>
            <MilestoneIcon className="icon milestone_icon" />
            마일스톤 제목
          </MilestoneTitle>
          <MilestoneDate>
            <CalendarIcon className="icon calendar_icon" />
            완료일 일정
          </MilestoneDate>
        </TitleBox>

        <MilestoneDesc>마일스톤에 대한 설명</MilestoneDesc>
      </MilestoneLeft>

      {/* 마일스톤 오른쪽 */}
      <MilestoneRight>
        <ButtonBox>
          <CloseMiniButton margin="0 25px 0 0">닫기</CloseMiniButton>
          <EditMiniButton margin="0 25px 0 0">편집</EditMiniButton>
          <DeleteMiniButton>삭제</DeleteMiniButton>
        </ButtonBox>
        <Progress
          value={progressValue}
          size="sm"
          hasStripe
          colorScheme="green"
          borderRadius="10px"
        />
        <ProgressInfo>
          <PercentInfo>{progressValue}%</PercentInfo>
          <IssueInfo>
            <NumOfOpenIssue>열린 이슈 {1}</NumOfOpenIssue>
            <NumOfCloseIssue>닫힌 이슈 {2}</NumOfCloseIssue>
          </IssueInfo>
        </ProgressInfo>
      </MilestoneRight>
    </MilestoneWrap>
  );
}

export default MilestoneCell;

interface MilestoneWrapType {
  isLastItemStyle: boolean;
}

const MilestoneWrap = styled.section<MilestoneWrapType>`
  ${({ theme }) => theme.cellWrap};
  .icon {
    margin-right: 5px;
  }
`;

const MilestoneLeft = styled.div``;
const MilestoneRight = styled.div`
  width: 245px;
`;

const TitleBox = styled.div`
  display: flex;
  margin-bottom: 8px;
`;
const MilestoneTitle = styled.div`
  display: flex;
  align-items: center;
  font-size: ${({ theme }) => theme.fontSizes.lg};
  font-weight: ${({ theme }) => theme.fontWeights.bold};
  margin-right: 10px;
  .milestone_icon path {
    fill: ${({ theme }) => theme.colors.bl_initial};
  }
`;
const MilestoneDate = styled.div`
  display: flex;
  align-items: center;
  color: ${({ theme }) => theme.colors.gr_label};
  .calendar_icon path {
    stroke: ${({ theme }) => theme.colors.gr_label};
  }
`;
const MilestoneDesc = styled.div`
  color: ${({ theme }) => theme.colors.gr_label};
`;

const ButtonBox = styled.div`
  width: 100%;
  height: 32px;
  margin-bottom: 5px;
  display: flex;
  justify-content: flex-end;
  align-items: center;
`;

const ProgressInfo = styled.div`
  margin-top: 8px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const PercentInfo = styled.div`
  font-size: ${({ theme }) => theme.fontSizes.xs};
  font-weight: ${({ theme }) => theme.fontWeights.medium};
  color: ${({ theme }) => theme.colors.gr_label};
`;
const IssueInfo = styled.div`
  display: flex;
  font-size: ${({ theme }) => theme.fontSizes.xs};
  font-weight: ${({ theme }) => theme.fontWeights.medium};
  color: ${({ theme }) => theme.colors.gr_label};
`;
const NumOfOpenIssue = styled.div`
  margin-right: 8px;
`;
const NumOfCloseIssue = styled.div``;
