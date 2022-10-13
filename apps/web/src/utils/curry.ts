export function curry(func: Function, arity?: number) {
    return function curried(...args) {
        if (args.length >= (arity || func.length)) {
            return func.apply(this, args)
        }
        return curried.bind(this, ...args)
    }
}

export function curryRight(func: Function, arity?: number) {
    return function curried(...args) {
        if (args.length >= (arity || func.length)) {
            return func.apply(this, args)
        }
        return function (...args2) {
            return curried.apply(this, [...args2, ...args])
        }
    }
}
