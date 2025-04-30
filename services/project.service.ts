import { paginate } from "@/helpers/paginate";
import { prisma } from "@/lib/prisma";
import { Project, ProjectListingParams, ProjectListingResult } from "@/types/project.types";
import { Translation } from "@/types/translation.types";
import { TTranslation } from "@prisma/client";

export class ProjectService {
    async list({
            page,
            pageSize,
            translation = "fr",
            tags = [],
        }: ProjectListingParams): Promise<ProjectListingResult> {
        const tagsQuery = tags.length > 0 ? {
            tags: {
                hasSome: tags,
            },
        } : null;
        const count = await prisma.project.count({
            where: { ...tagsQuery },
        });
        const first = paginate(page, pageSize, count);
        const projects = await prisma.project.findMany({
            skip: first,
            take: pageSize,
            where: {
                ...tagsQuery
            },
            orderBy: {
                createdAt: "asc",
            },
            include: {
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
                markdownId: project.translations[0].markdownId ?? undefined,
                tags: project.tags,
            })),
        };
    }

    async findById(id: string, translation: Translation): Promise<Project | null> {
        const project = await prisma.project.findUnique({
            where: { id },
            include: {
                translations: {
                    where: {
                        lang: translation.toUpperCase() as TTranslation,
                    },
                },
            },
        });

        return project ? {
            id: project.id,
            title: project.translations[0].title,
            description: project.translations[0].description,
            cover: project.cover ?? undefined,
            coverAlt: project.coverAlt ?? undefined,
            github: project.github ?? undefined,
            website: project.website ?? undefined,
            markdownId: project.translations[0].markdownId ?? undefined,
            tags: project.tags,
        } : null;
    }
}

export default new ProjectService();