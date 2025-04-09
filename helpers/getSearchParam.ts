import { getSearchParams } from "./getSearchParams";

export async function getSearchParam<T = any>(key: string): Promise<T | null> {
    const searchParams = await getSearchParams();
    const param = searchParams.getAll(key);
    if (!param || param.length === 0) return null;
    if (param.length === 1) return param[0] as T;
    return param as T;
}