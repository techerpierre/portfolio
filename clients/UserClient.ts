import { AuthData } from "@/types/auth.types";
import Cookies from "js-cookie"

export class UserClient {
    async login(credentials: { email: string, password: string }, persist: boolean = false) {
        const response = await fetch("/api/auth/login", {
            method: "POST",
            body: JSON.stringify(credentials),
        });
        const data: AuthData = await response.json();
        Cookies.set("jwt", data.jwt, { expires: persist ? 7 : undefined });
    }
}

export default new UserClient();