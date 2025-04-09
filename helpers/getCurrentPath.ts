import { cookies } from "next/headers";

export async function getCurrentPath(): Promise<URL> {
    const cookieStore = await cookies();
    const url = new URL(cookieStore.get("x-url")?.value as string)
    return url;
}