export function clamp(min: number, max: number, value: number): number {
    if (max < value) return max;
    if (min > value) return min;
    return value;
}