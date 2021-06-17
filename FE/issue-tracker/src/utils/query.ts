import type { QuerySet, QueryReduce } from '@store/atoms/issueList';

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

export { getQueryWhichHasValue, getQueryStringified, pushState };
