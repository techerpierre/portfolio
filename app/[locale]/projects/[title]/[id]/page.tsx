import { MainLayout } from "@/components/layouts/MainLayout";
import { ProjectSheet } from "@/components/organisms/projects/ProjectSheet";

export default async function Project({
    params,
}: {
    params: Promise<{
        id: string;
    }>
}) {
    const { id } = await params;

    return <MainLayout>
        <ProjectSheet projectId={id}/>
    </MainLayout>
}