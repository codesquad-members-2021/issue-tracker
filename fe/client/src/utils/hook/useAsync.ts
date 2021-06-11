import { useReducer, useEffect } from 'react';

type LoadingAction = {
  type: 'LOADING';
};

type SuccessAction<T> = {
  type: 'SUCCESS';
  data: T;
};

type ErrorAction<T> = {
  type: 'ERROR';
  error: T;
};

type AsyncAction<D, E> = LoadingAction | SuccessAction<D> | ErrorAction<E>;

export type AsyncState<D, E> = {
  loading: boolean;
  data: D | null;
  error: E | null;
};

function asyncReducer<D, E>(
  state: AsyncState<D, E>,
  action: AsyncAction<D, E>
): AsyncState<D, E> {
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
  }
}

type PromiseFn<T> = (...args: any) => Promise<T>;

function useAsync<D, E, F extends PromiseFn<D>>(promiseFn: F, skip = false, ...params: Parameters<F>) {
  const [state, dispatch] = useReducer(asyncReducer, {
    loading: false,
    data: null,
    error: null
  } as AsyncState<D, E>);

  async function fetchData(...params: Parameters<F>) {
    dispatch({ type: 'LOADING' });
    try {
      const data = await promiseFn(...params);
      dispatch({
        type: 'SUCCESS',
        data
      });
    } catch (e) {
      dispatch({
        type: 'ERROR',
        error: e
      });
    }
  }

  useEffect(() => {
    if (skip) return;
    fetchData(...params);
  }, []);

  return [state, fetchData] as const;
}

export default useAsync;