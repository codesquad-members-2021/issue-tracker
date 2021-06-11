import styled from 'styled-components';
import TableHeader from '@components/milestones/table/TableHeader';
import MilestoneCell from '@components/milestones/table/MilestoneCell';
import EditMilestone from '@components/milestones/table/EditMilestone';

function MilestoneTable() {
  return (
    <MilestoneTableWrap>
      <TableHeader />
      <MilestoneCell last={false} />
      <EditMilestone />
      <MilestoneCell last={true} />
    </MilestoneTableWrap>
  );
}

export default MilestoneTable;

const MilestoneTableWrap = styled.section`
  display: flex;
  flex-direction: column;
  width: 100%;
`;
