import styled from 'styled-components';

function TableHeader() {
  return (
    <TableHeaderWrap>
      <HeaderLeft>
        <input type="checkbox" name="" id="" />
        <IssueTab>
          <li>열린 이슈(2)</li>
          <li>닫힌 이슈(2)</li>
        </IssueTab>
      </HeaderLeft>
      <HeaderRight>
        <FilterLists>
          <li>담당자</li>
          <li>레이블</li>
          <li>마일스톤</li>
          <li>작성자</li>
        </FilterLists>
      </HeaderRight>
    </TableHeaderWrap>
  );
}

export default TableHeader;

const TableHeaderWrap = styled.div`
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
`;

const HeaderLeft = styled.div`
  display: flex;
  align-items: center;
  width: 848px;

  input[type='checkbox'] {
    width: 16px;
    height: 16px;
  }
`;

const HeaderRight = styled.div`
  display: flex;
`;

const FilterLists = styled.ul`
  display: flex;

  li {
    display: flex;
    align-items: center;
    margin-left: 24px;
    width: 65px;
    height: 32px;
  }
`;

const IssueTab = styled.ul`
  display: flex;

  li {
    ${({ theme }) => theme.flexCenter}
    margin-left: 24px;
    width: 100px;
    height: 28px;
  }
`;
