"use client"

import ImageClient from "@/clients/ImageClient";
import { useI18n } from "@/locales/client";
import { ImageWithoutBuffer } from "@/types/image.types";
import { createContext, Dispatch, FC, PropsWithChildren, SetStateAction, useCallback, useContext, useEffect, useState } from "react";
import toast from "react-hot-toast";

const IMAGES_PAGE_SIZE = 10;

interface TImageContext {
    images: ImageWithoutBuffer[];
    setImages: Dispatch<SetStateAction<ImageWithoutBuffer[]>>
    loading: boolean;
    setLoading: Dispatch<SetStateAction<boolean>>
    count: number;
    setCount: Dispatch<SetStateAction<number>>;
    page: number;
    setPage: Dispatch<SetStateAction<number>>;
    fetch: () => void;
}

export const ImageContext = createContext<TImageContext>({
    images: [],
    setImages: () => {},
    loading: false,
    setLoading: () => {},
    count: 0,
    setCount: () => {},
    page: 0,
    setPage: () => {},
    fetch: () => {},

});

export const useImages = () => {
    const {page, setPage, count, fetch, loading, images} = useContext(ImageContext);

    const next = useCallback(() => {
        if (page < Math.ceil(count / IMAGES_PAGE_SIZE))
            setPage(prev => prev + 1);
    }, [count, page, setPage]);

    const prev = useCallback(() => {
        if (page > 1)
            setPage(prev => prev - 1);
    }, [page, setPage]);

    return {
        next,
        prev,
        refetch: fetch,
        loading: loading,
        images: images,
        count: count,
        page: page,
        first: useCallback(() => setPage(1), [setPage]),
        last: useCallback(() => setPage(Math.ceil(count / IMAGES_PAGE_SIZE)), [count, setPage])
    }
}

export const ImageProvider: FC<PropsWithChildren> = ({children}) => {
    const t = useI18n();
    const [images, setImages] = useState<ImageWithoutBuffer[]>([]);
    const [loading, setLoading] = useState(false);
    const [count, setCount] = useState(0);
    const [page, setPage] = useState(1);

    const fetchData = useCallback(() => {
        setLoading(true);
        ImageClient.list(page, IMAGES_PAGE_SIZE)
            .then(data => {
                setImages(data.results);
                setCount(data.count);
            })
            .catch(() => toast.error(t("admin.fetching_errors.images")))
            .finally(() => setLoading(false));
    }, [page, setCount, setImages, t]);

    useEffect(() => {
        fetchData();
    }, [page, fetchData]);

    return <ImageContext.Provider
        value={{
            images, setImages,
            loading, setLoading,
            count, setCount,
            page, setPage,
            fetch: fetchData,
        }}
    >
        {children}
    </ImageContext.Provider>
}