import { TProjectTag } from "@prisma/client";
import { Translation } from "./translation.types";

export type ProjectTag =
    "PYTHON"
    | "VIDEO_GAME"
    | "JAVASCRIPT"
    | "TYPESCRIPT"
    | "GOLANG"
    | "RUST"
    | "CPP"
    | "C"
    | "FRONTEND"
    | "BACKEND";

export interface Project {
    id: string;
    title: string;
    description: string;
    cover?: string;
    coverAlt?: string;
    github?: string;
    website?: string;
    markdownId?: string;
    tags: ProjectTag[];
}

export interface ProjectListingParams {
    page: number;
    pageSize: number;
    translation?: Translation;
    tags?: TProjectTag[];
}

export interface ProjectListingResult {
    results: Project[];
    count: number;
}