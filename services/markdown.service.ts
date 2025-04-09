import { prisma } from "@/lib/prisma";
import { Markdown } from "@/types/markdown.types";
import EncryptionService from "./encryption.service";

export class MarkdownService {
    async findById(id: string): Promise<Markdown | null> {
        const markdown = await prisma.markdown.findUnique({
            where: { id },
        });

        return markdown ? {
            id: markdown.id,
            content: EncryptionService.base64ToUTF8(markdown.content),
        } : null;
    }
}

export default new MarkdownService();