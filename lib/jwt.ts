import env from "@/config/env";
import jwt from "jsonwebtoken"

export class Jwt {
    async sign(userId: string): Promise<string> {
        return jwt.sign({ userId: userId }, env.authSecret, {
            expiresIn: "7d",
        });
    }

    async verify(token: string): Promise<{ userId: string } | null> {
        try {
            const payload = jwt.verify(token, env.authSecret) as { userId: string };
            return { userId: payload.userId };
        } catch {
            return null;
        }
    }
}

export default new Jwt();