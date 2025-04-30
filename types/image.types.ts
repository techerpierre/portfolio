export interface Image {
    id: string;
    content: Buffer;
    public: boolean;
}

export interface CreateImageData {
    content: Buffer;
    public?: boolean;
}

export interface ImageWithoutBuffer {
    id: string;
    public: boolean;
}

export interface ImageListingParams {
    page: number;
    pageSize: number;
}

export interface ImageListingResult {
    results: Image[];
    count: number;
}