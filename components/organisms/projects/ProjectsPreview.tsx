import { FC } from "react";
import { Section } from "../../layouts/Section";
import { getCurrentLocale, getI18n } from "@/locales/server";
import { ProjectCard } from "../../molecule/projects/ProjectCard";
import Link from "next/link";
import ProjectService from "@/services/project.service";

const MAX_DISPLAYED_PROJECT_COUNT = 6;

export const ProjectsPreview: FC = async () => {
    const t = await getI18n();
    const local = await getCurrentLocale();
    const projects = await ProjectService.list({ page: 0, pageSize: MAX_DISPLAYED_PROJECT_COUNT, translation: local });

    return <div className="bg-gray-200 py-10 md:py-20 mt-16">
            <Section title={"🏗️ " + t("home.projects")}>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {projects.results.map((project) => (
                        <ProjectCard key={project.id} {...project} />
                    ))}
                </div>
                <Link href="#" className="block mt-6 text-center text-gray-900 hover:underline font-semibold">
                    {t("see_more")}
                </Link>
            </Section>
        </div>
};
