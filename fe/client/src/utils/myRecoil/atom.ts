type AtomType<T> = {
  key: string;
  default: T;
}

const atom = <T>(atomInitialState: AtomType<T>) => {
  return atomInitialState;
}

export default atom;
