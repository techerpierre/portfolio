import Argon2 from "@/lib/argon2";
import Jwt from "@/lib/jwt";
import { signInSchema } from "@/lib/schemas";
import UserService from "@/services/user.service";
import { ApiError, PromisedApiResponse } from "@/types/api.types";
import { AuthData } from "@/types/auth.types";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest): PromisedApiResponse<AuthData> {

    const data = await signInSchema.parseAsync(await req.json());
    const user = await UserService.findByEmail(data.email);

    if (!user || !user.enabled || !await Argon2.verify(data.password, user.password))
        return NextResponse.json<ApiError>({ error: "authentication failed" }, { status: 401 });

    const token = await Jwt.sign(user.id);

    return NextResponse.json<AuthData>({
        jwt: token,
    });
}