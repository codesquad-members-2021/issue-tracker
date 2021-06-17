import styled from 'styled-components';
import { Button } from '@material-ui/core';
import { ReactComponent as EditSvg } from 'icons/edit.svg';
import { ReactComponent as DeleteSvg } from 'icons/delete.svg';
import { ReactComponent as CloseIssue } from 'icons/closeIssue.svg';
import { MilestoneBarProps } from 'types/issueType';
import MilestoneBar from './MilestoneBar';

const MilestonesItemRight = ({
  openedIssueCount,
  closedIssueCount,
}: MilestoneBarProps) => {
  const percent =
    (openedIssueCount / (openedIssueCount + closedIssueCount)) * 100;
  return (
    <StyledDiv>
      <StyledButtons>
      <Button startIcon={<CloseIcon />}>닫기</Button>
      <Button startIcon={<EditIcon />}>편집</Button>
      <Button color="secondary" startIcon={<DeleteIcon />}>
        삭제
      </Button>
      </StyledButtons>
      <MilestoneBar {...{ openedIssueCount, closedIssueCount }} />
      <MilestonesItemSubtitle>
        <span>{percent}%</span>
        <span>
          열린 이슈 {openedIssueCount} 닫힌이슈 {closedIssueCount}
        </span>
      </MilestonesItemSubtitle>
    </StyledDiv>
  );
};

export default MilestonesItemRight;
const StyledButtons = styled.div`
  display: flex;
  justify-content: flex-end;
`;
const StyledDiv = styled.div`
  ${({ theme }) => theme.style.flexColum}
  width: 20rem;
`;

const MilestonesItemSubtitle = styled.div`
  color: ${({ theme }) => theme.color.grayscale.label};
  ${({ theme }) => theme.style.flexSpaceBetween}
  font-size:${({ theme }) => theme.fontSize.S};
  margin-top: 0.7rem;
`;

const CloseIcon= styled(CloseIssue)``;


const EditIcon = styled(EditSvg)``;


const DeleteIcon = styled(DeleteSvg)``;
