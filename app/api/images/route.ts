import { getUserFromRequest } from "@/helpers/getUserFromRequest";
import Conversion from "@/lib/convertion";
import ImageService from "@/services/image.service";
import { ApiError, PromisedApiResponse } from "@/types/api.types";
import { ImageWithoutBuffer } from "@/types/image.types";
import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest): PromisedApiResponse<ImageWithoutBuffer> {
    const user = getUserFromRequest(request);
    if (!user)
        return NextResponse.json<ApiError>({ error: "Unauthorized" }, { status: 401 });

    const formData = await request.formData();
    const file = formData.get("image") as File | null;
    const isPublic = Boolean(formData.get("public"));

    if (!file)
        return NextResponse.json<ApiError>({ error: "Bad request" }, { status: 400 });

    const arrayBufferFile = await file.arrayBuffer();
    const pngFile = await Conversion.png(Buffer.from(arrayBufferFile));

    const image = await ImageService.create({
        content: pngFile,
        public: isPublic,
    });

    return NextResponse.json({
        id: image.id,
        public: image.public,
    }, { status: 201 });
}