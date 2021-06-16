import { atom, atomFamily, selector, selectorFamily } from 'recoil';
import { issueAPI } from '@const/var';

const wholeIssueLists = selectorFamily({
  key: 'wholeIssueLists',
  get: (isClosed) => async () => {
    const res = await fetch(`${issueAPI}?closed=${String(isClosed)}`);
    const issues = await res.json();
    return issues;
  },
});

const issueCounts = selector({
  key: 'issueCounts',
  get: async () => {
    const res = await fetch(`${issueAPI}/count`);
    const { opened_issue_count, closed_issue_count } = await res.json();
    return {
      openIssueCount: opened_issue_count,
      closeIssueCount: closed_issue_count,
    };
  },
});

export { wholeIssueLists, issueCounts };
