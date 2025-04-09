import { Section } from "@/components/layouts/Section";
import Markdown from "@/lib/markdown";
import { getCurrentLocale } from "@/locales/server";
import MarkdownService from "@/services/markdown.service";
import ProjectService from "@/services/project.service";
import Image from "next/image";
import { notFound } from "next/navigation";
import { FC } from "react";

export const ProjectSheet: FC<{
    projectId: string;
}> = async ({ projectId }) => {
    const local = await getCurrentLocale();
    const project = await ProjectService.findById(projectId, local);
    const markdown = project?.markdownId ? await MarkdownService.findById(project.markdownId) : null;

    if (!project) notFound();

    const markdownHtml = markdown ? await Markdown.from(markdown.content).toHTML() : null;

    return <Section>
        <div className="mb-6 flex flex-col gap-4">
            <h1 className="text-3xl font-bold text-gray-800">{project.title}</h1>
            <p className="text-gray-600">{project.description}</p>
            {project.cover && project.coverAlt && (
                <div className="overflow-hidden rounded-lg shadow-md">
                    <Image 
                        src={project.cover} 
                        alt={project.coverAlt} 
                        width={1920} 
                        height={1080} 
                        priority
                        className="w-full object-cover aspect-video"
                    />
                </div>
            )}
        </div>
        { markdownHtml ? <div className="prose prose-lg max-w-none text-gray-800" dangerouslySetInnerHTML={{ __html: markdownHtml }} /> : null}
    </Section>
}