import { FC } from "react";
import { Section } from "../layouts/Section";
import { getCurrentLocale, getI18n } from "@/locales/server";
import { ProjectCard } from "../molecule/ProjectCard";
import Link from "next/link";
import ProjectService from "@/services/project.service";

const MAX_DISPLAYED_PROJECT_COUNT = 6;

export const Projects: FC = async () => {
    const t = await getI18n();
    const local = await getCurrentLocale();
    const projects = await ProjectService.list({ page: 0, pageSize: MAX_DISPLAYED_PROJECT_COUNT, translation: local });

    return <Section title={t("home.projects")}>
        <div className="flex flex-row w-full overflow-y-auto gap-4 snap-x snap-mandatory sm:overflow-hidden sm:grid sm:grid-cols-3 ">
            {projects.results.map(project => <div key={project.id} className="flex-shrink-0 w-5/6 snap-start sm:w-full">
                <ProjectCard {...project}/>
            </div>)}
        </div>
        {projects.count > MAX_DISPLAYED_PROJECT_COUNT &&< Link href="#" className="block mt-3 text-indigo-400">
            {t("see_more")}
        </Link>}
    </Section>
}