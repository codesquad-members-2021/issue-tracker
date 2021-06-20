import { useState, useEffect } from 'react';

// namespace가 뭔지 찾아보기.
namespace IFetchParams {
  export type url = string;
  export type options = IFetchOption;
}

type HTTP_METHODS = 'GET' | 'POST' | 'PATCH' | 'PUT' | 'DELETE' | 'OPTIONS';

interface IFetchOption {
  method: HTTP_METHODS;
  headers?: {
    'Content-Type': 'application/json' | 'application/x-www-form-urlencoded';
  };
  body?: object;
}

interface IFetchState {
  endpoint: string;
  query: IFetchQuery[] | null;
  isLoading: boolean;
  isError: boolean;
  errorMessage: string;
}

interface IFetchQuery {
  [key: string]: string;
}

const createFetchOptions = ({ method, headers, body }: IFetchOption) => {
  const arrMethod: string[] = ['GET', 'POST', 'PATCH', 'PUT', 'DELETE', 'OPTIONS'];
  const isMethod: boolean = arrMethod.findIndex((v) => method === v) > -1;
  return {
    method: isMethod ? method : 'GET',
    headers: headers || { 'Content-Type': 'application/json' },
    body: JSON.stringify(body),
  };
};

const queryMaker = (url: URL) =>
  url.search
    .substring(1)
    .split('&')
    .map((query) => {
      const [key, value] = query.split('=');
      return { [key]: value };
    });

function useFetch<T>(url: IFetchParams.url, options?: IFetchParams.options) {
  const urlObjects = new URL(url);
  const initialFetchState: IFetchState = {
    endpoint: urlObjects.host,
    query: null,
    isLoading: true,
    isError: false,
    errorMessage: '',
  };

  if (urlObjects.search) initialFetchState.query = queryMaker(urlObjects);

  const [fetchState, setFetchState] = useState<IFetchState>(initialFetchState);
  const [result, setResult] = useState<T | undefined>();

  const fetchData = async () => {
    try {
      const res = await fetch(url, options as RequestInit);
      const data = await res.json();
      setResult(data);
      setFetchState({ ...fetchState, isLoading: false });
    } catch (e) {
      setFetchState({ ...fetchState, isLoading: false, isError: true, errorMessage: e.message });
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return { result, fetchState };
}

export { createFetchOptions };
export default useFetch;
