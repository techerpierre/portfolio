import { getI18n } from "@/locales/server";
import { Project } from "@/types/project.types";
import Image from "next/image";
import { FC } from "react";

export const ProjectCard: FC<Project> = async ({
    title,
    description,
    cover,
    coverAlt,
    tags,
    github,
    website,
}) => {
    const t = await getI18n();

    return <article className="p-4 border border-gray-300 rounded-xl h-full">
        <div className="flex gap-4 mb-2">
            {cover && coverAlt && <Image src={cover} alt={coverAlt} width={200} height={200} className="aspect-square w-12 rounded-md object-cover" />}
            <div>
                <h3 className="font-bold">{ title }</h3>
                <p className="text-xs leading-none line-clamp-2">{ description }</p>
            </div>
        </div>
        <div className="flex flex-wrap gap-1 items-center">
            {tags.map((tag, index) => (
                <span key={index}>
                    <span className="text-xs text-gray-400">#{t(`project_tags.${tag}`)}</span>
                    { index < tags.length - 1 && <span className="text-xs text-gray-400 ml-1">-</span> }
                </span>
            ))}
        </div>
        {(website || github) && <div className="flex flex-row gap-1 mt-2">
            {website && <a href={website} className="text-xs text-indigo-400">Website</a>}
            {(website && github) && <span className="text-xs text-indigo-400">-</span>}
            {github && <a href={github} className="text-xs text-indigo-400">Github</a>}
        </div>}
    </article>
}