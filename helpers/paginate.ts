import { clamp } from "./clamp";

export function paginate(page: number, pageSize: number, count: number): number {
    return clamp(0, Math.floor(count / pageSize), Math.floor(pageSize * page));
}