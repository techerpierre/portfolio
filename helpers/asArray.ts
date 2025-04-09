export function asArray<T=any>(data: T | T[]): T[] {
    return Array.isArray(data) ? data : [data];
}