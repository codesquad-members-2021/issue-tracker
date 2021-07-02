import { useState, useEffect, useReducer } from 'react';
import axios, { Method, AxiosRequestConfig } from 'axios';

type Action =
  | { type: 'FETCH_INIT'; payload: null }
  | { type: 'FETCH_SUCCESS'; payload: any }
  | { type: 'FETCH_FAILURE'; payload: null };

interface OptionData {
  [key: string]: any;
}
const token = localStorage.getItem('jwt');
axios.defaults.baseURL = process.env.REACT_APP_API_URL;
if (token) axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;

const createFetchOptions = (Method: Method, bodyData?: OptionData) => {
  let config: AxiosRequestConfig = {
    method: Method,
    headers: { 'Content-Type': 'application/json' },
  };
  if (bodyData) config.data = bodyData;
  return config;
};
function useAxios(
  Props: boolean,
  initialUrl: string,
  methods: Method,
  bodyData?: OptionData
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
        await axios(url, createFetchOptions(methods, bodyData)).then((result) =>
          dispatch({ type: 'FETCH_SUCCESS', payload: result.data })
        );
      } catch (error) {
        console.error(error);
        if (error.response.status === 401)
          console.error('Unauthorized Request');

        dispatch({ type: 'FETCH_FAILURE', payload: null });
      }
    };

    if (!Props) return;
    fetchData();
  }, [url, methods, Props, bodyData]);

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
