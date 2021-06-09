import { useContext, useState, useCallback, useEffect } from "react";
import { globalStateRoot } from "./RecoilRoot";

type AtomType<T> = {
  key: string;
  initialState: T;
}

function useRecoilState<T>({ key, initialState }: AtomType<T>) {
  const store = useContext(globalStateRoot).current;
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [_, setState] = useState({});
  store.addInitState({ key, initialState });

  const forceUpdate = useCallback(() => {
    setState({});
  }, []);

  useEffect(() => {
    store.subscribe({ key, fn: forceUpdate });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return [store.getData(key), store.setData(key)];
};

export { useRecoilState };