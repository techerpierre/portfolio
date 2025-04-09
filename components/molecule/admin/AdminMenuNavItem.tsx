"use client"

import clsx from "clsx";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { FC } from "react";

export const AdminMenuNavItem: FC<{
    children: string;
    to: string;
}> = ({ children, to }) => {
    const pathname = usePathname();
    const isCurrent = !!pathname.match(new RegExp(`^\/(fr|en)${to}$`));
    return <Link href={to}>
        <div className={clsx("px-6 pt-4 pb-3 rounded-md text-sm hover:underline", isCurrent && "font-bold")}>
            { children }
        </div>
    </Link>
}