import { FC } from "react";
import { getCurrentLocale } from "@/locales/server";
import ArticleService from "@/services/article.service";
import { getSearchParam } from "@/helpers/getSearchParam";
import { ArticleCard } from "@/components/molecule/articles/ArticleCard";
import Link from "next/link";
import { Section } from "@/components/layouts/Section";
import { ArticlesTagSelector } from "@/components/molecule/articles/ArticlesTagSelector";
import { asArray } from "@/helpers/asArray";
import { ArticlesSearchBar } from "@/components/molecule/articles/ArticlesSearchBar";
import { getArticleRedirectURI } from "@/helpers/getArticleRedirectURI";
import { NoArticlesPlaceholder } from "@/components/molecule/articles/NoArticlesPlaceholder";

const ARTICLE_PAGE_SIZE = 30;

export const ArticleGallery: FC = async () => {
    const local = await getCurrentLocale();
    const page = Number((await getSearchParam("page")) || 0);
    const tags = await getSearchParam("tags");
    const searchText = await getSearchParam("searchText");

    const articles = await ArticleService.list({
        page: page,
        pageSize: ARTICLE_PAGE_SIZE,
        translation: local,
        tags: tags ? asArray(tags) : undefined,
        searchText: searchText ?? undefined,
    });

    return <Section>
        <ArticlesSearchBar/>
        <ArticlesTagSelector/>
        { articles.count === 0 ? <NoArticlesPlaceholder/> : (
            <div className="flex flex-col gap-4 mt-6 sm:grid grid-cols-2 gap-x-4 gap-y-6 md:grid-cols-3">
                {articles.results.map(article => <Link key={article.id} href={getArticleRedirectURI(article.title, article.id)}>
                    <div className="h-full">
                        <ArticleCard {...article}/>
                    </div>
                </Link>)}
            </div>
        )}
    </Section>
}
