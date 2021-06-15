import styled from 'styled-components';
import TableHeader from '@components/milestones/table/TableHeader';
import MilestoneCell from '@components/milestones/table/MilestoneCell';
import EditMilestone from '@components/milestones/table/EditMilestone';

function MilestoneTable() {
  return (
    <MilestoneTableWrap>
      <TableHeader />
      <MilestoneCell isLastItemStyle={false} />
      <EditMilestone />
      <MilestoneCell isLastItemStyle={true} />
    </MilestoneTableWrap>
  );
}

export default MilestoneTable;

const MilestoneTableWrap = styled.section`
  display: flex;
  flex-direction: column;
  width: 100%;
`;
