export function secureParseInt(strNumber: string): number | null {
    try {
        return parseInt(strNumber);
    } catch {
        return null;
    }
}