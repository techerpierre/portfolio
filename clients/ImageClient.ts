import { Many } from "@/types/api.types";
import { ImageWithoutBuffer } from "@/types/image.types";

export class ImageClient {
    async list(page: number, pageSize: number): Promise<Many<ImageWithoutBuffer>> {
        const response = await fetch(`/api/images?page=${page}&pageSize=${pageSize}`);
        const data: Many<ImageWithoutBuffer> = await response.json();
        return data;
    }
}

export default new ImageClient();