"use client"

import { useCurrentLocale, useI18n } from "@/locales/client"
import clsx from "clsx"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { FC } from "react"

export const Navbar: FC = () => {
    const t = useI18n();
    const local = useCurrentLocale();
    const pathname = usePathname();

    return <nav className="flex flex-row gap-6">
        <Link
            href="/projects"
            className={clsx("text-gray-900 hover:underline", pathname.startsWith("/" + local + "/projects") && "font-bold")}
        >{t("navigation.projects")}</Link>
        <Link
            href="/blog?page=0"
            className={clsx("text-gray-900 hover:underline", pathname.startsWith("/" + local + "/blog") && "font-bold")}
        >{t("navigation.blog")}</Link>
    </nav>
}