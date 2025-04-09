import Jwt from "@/lib/jwt";
import UserService from "@/services/user.service";
import { User } from "@/types/user.types";
import { NextRequest } from "next/server";

export async function getUserFromRequest(request: NextRequest): Promise<User | null> {
    const token = request.cookies.get("jwt")?.value || request.headers.get("authorizations")?.split(" ")[1];
    if (!token) return null;

    const payload = await Jwt.verify(token)
    if (!payload) return null;

    return await UserService.findById(payload.userId);
}