import styled from 'styled-components';
import { MilestonesItemLeftProps } from 'types/issueType';
import { ReactComponent as MilestoneSvg } from 'icons/milestoneBlue.svg';
import { ReactComponent as CalendarSvg } from 'icons/calendar.svg';
const MilestonesItemLeft = ({
  title,
  description,
  dueDate,
}: MilestonesItemLeftProps) => {
  return (
    <StyledMilestonesItemLeft>
      <div>
        <MilestonesIcon />
        <MilestonesItemTitle>{title}</MilestonesItemTitle>
        <DueDate>
          <DueDateIcon />
          {dueDate}
        </DueDate>
      </div>
      <MilestionesDescription>{description}</MilestionesDescription>
    </StyledMilestonesItemLeft>
  );
};

export default MilestonesItemLeft;

const StyledMilestonesItemLeft = styled.div`
  ${({ theme }) => theme.style.flexColumn}
`;

const MilestionesDescription = styled.span`
  color: ${({ theme }) => theme.color.grayscale.label};
  margin-top: 0.5rem;
  font-size: 0.8rem;
`;

const MilestonesItemTitle = styled.span`
  margin: 0 0.5rem;
  font-weight: ${({ theme }) => theme.fontWeight.bold};
`;
const MilestonesIcon = styled(MilestoneSvg)``;

const DueDateIcon = styled(CalendarSvg)``;
const DueDate = styled.span`
  color: ${({ theme }) => theme.color.grayscale.label};
`;
