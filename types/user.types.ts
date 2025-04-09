export interface User {
    id: string;
    email: string;
    password: string;
    username?: string;
    enabled: boolean;
}

export interface CreateUserData {
    email: string;
    password: string;
    username?: string;
    enabled?: boolean;
}

export interface Profile {
    email: string;
    username?: string;
}