import { AdminMenuNavItem } from "@/components/molecule/admin/AdminMenuNavItem";
import { getCurrentUser } from "@/helpers/getCurrentUser";
import { getI18n } from "@/locales/server";
import { FC } from "react";

export const AdminMenu: FC = async () => {
    const t = await getI18n();
    const user = await getCurrentUser();

    /* Model: [key, href, label] */
    const navigation: [number, string, string][] = [
        [0, "/admin", "🏡 " + t("admin.navigation.home")],
        [1, "/admin/projects", "🏗️ " + t("admin.navigation.projects")],
        [2, "/admin/articles", "📖 " + t("admin.navigation.articles")],
        [3, "/admin/assets", "🖼️ " + t("admin.navigation.assets")],
    ]

    return <menu className="m-2 p-2 flex flex-row justify-between items-center bg-gray-100 rounded-lg border border-gray-200">
        <nav className="flex flex-row border border-gray-200 rounded-md bg-white shadow-sm">
            {navigation.map(([key, href, label]) => <AdminMenuNavItem key={key} to={href}>{label}</AdminMenuNavItem>)}
        </nav>
        <div className="p-4 border border-gray-200 rounded-md bg-white shadow-sm">
            <p className="text-xs font-semibold">{user.email}</p>
            <p className="text-xs">{user.username || "no_username"}</p>
        </div>
    </menu>
}