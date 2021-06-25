import { useState, useCallback } from 'react';

const useToggle = (initialState: boolean) => {
  const [state, setState] = useState(initialState);

  const setToggle = useCallback(() => {
    setState(state => !state);
  }, []);

  return [state, setToggle];
}

export default useToggle;