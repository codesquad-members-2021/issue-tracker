import styled from 'styled-components';
import Header from '@components/common/Header';
import Actions from '@components/labels/Actions';
import NewMilestone from '@components/milestones/NewMilestone';
import MilestoneTable from '@components/milestones/table/MilestoneTable';

function Milestones() {
  return (
    <MilestonesPageContainer>
      <Header />
      <Actions page="milestones" />
      <NewMilestone />
      <MilestoneTable />
    </MilestonesPageContainer>
  );
}

export default Milestones;

const MilestonesPageContainer = styled.div`
  ${({ theme }) => theme.page}
`;
