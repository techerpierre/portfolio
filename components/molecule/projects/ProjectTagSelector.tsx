import { FC } from "react";
import { Tag } from "../../atoms/Tag";
import Link from "next/link";
import { getSearchParam } from "@/helpers/getSearchParam";
import { getI18n } from "@/locales/server";

export const ProjectTagSelector: FC = async ({}) => {
    const t = await getI18n();
    const vCurrentTags = await getSearchParam<string[]>("tags");
    const currentTags = Array.isArray(vCurrentTags) ? vCurrentTags : (vCurrentTags ? [vCurrentTags] : []);

    const tags = [
        { name: "PYTHON", value: t("project_tags.PYTHON") },
        { name: "VIDEO_GAME", value: t("project_tags.VIDEO_GAME") },
        { name: "JAVASCRIPT", value: t("project_tags.JAVASCRIPT") },
        { name: "TYPESCRIPT", value: t("project_tags.TYPESCRIPT") },
        { name: "GOLANG", value: t("project_tags.GOLANG") },
        { name: "RUST", value: t("project_tags.RUST") },
        { name: "CPP", value: t("project_tags.CPP") },
        { name: "C", value: t("project_tags.C") },
        { name: "FRONTEND", value: t("project_tags.FRONTEND") },
        { name: "BACKEND", value: t("project_tags.BACKEND") },
    ];

    const getTagRedirectURI = (value: string, active: boolean) => {
        const query = new URLSearchParams();
        currentTags.forEach(tag => query.append("tags", tag));
        query[active ? "delete" : "append"]("tags", value);
        return `/projects?${query}`;
    }

    return <div className="w-full flex flex-wrap gap-2 mx-auto">
        <Link href="/projects">
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