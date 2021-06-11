import { useContext, useState, useCallback, useEffect } from "react";
import { globalStateRoot } from "./RecoilRoot";

type AtomType<T> = {
  key: string;
  default: T;
}

function useRecoilState<T>(atom: AtomType<T>) {
  const { key } = atom;
  const store = useContext(globalStateRoot).current;
  const [, setState] = useState({});
  store.addInitState(atom);
  const forceUpdate = useCallback(() => {
    setState({});
  }, []);

  useEffect(() => {
    store.subscribe({ key, fn: forceUpdate });
  }, []);
  return [store.getData(key), store.setData(key)];
};

export { useRecoilState };