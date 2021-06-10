import styled from 'styled-components';

function TableHeader() {
  return <TableHeaderWrap>3개의 레이블</TableHeaderWrap>;
}

export default TableHeader;

const TableHeaderWrap = styled.div`
  /* theme에 추가하기 */
  margin-top: 24px;
  padding: 18px 30px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 64px;
  background: ${({ theme }) => theme.colors.gr_background};
  border: 1px solid ${({ theme }) => theme.colors.gr_line};
  border-radius: 16px 16px 0px 0px;

  color: ${({ theme }) => theme.colors.gr_label};
  font-weight: ${({ theme }) => theme.fontWeights.bold};
`;
