export function curry(func: (...args: any) => any, arity?: number) {
  return function curried(this: any, ...args: any[]): any {
    if (args.length >= (arity || func.length)) {
      return func.apply(this, args);
    }
    return curried.bind(this, ...args);
  };
}

export function curryRight(func: (...args: any) => any, arity?: number) {
  return function curried(this: any, ...args: any[]) {
    if (args.length >= (arity || func.length)) {
      return func.apply(this, args);
    }
    return function (this: any, ...args2: any) {
      return curried.apply(this, [...args2, ...args]);
    };
  };
}
