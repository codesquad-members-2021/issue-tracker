import { QuerySet, QueryReduce, formerDataKey } from '@store/atoms/issueList';
import { useSetRecoilState } from 'recoil';

const getQueryWhichHasValue = (queryObj: QuerySet) => {
  return Object.entries(queryObj)
    .filter(([_, value]) => value !== null)
    .reduce((query: QueryReduce, cur: any) => {
      const [queryKey, queryValue] = cur;
      query[queryKey] = queryValue;
      return query;
    }, {});
};

const getQueryStringified = (queryObj: QuerySet) => {
  return Object.entries(queryObj)
    .map((keyValue) => keyValue.join('='))
    .join('&');
};

const pushState = (query: string) => {
  const currentQuery = window.location.search;
  if (`?${query}` === currentQuery) return;

  window.history.pushState({ query }, query, `?${query}`);
};

const useReRender = (query: string) => {
  const setReRenderKeyUpdate = useSetRecoilState(formerDataKey);
  const currentQuery = window.location.search;
  if (`?${query}` === currentQuery) return;

  window.history.pushState({ query }, query, `?${query}`);
  setReRenderKeyUpdate((num) => num + 1);
  return null;
};

export { getQueryWhichHasValue, getQueryStringified, pushState, useReRender };
