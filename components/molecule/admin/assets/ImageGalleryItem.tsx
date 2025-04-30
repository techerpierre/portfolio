"use client"

import { useI18n } from "@/locales/client";
import { ImageWithoutBuffer } from "@/types/image.types";
import clsx from "clsx";
import Image from "next/image";
import Link from "next/link";
import { FC } from "react";

export const ImageGalleryItem: FC<ImageWithoutBuffer> = ({
    id,
    public: pub,
}) => {
    const t = useI18n();
    return <Link href="/admin">
        <div
            className="relative shadow-lg border border-gray-200 rounded-lg overflow-hidden transition-all duration-300 ease-out hover:shadow-xl hover:-translate-y-1"
        >
            <div className="w-[200px] h-[200px]">
                <Image
                    src={`/api/images/${id}`}
                    alt=""
                    className="h-full w-full object-cover"
                    width={200}
                    height={200}
                />
            </div>
            <span className={clsx(
                "absolute p-1 text-xs text-white bottom-1 right-1 rounded-md",
                pub ? "bg-emerald-500" : "bg-red-500",
            )}>
                {pub ? t("admin.assets.image_visibility.public") : t("admin.assets.image_visibility.private")}
            </span>
        </div>
    </Link>
}
