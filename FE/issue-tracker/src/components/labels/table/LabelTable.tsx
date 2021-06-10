import styled from 'styled-components';
import TableHeader from '@components/labels/table/TableHeader';
import LabelCell from '@components/labels/table/LabelCell';
import EditLabel from '@components/labels/table/EditLabel';

function LabelTable() {
  return (
    <LabelTableWrap>
      <TableHeader />
      <LabelCell last={false} />
      <EditLabel />
      <LabelCell last={true} />
    </LabelTableWrap>
  );
}

export default LabelTable;

const LabelTableWrap = styled.section`
  display: flex;
  flex-direction: column;
  width: 100%;
`;
