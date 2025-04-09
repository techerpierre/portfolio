import { MainLayout } from "@/components/layouts/MainLayout";
import { ProjectGallery } from "@/components/organisms/projects/ProjectGallery";

export default async function Projects() {
    return <MainLayout>
        <ProjectGallery/>
    </MainLayout>
}