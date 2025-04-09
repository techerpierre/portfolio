import { Presentation } from "@/components/organisms/presentation/Presentation";
import { ProjectsPreview } from "@/components/organisms/projects/ProjectsPreview";
import { Skills } from "@/components/organisms/presentation/Skills";
import { MainLayout } from "@/components/layouts/MainLayout";
import { ArticlesPreview } from "@/components/organisms/articles/ArticlesPreview";
import { Hero } from "@/components/organisms/presentation/Hero";

export default async function Home() {
  return (
    <MainLayout>
      <span className="h-16 block"></span>
      <Hero/>
      <Presentation/>
      <Skills/>
      <ProjectsPreview/>
      <ArticlesPreview/>
    </MainLayout>
  );
}
