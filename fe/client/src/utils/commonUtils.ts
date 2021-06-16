export const pipe = (...fns: Function[]) => (value: string) => {
  return fns.reduce((acc, cur) => cur(acc), value);
}

export const delay = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));