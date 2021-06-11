import styled from 'styled-components';

import AssigneeFilter from './AssigneeFilter';
import LabelFilter from './LabelFilter';
import MilestoneFilter from './MilestoneFilter';
import AuthorFilter from './AuthorFilter';

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
          <AssigneeFilter />
          <LabelFilter />
          <MilestoneFilter />
          <AuthorFilter />
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

const FilterLists = styled.div`
  display: flex;
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
