import { hostAPI } from '@const/var';
import { fetchWithAuth } from './fetchWithAuth';

type FetchOnEnter = {
  query: string;
  data: any[];
  cachingTime: number;
  errorMsg: string | null;
};

export const fetchOnMouseEnter = async (
  targetList: FetchOnEnter,
  setState: any
) => {
  const { query, cachingTime } = targetList;
  const ONE_MINUTE = 60;
  const NOW = Date.now();
  const shouldNotFetch = (NOW - cachingTime) / 1000 < ONE_MINUTE;
  if (shouldNotFetch) return;

  try {
    const url = `${hostAPI}/${query}`;
    const res = await fetchWithAuth(url, 'Fetch Error', {});
    const fetchedData = await res.json();

    setState({
      query: query,
      data: fetchedData,
      cachingTime: NOW,
      errorMsg: null,
    });
  } catch (err) {
    setState({
      ...targetList,
      errorMsg: err,
    });
  }
};
