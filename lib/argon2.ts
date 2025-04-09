import env from "@/config/env"
import argon2 from "argon2"

export class Argon2 {
    async hash(password: string): Promise<string> {
        return await argon2.hash(password, {
            secret: Buffer.from(env.passwordSecretKey),
        });
    }

    async verify(password: string, hash: string): Promise<boolean> {
        return await argon2.verify(hash, password, {
            secret: Buffer.from(env.passwordSecretKey),
        });
    }
}

export default new Argon2();