import { useReducer, useEffect } from 'react';

type ReducerStateType = {
  loading: boolean;
  data: any;
  error: null | any;
}

type ReducerActionType = {
  type: string;
  data: any;
  error: any;
}

const reducer = (state: ReducerStateType, action: Partial<ReducerActionType>) => {
  switch (action.type) {
    case 'LOADING':
      return {
        loading: true,
        data: null,
        error: null
      };
    case 'SUCCESS':
      return {
        loading: false,
        data: action.data,
        error: null
      };
    case 'ERROR':
      return {
        loading: false,
        data: null,
        error: action.error
      };
    default:
      throw new Error(`Unhandled action type: ${action.type}`);
  }
};

const reducerInitialState = {
  loading: false,
  data: null,
  error: null
};

const useAsync = (apiFunction: Function, deps = [], skip = false) => {
  const [state, dispatch] = useReducer(reducer, reducerInitialState);

  const fetchData = async (addParam?: string, addData?: any) => {
    dispatch({ type: 'LOADING' });
    try {
      const data = await apiFunction(addParam);
      dispatch({ type: 'SUCCESS', data: { ...data, ...addData } });
    } catch (e) {
      dispatch({ type: 'ERROR', error: e });
    }
  }

  useEffect(() => {
    if (skip) return;
    fetchData();
  }, deps);

  return [state, fetchData];
}

export default useAsync;