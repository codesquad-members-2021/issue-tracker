
type ObserverFuncType = Record<string, Function[]>
type InitialStateType =
  string |
  number |
  object |
  boolean |
  Array<string> |
  Array<number> |
  Array<Array<number>> |
  Array<Array<string>>;

type DataType = Record<string, InitialStateType>;

const recoilStore = {
  observers: {} as ObserverFuncType,
  data: {} as DataType,
  subscribe({ key, fn }: { key: string, fn: Function }) {
    if (Object.keys(this.observers).find(k => k === key)) return;
    this.observers[key] = this.observers[key] || [];
    this.observers[key].push(fn);
  },

  addInitState({ key, initialState }: { key: string, initialState: InitialStateType }) {
    if (this.data[key]) return;
    this.data[key] = initialState;
  },

  getData(key: string) {
    return this.data[key];
  },

  setData: function (key: string) {
    return (fn: Function | object) => {
      if (typeof fn === 'object') {
        this.data[key] = fn;
      } else {
        this.data[key] = fn(this.data[key]);
      }
      this.observers[key].forEach((callback) => callback());
    };
  }
};

export default recoilStore;