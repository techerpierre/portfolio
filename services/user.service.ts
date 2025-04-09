import { prisma } from "@/lib/prisma";
import { CreateUserData, User } from "@/types/user.types";

export class UserService {
    async create(data: CreateUserData): Promise<User> {
        const newUser = await prisma.user.create({
            data: {
                email: data.email,
                password: data.password,
                username: data.username,
                enabled: data.enabled,
            }
        });

        return {
            id: newUser.id,
            email: newUser.email,
            password: newUser.password,
            username: newUser.username || undefined,
            enabled: newUser.enabled,
        };
    }

    async findByEmail(email: string): Promise<User | null> {
        const user = await prisma.user.findUnique({
            where: { email },
        });

        return user ? {
            id: user.id,
            email: user.email,
            password: user.password,
            username: user.username || undefined,
            enabled: user.enabled,
        } : null;
    }

    async findById(id: string): Promise<User | null> {
        const user = await prisma.user.findUnique({
            where: { id },
        });

        return user ? {
            id: user.id,
            email: user.email,
            password: user.password,
            username: user.username || undefined,
            enabled: user.enabled,
        } : null;
    }
}

export default new UserService();