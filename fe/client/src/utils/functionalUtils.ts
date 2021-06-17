export const pipe = (...fns: Function[]) => (value: any) => {
  return fns.reduce((acc, cur) => cur(acc), value);
}

export const _ = {
  map: (callback: any) => (array: Array<any>) => array.map(callback),
  filter: (callback: any) => (array: Array<any>) => array.filter(callback),
  find: (callback: any) => (array: Array<any>) => array.find(callback),
}

export const getLength = (array: Array<any>) => array.length;