import styled from 'styled-components';

import TableHeader from '../tableHeader/TableHeader';
import IssueList from './IssueList';

function IssueTable() {
  return (
    <IssueTableWrap>
      <TableHeader />
      <IssueList />
    </IssueTableWrap>
  );
}

export default IssueTable;

const IssueTableWrap = styled.section`
  display: flex;
  flex-direction: column;
  width: 100%;
`;
