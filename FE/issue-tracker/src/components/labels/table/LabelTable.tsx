import styled from 'styled-components';
import TableHeader from '@components/labels/table/TableHeader';
import LabelCell from '@components/labels/table/LabelCell';
import EditLabel from '@components/labels/table/EditLabel';

function LabelTable() {
  return (
    <LabelTableWrap>
      <TableHeader />
      <LabelCell isLastItemStyle={false} />
      <EditLabel />
      <LabelCell isLastItemStyle={true} />
    </LabelTableWrap>
  );
}

export default LabelTable;

const LabelTableWrap = styled.section`
  width: 100%;
  display: flex;
  flex-direction: column;
`;
