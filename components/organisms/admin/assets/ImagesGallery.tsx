"use client"

import { FC } from "react";
import { useImages } from "./ImageContext";
import { ImageGalleryItem } from "@/components/molecule/admin/assets/ImageGalleryItem";
import { useI18n } from "@/locales/client";

export const ImagesGallery: FC = () => {
    const t = useI18n();
    const { images, next, prev, last, first } = useImages();

    return <div>
        <div className="px-4 pt-4 pb-2">
            <h2 className="text-xl font-bold">🌄 Images</h2>
        </div>
        <div className="flex flex-row gap-2 m-2 p-2 overflow-x-auto bg-gray-100 rounded-t-lg border border-gray-200">
            { images.map(image => <ImageGalleryItem key={image.id} {...image}/>) }
        </div>
        <div className="mx-2 px-2 py-2 flex flex-row-reverse border border-gray-200 rounded-md shadow-sm">
            <button
                className="px-3 py-1 text-sm"
            >{t("admin.assets.add")}</button>
            <button
                className="px-3 py-1 text-sm"
                onClick={last}
            >Last</button>
            <button
                className="px-3 py-1 text-sm"
                onClick={next}
            >Next</button>
            <button
                className="px-3 py-1 text-sm"
                onClick={prev}
            >Prev</button>
            <button
                className="px-3 py-1 text-sm"
                onClick={first}
            >First</button>
        </div>
    </div>
}