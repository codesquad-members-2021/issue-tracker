import { hostAPI } from '@const/var';
import { SetterOrUpdater } from 'recoil';

type FetchOnEnter = {
  query: string;
  data: never[];
  cachingTime: number;
};

type State = SetterOrUpdater<FetchOnEnter>;

export const fetchOnMouseEnter = async (
  { query, cachingTime }: FetchOnEnter,
  setState: State
) => {
  const ONE_MINUTE = 60;
  const NOW = Date.now();
  const shouldNotFetch = (NOW - cachingTime) / 1000 < ONE_MINUTE;
  if (shouldNotFetch) return;

  const res = await fetch(`${hostAPI}/${query}`);
  const fetchedData = await res.json();
  setState({
    query: query,
    data: fetchedData,
    cachingTime: NOW,
  });
};
