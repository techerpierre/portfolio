export class EncryptionService {
    base64ToUTF8(data: string): string {
        return Buffer.from(data, "base64").toString("utf-8");
    }

    toBase64(data: string | Buffer): string {
        return Buffer.from(data).toString("base64");
    }

    base64ToBuffer(data: string): Buffer {
        return Buffer.from(data, "base64");
    }
}

export default new EncryptionService();