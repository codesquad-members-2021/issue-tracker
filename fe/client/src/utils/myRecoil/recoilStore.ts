
type ObserverFuncType = Record<string, Function[]>
type InitialStateType =
  string |
  number |
  object |
  boolean |
  Set<number> |
  Array<string> |
  Array<number> |
  Array<Array<number>> |
  Array<Array<string>>;

type DataType = Record<string, InitialStateType>;

const recoilStore = {
  observers: {} as ObserverFuncType,
  data: {} as DataType,
  subscribe({ key, fn }: { key: string, fn: Function }) {
    // if (key in this.observers) return;
    this.observers[key] = this.observers[key] || [];
    this.observers[key].push(fn);
  },

  addInitState(atom: { key: string, default: InitialStateType }) {
    if (this.data[atom.key]) return;
    this.data[atom.key] = atom.default;
  },

  getData(key: string) {
    return this.data[key];
  },

  setData: function (key: string) {
    return (fn: Function | InitialStateType) => {
      this.data[key] = typeof fn === 'function' ? fn(this.data[key]) : fn;
      this.observers[key].forEach((callback) => callback());
    };
  }
};

export default recoilStore;