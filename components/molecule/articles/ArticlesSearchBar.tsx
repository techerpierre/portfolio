"use client"

import { FC } from "react";
import { SearchBar } from "../../atoms/SearchBar";
import { useI18n } from "@/locales/client";
import { useRouter, useSearchParams } from "next/navigation";

export const ArticlesSearchBar: FC = () => {
    const t = useI18n();
    const router = useRouter();
    const params = useSearchParams();

    const handleValidate = (value: string) => {
        const query = new URLSearchParams(params);
        if (query.has("searchText")) {
            query.set("searchText", value);
        } else {
            query.append("searchText", value);
        }
        router.push(`/blog?${query}`);
    }

    return <div className="mb-6">
        <SearchBar
            placeholder={t("articles.searchbar_placeholder")}
            onValidate={handleValidate}
            defaultValue={params.get("searchText")!}
        />
    </div>
}