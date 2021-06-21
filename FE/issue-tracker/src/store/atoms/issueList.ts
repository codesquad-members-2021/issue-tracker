import { fetchWithAuth, handleError } from '@utils/fetchWithAuth';
import { atom, selector, selectorFamily, SerializableParam } from 'recoil';

import { issueAPI, urlErrorMsg, issueListErrorMsg, hostAPI } from '@const/var';

import pipe from '@utils/pipe';
import { getQueryStringified, getQueryWhichHasValue } from '@utils/query';

const filterTextContent = atom({
  key: 'filterTextContent',
  default: `is:open`,
});

const querySet = atom<QuerySet>({
  key: 'querySet',
  default: {
    closed: 'false',
    author: null,
    assignee: null,
    label: null,
    milestone: null,
  },
});

const queryString = selector({
  key: 'queryString',
  get: ({ get }) => {
    const queryStringified = pipe(
      get,
      getQueryWhichHasValue,
      getQueryStringified
    )(querySet);
    return queryStringified;
  },
});

const wholeIssueLists = selector({
  key: 'wholeIssueLists',
  get: async ({ get }) => {
    try {
      const query = get(queryString);
      const url = `${issueAPI}?${query}`;
      const res = await fetchWithAuth(url, issueListErrorMsg);
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
      const url = `${issueAPI}/count`;
      const res = await fetchWithAuth(url, '개수를 가져오는데 실패', {});
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

export {
  wholeIssueLists,
  issueCounts,
  filterList,
  querySet,
  queryString,
  filterTextContent,
};

export type QuerySet = {
  closed?: string | null | undefined;
  author?: string | null;
  assignee?: string | null;
  label?: number | null;
  milestone?: number | null;
};

export type QueryReduce = {
  [key: string]: string | number;
};

type Param = {
  query: SerializableParam;
};
