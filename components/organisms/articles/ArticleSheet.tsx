import { FC } from "react";
import { getCurrentLocale } from "@/locales/server";
import ArticleService from "@/services/article.service";
import MarkdownService from "@/services/markdown.service";
import { notFound } from "next/navigation";
import Markdown from "@/lib/markdown";
import Image from "next/image";
import { Section } from "@/components/layouts/Section";

export const ArticleSheet: FC<{ articleId: string }> = async ({ articleId }) => {
    const local = await getCurrentLocale();
    const article = await ArticleService.findById(articleId, local);
    const markdown = article?.markdownId ? await MarkdownService.findById(article.markdownId) : null;

    if (!article) notFound();

    const markdownHtml = markdown ? await Markdown.from(markdown.content).toHTML() : null;

    return (
        <Section>
            <div className="mb-6 flex flex-col gap-4">
                <h1 className="text-3xl font-bold text-gray-800">{article.title}</h1>
                <p className="text-gray-600">{article.preview}</p>
                {article.cover && article.coverAlt && (
                    <div className="overflow-hidden rounded-lg shadow-md">
                        <Image 
                            src={article.cover} 
                            alt={article.coverAlt} 
                            width={1920} 
                            height={1080} 
                            priority
                            className="w-full object-cover aspect-video"
                        />
                    </div>
                )}
            </div>
            { markdownHtml ? <div className="prose prose-lg max-w-none text-gray-800" dangerouslySetInnerHTML={{ __html: markdownHtml }} /> : null}
        </Section>
    );
};
