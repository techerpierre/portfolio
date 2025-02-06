import { HorizontalBar } from "@/components/atoms/HorizontalBar";
import { Presentation } from "@/components/organisms/Presentation";
import { Projects } from "@/components/organisms/Projects";
import { Skills } from "@/components/organisms/Skills";
import { getI18n } from "@/locales/server";

export default async function Home() {
  const t = await getI18n();

  return (
    <>
      <Presentation/>
      <HorizontalBar/>
      <Skills/>
      <HorizontalBar/>
      <Projects/>
    </>
  );
}
