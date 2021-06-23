import { useRecoilValue } from 'recoil';
import { useEffect, useState } from 'react';
import { queryString } from '@store/atoms/issueList';
import { issueAPI } from '@const/var';

export const useFetch = (url: string, options: any) => {
  const [response, setResponse] = useState([]);
  const [error, setError] = useState(null);
  const query = useRecoilValue(queryString);
  const newUrl = `${url}?${query}`;

  const token = localStorage.getItem('oauth_login_token');
  const requestHeader = {
    Authorization: `bearer ${token}`,
    'Content-Type': 'application/json',
  };
  const optionWithHeaders = {
    ...options,
    headers: { ...requestHeader },
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(newUrl, optionWithHeaders);
        const json = await res.json();
        setResponse(json);
      } catch (error) {
        setError(error);
      }
    };
    fetchData();
  }, [query]);
  console.log(response);
  return { response, error };
};
