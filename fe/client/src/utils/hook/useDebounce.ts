import { useState, useEffect } from 'react';

const useDebounceTyping = <T>(initialState: T, { start, end }: { start: number, end: number }) => {
  const [state, setState] = useState<T>(initialState);

  let startTimer: ReturnType<typeof setTimeout> | null = null;

  useEffect(() => {
    if (!state) return;
    const endTimer = setTimeout(() => {
      setState(initialState)
    }, end);
    return () => {
      if (startTimer) clearTimeout(startTimer);
      if (endTimer) clearTimeout(endTimer)
    }
  }, [state]);

  const setDebounce: any = (data: T) => {
    if (startTimer) clearTimeout(startTimer);
    startTimer = setTimeout(() => {
      setState(data);
    }, start);
  }

  return [state, setDebounce];
}

export default useDebounceTyping;