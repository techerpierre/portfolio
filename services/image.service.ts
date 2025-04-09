import { prisma } from "@/lib/prisma";
import { CreateImageData, Image } from "@/types/image.types";
import EncryptionService from "./encryption.service";

export class ImageService {
    async findById(id: string): Promise<Image | null> {
        const image = await prisma.image.findUnique({
            where: { id },
        });

        return image ? {
            id: image.id,
            content: EncryptionService.base64ToBuffer(image.content),
            public: image.public,
        } : null;
    }

    async create(data: CreateImageData): Promise<Image> {
        const image = await prisma.image.create({
            data: {
                content: EncryptionService.toBase64(data.content),
                public: data.public,
            },
        });

        return {
            id: image.id,
            content: EncryptionService.base64ToBuffer(image.content),
            public: image.public,
        };
    }
}

export default new ImageService();