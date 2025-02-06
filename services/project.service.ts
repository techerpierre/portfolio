import { paginate } from "@/helpers/paginate";
import { prisma } from "@/lib/prisma";
import { Project, ProjectListingParams, ProjectListingResult } from "@/types/project.types";
import { TTranslation } from "@prisma/client";

export class ProjectService {
    async list({page, pageSize, translation = "fr"}: ProjectListingParams): Promise<ProjectListingResult> {
        const count = await prisma.project.count();
        const first = paginate(page, pageSize, count);
        const projects = await prisma.project.findMany({
            skip: first,
            take: pageSize,
            orderBy: {
                createdAt: "asc",
            },
            include: {
                tags: true,
                translations: {
                    where: {
                        lang: translation.toUpperCase() as TTranslation,
                    },
                },
            },
        });

        return {
            count,
            results: projects.map((project): Project => ({
                id: project.id,
                title: project.translations[0].title,
                description: project.translations[0].description,
                cover: project.cover ?? undefined,
                coverAlt: project.coverAlt ?? undefined,
                github: project.github ?? undefined,
                website: project.website ?? undefined,
                tags: project.tags.map((tag) => tag.value)
            })),
        };
    }
}

export default new ProjectService();