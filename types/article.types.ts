import { Translation } from "./translation.types";

type TArticleTag = 
    "PYTHON"
    | "VIDEO_GAME"
    | "JAVASCRIPT"
    | "TYPESCRIPT"
    | "GOLANG"
    | "RUST"
    | "CPP"
    | "C"
    | "FRONTEND"
    | "BACKEND"
    | "IA"
    | "DEVELOPPERS"

export interface Article {
    id: string;
    title: string;
    preview: string;
    markdownId?: string;
    tags: TArticleTag[];
    cover?: string;
    coverAlt?: string;
}

export interface ArticleListingParams {
    page: number;
    pageSize: number;
    translation?: Translation;
    tags?: TArticleTag[];
    searchText?: string;
}

export interface ArticleListingResult {
    results: Article[];
    count: number;
}