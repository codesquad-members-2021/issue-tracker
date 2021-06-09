import styled from 'styled-components';

import TableHeader from './TableHeader';

function IssueTable() {
  return (
    <IssueTableWrap>
      <TableHeader />
    </IssueTableWrap>
  );
}

export default IssueTable;

const IssueTableWrap = styled.section`
  display: flex;
  flex-direction: column;
  width: 100%;
`;
