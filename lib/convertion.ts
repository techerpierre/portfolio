import sharp from "sharp";

export class Conversion {
    async png(buffer: Buffer): Promise<Buffer> {
        return await sharp(buffer).png().toBuffer();
    }
}

const convertion = new Conversion();
export default convertion;