import { getProjectRedirectURI } from "@/helpers/getProjectRedirectURI";
import { getI18n } from "@/locales/server";
import { Project } from "@/types/project.types";
import Image from "next/image";
import Link from "next/link";
import { FC } from "react";

export const ProjectCard: FC<Project> = async ({
    id,
    title,
    description,
    cover,
    coverAlt,
    tags,
    github,
    website,
}) => {
    const t = await getI18n();

    return (
        <article className="bg-white border border-gray-200 shadow-md rounded-lg overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
            {cover && coverAlt && (
                <Image
                    src={cover}
                    alt={coverAlt}
                    width={400}
                    height={250}
                    className="w-full h-40 object-cover"
                />
            )}

            <div className="p-5">
                <Link href={getProjectRedirectURI(title, id)}>
                    <h3 className="text-lg font-semibold text-gray-800 hover:underline">{title}</h3>
                </Link>
                <p className="text-sm text-gray-600 mt-1 line-clamp-2">{description}</p>

                {(website || github) && (
                    <div className="flex flex-row gap-3 mt-3">
                        {website && <a href={website} className="text-sm text-gray-700 hover:underline">🌍 Website</a>}
                        {github && <a href={github} className="text-sm text-gray-700 hover:underline">📌 GitHub</a>}
                    </div>
                )}

                <div className="flex flex-wrap gap-2 mt-4">
                    {tags.map((tag, index) => (
                        <span key={index} className="px-2 py-1 text-xs font-medium bg-gray-100 text-gray-700 rounded">
                            #{t(`project_tags.${tag}`)}
                        </span>
                    ))}
                </div>
            </div>
        </article>
    );
};
