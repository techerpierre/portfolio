import { paginate } from "@/helpers/paginate";
import { prisma } from "@/lib/prisma";
import { Article, ArticleListingParams, ArticleListingResult } from "@/types/article.types";
import { Translation } from "@/types/translation.types";
import { TTranslation } from "@prisma/client";

export class ArticleService {
    async list({
        page,
        pageSize,
        translation = "fr",
        tags = [],
        searchText,
    }: ArticleListingParams): Promise<ArticleListingResult> {
        const translationQuery = { translations: { some: {}}};
        const tagsQuery = tags.length > 0 ? { tags: { some: { value: { in: tags }}}} : null;
        const searchQuery = {
            translations: {
                some: {
                    lang: translation.toLocaleUpperCase() as TTranslation,
                    OR: [
                        { title: { contains: searchText }},
                        { preview: { contains: searchText }},
                    ],
                },
            },
        };
        const query = { AND: [{...tagsQuery}, {...(searchText ? searchQuery : translationQuery)}] };
        const count = await prisma.article.count({ where: { ...query }});
        const first = paginate(page, pageSize, count);
        const articles = await prisma.article.findMany({
            skip: first,
            take: pageSize,
            where: { ...query },
            orderBy: { createdAt: "asc" },
            include: {
                tags: true,
                translations: {
                    where: {
                        OR: [
                            { lang: translation.toUpperCase() as TTranslation },
                            { lang: { not: translation.toUpperCase() as TTranslation }},
                        ],
                    },
                    take: 1,
                },
            },
        });

        return {
            count,
            results: articles.map((article): Article => ({
                id: article.id,
                title: article.translations[0]?.title ?? "Invalid Title",
                preview: article.translations[0]?.preview ?? "Invalid Title",
                markdownId: article.translations[0]?.markdownId ?? undefined,
                tags: article.tags.map(tag => tag.value),
                cover: article.cover ?? undefined,
                coverAlt: article.coverAlt ?? undefined,
            }))
        }
    }

    async findById(id: string, translation: Translation): Promise<Article | null> {
        const article = await prisma.article.findUnique({
            where: { id },
            include: {
                tags: true,
                translations: {
                    where: {
                        OR: [
                            { lang: translation.toUpperCase() as TTranslation },
                            { lang: { not: translation.toUpperCase() as TTranslation }},
                        ],
                    },
                    take: 1,
                },
            },
        });

        return article ? {
            id: article.id,
            title: article.translations[0].title,
            preview: article.translations[0].preview,
            markdownId: article.translations[0].markdownId ?? undefined,
            tags: article.tags.map(tag => tag.value),
            cover: article.cover ?? undefined,
            coverAlt: article.coverAlt ?? undefined,
        } : null;
    }
}

export default new ArticleService();