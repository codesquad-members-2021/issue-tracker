import styled from 'styled-components';

import TableHeader from '../tableHeader/TableHeader';
import IssueList from './IssueList';

function IssueTable() {
  // 이 부분은 이제 쿼리에 따라서 렌더링이 되어야한다.

  // useEffect(() => {
  //   pushState(queryStr);
  // }, [queryStr]);

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
