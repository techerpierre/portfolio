import { getCurrentPath } from "@/helpers/getCurrentPath";
import { getCurrentUser } from "@/helpers/getCurrentUser";
import { isAuthenticated } from "@/helpers/isAuthenticated";
import { getI18n } from "@/locales/server";
import Link from "next/link";
import { FC } from "react";

export const AuthenticatedBanner: FC = async () => {
    const t = await getI18n();
    const isAuth = await isAuthenticated();
    if (!isAuth || (await getCurrentPath()).pathname.match(new RegExp(`^\/(fr|en)\/admin(\/.*)?$`))) return;
    const currentUser = await getCurrentUser();


    return <div className="w-full flex flex-row gap-1 py-2 justify-center bg-black">
        <p className="text-xs text-white">{t("auth_banner.text")} {currentUser.username || "no_username"}</p>
        <Link href="/admin" className="text-xs font-semibold text-white hover:underline">{t("auth_banner.link")}</Link>
    </div>
}