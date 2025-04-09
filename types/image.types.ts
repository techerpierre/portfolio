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