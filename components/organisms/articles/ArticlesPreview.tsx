import { FC } from "react";
import { Section } from "../../layouts/Section";
import { getCurrentLocale, getI18n } from "@/locales/server";
import Link from "next/link";
import ArticleService from "@/services/article.service";
import { ArticleCard } from "@/components/molecule/articles/ArticleCard";
import { getArticleRedirectURI } from "@/helpers/getArticleRedirectURI";

const MAX_DISPLAYED_PROJECT_COUNT = 6;

export const ArticlesPreview: FC = async () => {
    const t = await getI18n();
    const local = await getCurrentLocale();
    const articles = await ArticleService.list({ page: 0, pageSize: MAX_DISPLAYED_PROJECT_COUNT, translation: local });

    return <div className="py-10 md:py-20">
        <Section title={"📖 " + t("home.articles")}>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {articles.results.map((article) =>  <Link key={article.id} href={getArticleRedirectURI(article.title, article.id)}>
                <div className="h-full">
                    <ArticleCard {...article}/>
                </div>
            </Link>)}
            </div>
            <Link href="/blog" className="block mt-6 text-center text-gray-900 hover:underline font-semibold">
                {t("see_more")}
            </Link>
        </Section>
    </div> 
};
