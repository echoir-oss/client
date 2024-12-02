export type Cache<T> = {
    value: () => Promise<T>,
    invalidate: (value: T) => void
}
export const createCache = <T>(value: () => Promise<T>): Cache<T> => {
    let initialized: T | undefined = undefined;
    const cache: Cache<T> = {
        value: async () => initialized ??= await value(),
        invalidate: value => initialized = value,
    };
    return cache;
}

export type RootCache<K extends PropertyKey, V> = {
    value: Record<K, () => Promise<V>>,
    invalidate: (key: K, value: V) => void,
}
export const createRootCache = <K extends PropertyKey, V>(gen: (key: string) => Promise<V>): RootCache<K, V> => {
    const initialized: Record<K, Promise<V>> = {} as Record<K, Promise<V>>;
    const cache: RootCache<K, V> = {
        value: new Proxy({} as Record<K, () => Promise<V>>, {
            get: (_, key) => () => initialized[key as K] ??= gen(key as string),
        }),
        invalidate: (key, value) => initialized[key as K] = Promise.resolve(value),
    };
    return cache;
}
