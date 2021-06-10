import { useContext, useState, useCallback, useEffect } from "react";
import { globalStateRoot } from "./RecoilRoot";

type AtomType<T> = {
  key: string;
  initialState: T;
}

function useRecoilState<T>({ key, initialState }: AtomType<T>) {
  const store = useContext(globalStateRoot).current;
  const [, setState] = useState({});
  store.addInitState({ key, initialState });
  const forceUpdate = useCallback(() => {
    setState({});
  }, []);

  useEffect(() => {
    store.subscribe({ key, fn: forceUpdate });
  }, []);
  return [store.getData(key), store.setData(key)];
};

export { useRecoilState };