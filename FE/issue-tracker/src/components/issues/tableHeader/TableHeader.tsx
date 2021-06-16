import styled from 'styled-components';
import { useRecoilValueLoadable } from 'recoil';

import { issueCounts } from '@store/atoms/issueList';

import AssigneeFilter from './AssigneeFilter';
import LabelFilter from './LabelFilter';
import MilestoneFilter from './MilestoneFilter';
import AuthorFilter from './AuthorFilter';

function TableHeader({ isClosed, handleClickTab }: Props) {
  const { state, contents } = useRecoilValueLoadable(issueCounts);

  return (
    <TableHeaderWrap>
      <HeaderLeft>
        <input type="checkbox" name="" id="" />
        <IssueTab>
          <IssueOpenTab
            isClosed={isClosed}
            data-state="open"
            onClick={handleClickTab}
          >
            {state === 'loading' && `열린 이슈 (0)`}
            {state === 'hasValue' && `열린 이슈 (${contents.openIssueCount})`}
          </IssueOpenTab>
          <IssueCloseTab
            isClosed={isClosed}
            data-state="close"
            onClick={handleClickTab}
          >
            {state === 'loading' && `닫힌 이슈 (0)`}
            {state === 'hasValue' && `닫힌 이슈 (${contents.closeIssueCount})`}
          </IssueCloseTab>
        </IssueTab>
      </HeaderLeft>
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

type Props = {
  handleClickTab: (e: React.MouseEvent) => void;
  isClosed: boolean;
};

type issueTab = {
  isClosed: boolean;
};

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
`;

const IssueTabList = styled.li<issueTab>`
  ${({ theme }) => theme.flexCenter}
  margin-left: 24px;
  width: 100px;
  height: 28px;
  cursor: pointer;
  font-weight: ${({ theme }) => theme.fontWeights.bold};
`;

const IssueOpenTab = styled(IssueTabList)`
  color: ${({ theme, isClosed }) =>
    isClosed ? theme.colors.gr_label : theme.colors.gr_titleActive};
`;

const IssueCloseTab = styled(IssueTabList)`
  color: ${({ theme, isClosed }) =>
    isClosed ? theme.colors.gr_titleActive : theme.colors.gr_label};
`;
