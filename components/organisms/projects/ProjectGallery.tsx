import { FC } from "react";
import { Section } from "../../layouts/Section";
import { ProjectTagSelector } from "../../molecule/projects/ProjectTagSelector";
import ProjectService from "@/services/project.service";
import { getCurrentLocale } from "@/locales/server";
import { ProjectCard } from "../../molecule/projects/ProjectCard";
import { getSearchParam } from "@/helpers/getSearchParam";
import { asArray } from "@/helpers/asArray";
import { NoProjectsPlaceholder } from "@/components/molecule/projects/NoProjectsPlaceholder";

const DEFAULT_PROJECTS_PAGE = 0;
const DEFAULT_PROJECTS_PAGE_SIZE = 36;

export const ProjectGallery: FC = async () => {
    const locale = await getCurrentLocale();
    const tags = await getSearchParam("tags");

    const projects = await ProjectService.list({
        page: DEFAULT_PROJECTS_PAGE,
        pageSize: DEFAULT_PROJECTS_PAGE_SIZE,
        translation: locale,
        tags: tags ? asArray(tags) : undefined,
    });

    return <Section>
        <ProjectTagSelector/>
        { projects.count === 0 ? <NoProjectsPlaceholder/> : (
            <div className="flex flex-col gap-4 mt-6 sm:grid grid-cols-2 md:grid-cols-3">
                {projects.results.map(project => <div key={project.id}>
                    <ProjectCard {...project}/>
                </div>
                )}
            </div>
        )}
    </Section>
}