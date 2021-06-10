import styled from 'styled-components';

import TableHeader from './TableHeader';
import Issue from './Issue';

function IssueTable() {
  return (
    <IssueTableWrap>
      <TableHeader />
      <Issue />
    </IssueTableWrap>
  );
}

export default IssueTable;

const IssueTableWrap = styled.section`
  display: flex;
  flex-direction: column;
  width: 100%;
`;
