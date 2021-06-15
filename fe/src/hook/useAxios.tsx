import { useState, useEffect, useReducer } from 'react';
import axios, { Method } from 'axios';

type Action =
  | { type: 'FETCH_INIT'; payload: null }
  | { type: 'FETCH_SUCCESS'; payload: any }
  | { type: 'FETCH_FAILURE'; payload: null };

interface FetchOption {
  headers?: OptionData;
  body?: OptionData;
}

interface OptionData {
  [key: string]: string;
}

const createFetchOptions = (headerData?: OptionData, bodyData?: OptionData) => {
  const headers = { 'Content-Type': 'application/json', ...headerData };
  let options: OptionData = { headers: JSON.stringify(headers) };
  if (bodyData) options = { ...options, body: JSON.stringify(bodyData) };
  return options;
};

function useAxios(
  Props: boolean,
  initialUrl: string,
  methods: Method,
  option?: FetchOption
) {
  const [url] = useState(initialUrl);

  const [state, dispatch] = useReducer(requestReducer, {
    isInit: true,
    isLoading: false,
    isSuccess: false,
    isError: false,
    data: null,
  });
  useEffect(() => {
    const fetchData = async () => {
      dispatch({ type: 'FETCH_INIT', payload: null });
      try {
        if (!url) throw new Error(`Error: URL IS NULL`);
        await axios(url).then((result) =>
          dispatch({ type: 'FETCH_SUCCESS', payload: result.data })
        );
      } catch (error) {
        console.error(error)
        dispatch({ type: 'FETCH_FAILURE', payload: null });
      }
    };

    if (!Props) return;
    fetchData();
  }, [url, methods, Props]);

  return { ...state };
}

function requestReducer(
  state: {
    isInit: boolean;
    isLoading: boolean;
    isSuccess: boolean;
    isError: boolean;
    data: null;
  },
  action: Action
) {
  switch (action.type) {
    case 'FETCH_INIT':
      return {
        ...state,
        isInit: false,
        isLoading: true,
        isError: false,
      };
    case 'FETCH_SUCCESS':
      return {
        ...state,
        isInit: false,
        isLoading: false,
        isSuccess: true,
        isError: false,
        data: action.payload,
      };
    case 'FETCH_FAILURE':
      return {
        ...state,
        isInit: false,
        isLoading: false,
        isError: true,
      };
    default:
      throw new Error();
  }
}

export default useAxios;
