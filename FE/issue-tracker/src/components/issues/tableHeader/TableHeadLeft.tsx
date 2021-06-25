import { useCallback } from 'react';
import { useRecoilState, useRecoilValueLoadable } from 'recoil';
import styled from 'styled-components';

import { issueCounts, querySet } from '@store/atoms/issueList';

function TableHeadLeft() {
  const [query, setQuery] = useRecoilState(querySet);
  const { state, contents } = useRecoilValueLoadable(issueCounts);
  const { closed } = query;

  const handleClickTab = useCallback(
    (e: React.MouseEvent): void => {
      const target = e.target as HTMLLIElement;
      const targetState = target.dataset.state;
      if (targetState === 'open') setQuery({ ...query, closed: 'false' });
      if (targetState === 'close') setQuery({ ...query, closed: 'true' });
    },
    [query, setQuery]
  );

  return (
    <HeaderLeft>
      <input type="checkbox" name="" id="" />
      <IssueTab>
        <IssueOpenTab
          closed={closed}
          data-state="open"
          onClick={handleClickTab}
        >
          {state === 'loading' && `열린 이슈 (0)`}
          {state === 'hasValue' && `열린 이슈 (${contents.openIssueCount})`}
          {state === 'hasError' && `열린 이슈 (??)`}
        </IssueOpenTab>
        <IssueCloseTab
          closed={closed}
          data-state="close"
          onClick={handleClickTab}
        >
          {state === 'loading' && `닫힌 이슈 (0)`}
          {state === 'hasValue' && `닫힌 이슈 (${contents.closeIssueCount})`}
          {state === 'hasError' && `닫힌 이슈 (??)`}
        </IssueCloseTab>
      </IssueTab>
    </HeaderLeft>
  );
}

export default TableHeadLeft;

type issueTab = {
  closed: string | null | undefined;
};

const HeaderLeft = styled.div`
  display: flex;
  align-items: center;
  width: 848px;

  input[type='checkbox'] {
    width: 16px;
    height: 16px;
  }
`;

const IssueTab = styled.ul`
  display: flex;
`;

const IssueTabList = styled.li<issueTab>`
  ${({ theme }) => theme.flexCenter}
  margin-left: 24px;
  width: 120px;
  height: 28px;
  cursor: pointer;
  font-weight: ${({ theme }) => theme.fontWeights.bold};
`;

const IssueOpenTab = styled(IssueTabList)`
  color: ${({ theme, closed }) =>
    closed === 'true' ? theme.colors.gr_label : theme.colors.gr_titleActive};
`;

const IssueCloseTab = styled(IssueTabList)`
  color: ${({ theme, closed }) =>
    closed === 'true' ? theme.colors.gr_titleActive : theme.colors.gr_label};
`;
