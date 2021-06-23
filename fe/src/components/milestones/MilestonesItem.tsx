import { useState } from 'react';
import styled from 'styled-components';
import { MilestonesItemProps } from 'types/issueType';
import MilestonesItemLeft from './MilestonesItemLeft';
import MilestonesItemRight from './MilestonesItemRight';
import { MouseEvent } from 'react';
import MilestoneEdit from './MilestoneEdit';

const MilestonesItem = ({
  id,
  title,
  description,
  dueDate,
  openedIssueCount,
  closedIssueCount,
}: MilestonesItemProps) => {
  const [popup, setPopup] = useState(false);

  const editClickHandler = (e: MouseEvent) => {
    setPopup(!popup);
  };

  return (
    <>
      <StyledMilestonesItem>
        <MilestonesItemLeft {...{ title, description, dueDate }} />
        <MilestonesItemRight
          {...{ editClickHandler, openedIssueCount, closedIssueCount }}
        />
      </StyledMilestonesItem>
      {popup && <MilestoneEdit />}
    </>
  );
};

export default MilestonesItem;

const StyledMilestonesItem = styled.div`
  box-sizing: border-box;
  ${({ theme }) => theme.style.flexSpaceBetween}
  padding: 1rem 1.5rem;
  border-top: 1px solid ${({ theme }) => theme.color.grayscale.line};
`;
