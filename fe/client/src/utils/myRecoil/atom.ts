type AtomType<T> = {
  key: string;
  initialState: T;
}

const atom = <T>({ key, initialState }: AtomType<T>) => {
  return { key, initialState };
}

export default atom;
