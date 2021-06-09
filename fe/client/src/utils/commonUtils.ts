export const pipe = (...fns: Function[]) => (value: number | string) => {
  return fns.reduce((acc, cur) => cur(acc), value);
}