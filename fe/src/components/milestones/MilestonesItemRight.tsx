import styled from 'styled-components';
import { Button } from '@material-ui/core';
import { ReactComponent as EditSvg } from 'icons/edit.svg';
import { ReactComponent as DeleteSvg } from 'icons/delete.svg';
import { ReactComponent as CloseIssue } from 'icons/closeIssue.svg';
import MilestoneBar from './MilestoneBar';
import { MilestoneBarType } from 'types/issueType';
import { MouseEvent, useEffect, useState } from 'react';
import { useSetRecoilState } from 'recoil';
import useAxios from 'hook/useAxios';
import { milestoneUpdateAtom } from 'stores/milestoneStore';
const MilestonesItemRight = ({
  id,
  editClickHandler,
  openedIssueCount,
  closedIssueCount,
}: MilestoneBarType & {
  id: number;
  editClickHandler: (e: MouseEvent) => void;
}) => {
  const percent =
    (closedIssueCount / (openedIssueCount + closedIssueCount)) * 100;

  const setMilestoneUpdate = useSetRecoilState(milestoneUpdateAtom);
  const [toggle, setToggle] = useState(false);
  const { isSuccess } = useAxios(toggle, `/api/milestones/${id}`, 'DELETE');
  const deleteClickHandler = (e: MouseEvent) => {
    setToggle(true);
  };
  useEffect(() => {
    if (isSuccess) setMilestoneUpdate((cur) => ++cur);
    setToggle(false);
  }, [isSuccess, setMilestoneUpdate]);

  return (
    <StyledDiv>
      <StyledButtons>
        <Button startIcon={<CloseIcon />}>닫기</Button>
        <Button onClick={editClickHandler} startIcon={<EditIcon />}>
          편집
        </Button>
        <Button
          onClick={deleteClickHandler}
          color="secondary"
          startIcon={<DeleteIcon />}
        >
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
  ${({ theme }) => theme.style.flexColumn}
  width: 20rem;
`;

const MilestonesItemSubtitle = styled.div`
  color: ${({ theme }) => theme.color.grayscale.label};
  ${({ theme }) => theme.style.flexSpaceBetween}
  font-size:${({ theme }) => theme.fontSize.S};
  margin-top: 0.7rem;
`;

const CloseIcon = styled(CloseIssue)``;

const EditIcon = styled(EditSvg)``;

const DeleteIcon = styled(DeleteSvg)``;
