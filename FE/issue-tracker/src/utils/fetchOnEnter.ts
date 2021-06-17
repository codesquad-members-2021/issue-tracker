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
  const shouldNotFetch = (Date.now() - cachingTime) / 1000 < 3600;
  if (shouldNotFetch) return;

  const res = await fetch(`${hostAPI}/${query}`);
  const fetchedData = await res.json();
  setState({
    query: query,
    data: fetchedData,
    cachingTime: Date.now(),
  });
};
