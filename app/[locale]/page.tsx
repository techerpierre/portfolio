import { Presentation } from "@/components/organisms/presentation/Presentation";
import { ProjectsPreview } from "@/components/organisms/projects/ProjectsPreview";
import { Skills } from "@/components/organisms/presentation/Skills";
import { MainLayout } from "@/components/layouts/MainLayout";
import { ArticlesPreview } from "@/components/organisms/articles/ArticlesPreview";
import { Hero } from "@/components/organisms/presentation/Hero";
import { Header } from "@/components/organisms/Header";
import { IsometricBackground } from "@/components/atoms/IsometricBackground";
import { HorizontalBar } from "@/components/atoms/HorizontalBar";

export default async function Home() {
  return (
    <MainLayout headerShown={false}>
      <IsometricBackground>
        <Header/>
        <Hero/>
      </IsometricBackground>
      <Presentation/>
      <HorizontalBar/>
      <Skills/>
      <HorizontalBar/>
      <ProjectsPreview/>
      <HorizontalBar/>
      <ArticlesPreview/>
    </MainLayout>
  );
}
