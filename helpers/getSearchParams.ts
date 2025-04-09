import { cookies } from "next/headers";

export async function getSearchParams() {
    const cookieStore = await cookies();
    const searchParams = new URL(cookieStore.get("x-url")?.value as string).searchParams;
    return searchParams;
}