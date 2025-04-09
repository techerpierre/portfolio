import { MainLayout } from "@/components/layouts/MainLayout";
import { ArticleSheet } from "@/components/organisms/articles/ArticleSheet";

export default async function Article({
    params,
}: {
    params: Promise<{
        id: string;
    }>
}) {
    const { id } = await params;

    return <MainLayout>
        <ArticleSheet articleId={id}/>
    </MainLayout>
}