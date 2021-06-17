export const pipe =
  (...fns: any) =>
  (...args: any) =>
    fns.reduce((acc: any, fn: any) => fn(acc), args);
