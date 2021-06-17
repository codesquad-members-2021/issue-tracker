import styled from 'styled-components';
import { MilestonesItemProps } from 'types/issueType';
import MilestonesItemLeft from './MilestonesItemLeft';
import MilestonesItemRight from './MilestonesItemRight';

const MilestonesItem = ({
  id,
  title,
  description,
  dueDate,
  openedIssueCount,
  closedIssueCount,
}: MilestonesItemProps) => {
  return (
    <StyledMilestonesItem>
      <MilestonesItemLeft {...{ title, description, dueDate }} />
      <MilestonesItemRight {...{ openedIssueCount, closedIssueCount }} />
    </StyledMilestonesItem>
  );
};

export default MilestonesItem;

const StyledMilestonesItem = styled.div`
box-sizing: border-box;
  ${({ theme }) => theme.style.flexSpaceBetween}
  padding: 1rem 1.5rem;
`;
