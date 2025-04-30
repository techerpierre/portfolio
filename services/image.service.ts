import { prisma } from "@/lib/prisma";
import { CreateImageData, Image, ImageListingParams, ImageListingResult } from "@/types/image.types";
import EncryptionService from "./encryption.service";
import { paginate } from "@/helpers/paginate";

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

    async list({ page, pageSize }: ImageListingParams): Promise<ImageListingResult> {
        const count = await prisma.image.count();
        const first = paginate(page, pageSize, count);
        const images = await prisma.image.findMany({
            skip: first,
            take: pageSize,
        });

        return {
            results: images.map((image): Image => ({
                id: image.id,
                content: EncryptionService.base64ToBuffer(image.content),
                public: image.public,
            })),
            count,
        }
    }
}

export default new ImageService();