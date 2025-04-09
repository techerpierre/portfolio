import { FC } from "react";
import { Tag } from "../../atoms/Tag";
import Link from "next/link";
import { getSearchParam } from "@/helpers/getSearchParam";
import { getI18n } from "@/locales/server";

export const ArticlesTagSelector: FC = async ({}) => {
    const t = await getI18n();
    const searchText = await getSearchParam<string>("searchText");
    const vCurrentTags = await getSearchParam<string[]>("tags");
    const currentTags = Array.isArray(vCurrentTags) ? vCurrentTags : (vCurrentTags ? [vCurrentTags] : []);

    const tags = [
        { name: "PYTHON", value: t("article_tags.PYTHON") },
        { name: "VIDEO_GAME", value: t("article_tags.VIDEO_GAME") },
        { name: "JAVASCRIPT", value: t("article_tags.JAVASCRIPT") },
        { name: "TYPESCRIPT", value: t("article_tags.TYPESCRIPT") },
        { name: "GOLANG", value: t("article_tags.GOLANG") },
        { name: "RUST", value: t("article_tags.RUST") },
        { name: "CPP", value: t("article_tags.CPP") },
        { name: "C", value: t("article_tags.C") },
        { name: "FRONTEND", value: t("article_tags.FRONTEND") },
        { name: "BACKEND", value: t("article_tags.BACKEND") },
        { name: "IA", value: t("article_tags.IA") },
        { name: "DEVELOPPERS", value: t("article_tags.DEVELOPPERS") },
    ];

    const getTagRedirectURI = (value: string, active: boolean) => {
        const query = new URLSearchParams();
        currentTags.forEach(tag => query.append("tags", tag));
        query[active ? "delete" : "append"]("tags", value);
        if(searchText) {
            query.set("searchText", searchText);
        }
        return `/blog?${query}`;
    }

    return <div className="w-full flex flex-wrap gap-2 mx-auto">
        <Link href="/blog">
            <Tag active={currentTags.length === 0}>{t("all_tags")}</Tag>
        </Link>
        {tags.map(tag => {
            const active = currentTags.includes(tag.name);
            return <Link key={tag.name} href={getTagRedirectURI(tag.name, active)}>
                <Tag active={active}>{tag.value}</Tag>
            </Link>
        })}
    </div>
}