import { atom, selector, selectorFamily, SerializableParam } from 'recoil';

import { issueAPI, urlErrorMsg, issueListErrorMsg, hostAPI } from '@const/var';

import pipe from '@utils/pipe';
import { getQueryStringified, getQueryWhichHasValue } from '@utils/query';

const querySet = atom<QuerySet>({
  key: 'querySet',
  default: {
    closed: 'false',
    author: null,
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

const handleError = (status: number, errorText: string) => {
  if (status >= 400 && status < 500) throw errorText;
};

const wholeIssueLists = selector({
  key: 'wholeIssueLists',
  get: async ({ get }) => {
    try {
      const query = get(queryString);
      const url = `${issueAPI}?closed=${query}`;
      const res = await fetch(url);
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

export { wholeIssueLists, issueCounts, filterList, querySet, queryString };

export type QuerySet = {
  closed?: string;
  author?: string | null;
  label?: number | null;
  milestone?: number | null;
};

export type QueryReduce = {
  [key: string]: string | number;
};

type Param = {
  query: SerializableParam;
};
