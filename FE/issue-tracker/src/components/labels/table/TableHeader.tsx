import styled from 'styled-components';

function TableHeader() {
  return <TableHeaderWrap>3개의 레이블</TableHeaderWrap>;
}

export default TableHeader;

const TableHeaderWrap = styled.div`
  ${({ theme }) => theme.tableHeader};
`;
