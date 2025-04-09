import Jwt from "@/lib/jwt";
import UserService from "@/services/user.service";
import { User } from "@/types/user.types";
import { cookies } from "next/headers";

export async function getCurrentUser(): Promise<User> {
    const cookiesData = await cookies();
    const jwt = cookiesData.get("jwt")?.value!;
    const payload = await Jwt.verify(jwt);
    const user = await UserService.findById(payload?.userId!);
    return user!;
}