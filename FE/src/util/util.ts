const pipe = (...funcs : any) => (param? : any)=> funcs.reduce((acc: any, func : any) => func(acc), param);
export { pipe };