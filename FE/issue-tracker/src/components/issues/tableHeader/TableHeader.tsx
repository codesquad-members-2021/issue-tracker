import styled from 'styled-components';

import AssigneeFilter from './AssigneeFilter';
import LabelFilter from './LabelFilter';
import MilestoneFilter from './MilestoneFilter';
import AuthorFilter from './AuthorFilter';
import TableHeadLeft from './TableHeadLeft';

function TableHeader() {
  return (
    <TableHeaderWrap>
      <TableHeadLeft />
      <HeaderRight>
        <FilterLists>
          <AuthorFilter />
          <LabelFilter />
          <MilestoneFilter />
          <AssigneeFilter />
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
