import { getI18n } from "@/locales/server";
import { Article } from "@/types/article.types";
import Image from "next/image";
import { FC } from "react";

export const ArticleCard: FC<Article> = async ({
    title,
    preview,
    cover,
    coverAlt,
    tags,
}) => {
    const t = await getI18n();
    return (
        <article className="shadow-lg border border-gray-200 rounded-lg overflow-hidden transition-all duration-300 ease-out hover:shadow-xl hover:-translate-y-1 flex flex-col">
            <Image 
                src={cover ?? "/images/placeholder.png"} 
                alt={coverAlt ?? "Image placeholder"} 
                width={400} 
                height={300} 
                className="w-full aspect-[3/2] object-cover"
            />
            <div className="py-5 px-4 flex flex-col gap-3 flex-1">
                <div>
                    <h3 className="font-semibold text-lg text-gray-800 line-clamp-2">{title}</h3>
                    <p className="text-sm text-gray-600 line-clamp-3">{preview}</p>
                </div>
                <div className="flex flex-wrap gap-2 mt-auto">
                    {tags.map((tag, index) => (
                        <span key={index} className="px-2 py-1 text-xs font-medium bg-gray-100 text-gray-700 rounded">
                            #{t(`article_tags.${tag}`)}
                        </span>
                    ))}
                </div>
            </div>
        </article>
    );
};
