import {
  atom,
  atomFamily,
  selector,
  selectorFamily,
  SerializableParam,
} from 'recoil';
import { issueAPI, urlErrorMsg, issueListErrorMsg, hostAPI } from '@const/var';

const handleError = (status: number, errorText: string) => {
  if (status >= 400) throw errorText;
};

const wholeIssueLists = selectorFamily({
  key: 'wholeIssueLists',
  get: (isClosed) => async () => {
    try {
      const res = await fetch(`${issueAPI}?closed=${String(isClosed)}`);
      handleError(res.status, issueListErrorMsg);
      const issues = await res.json();
      return issues;
    } catch (error) {
      if (typeof error === 'object') throw urlErrorMsg;
      throw error;
    }
  },
});

const issueCounts = selector({
  key: 'issueCounts',
  get: async () => {
    try {
      const res = await fetch(`${issueAPI}/count`);
      handleError(res.status, res.statusText);
      const { opened_issue_count, closed_issue_count } = await res.json();
      return {
        openIssueCount: opened_issue_count,
        closeIssueCount: closed_issue_count,
      };
    } catch (error) {
      throw error;
    }
  },
});

type Param = {
  query: SerializableParam;
};

const filterList = selectorFamily({
  key: 'filterList',
  get: (query: Param) => async () => {
    try {
      const res = await fetch(`${hostAPI}/${query}`);
      handleError(res.status, '불러오기에 실패했습니다.');
      const data = res.json();
      return data;
    } catch (error) {
      throw error;
    }
  },
});

export { wholeIssueLists, issueCounts, filterList };
