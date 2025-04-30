"use client"

import { useCurrentLocale, useI18n } from "@/locales/client";
import clsx from "clsx";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { FC } from "react";

type Language = "fr" | "en";

export const LocalFlag: FC<{
    lang: Language;
}> = ({lang}) => {
    const t = useI18n();
    const local = useCurrentLocale();
    const pathname = usePathname();

    const flags: Record<Language, {
        href: string;
        alt: string;
    }> = {
        fr: {
            href: "/images/locales/fr.png",
            alt: t("flags.frAlt"),
        },
        en: {
            href: "/images/locales/en.png",
            alt: t("flags.enAlt"),
        },
    };

    const flag = flags[lang];

    return <Link href={pathname.replace(/^\/(fr|en)/, `/${lang}`)}>
        <div className={clsx("border-2 border-gray-200 overflow-hidden rounded-md w-[32px] h-[24px]", local === lang && "scale-[1.2]")}>
            <Image src={flag.href} alt={flag.alt} width={32} height={24} className="object-cover h-full"/>
        </div>
    </Link> 
}