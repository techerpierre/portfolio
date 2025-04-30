import { getUserFromRequest } from "@/helpers/getUserFromRequest";
import { secureParseInt } from "@/helpers/secureParseInt";
import Conversion from "@/lib/convertion";
import ImageService from "@/services/image.service";
import { ApiError, Many, PromisedApiResponse } from "@/types/api.types";
import { ImageWithoutBuffer } from "@/types/image.types";
import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest): PromisedApiResponse<Many<ImageWithoutBuffer>>{
    const user = getUserFromRequest(request);
    if (!user)
        return NextResponse.json<ApiError>({ error: "Unauthorized" }, { status: 401 });
    const { searchParams } = new URL(request.url);
    const page = searchParams.get("page");
    const pageSize = searchParams.get("pageSize");
    if (!page || !pageSize)
        return NextResponse.json<ApiError>({ error: "Missing page or pageSize query" }, { status: 400 });
    const intPage = secureParseInt(page);
    const intPageSize = secureParseInt(pageSize);
    if (intPage === null || intPageSize === null)
        return NextResponse.json<ApiError>({ error: "page or pageSize query must be integer" }, { status: 400 });

    const images = await ImageService.list({ page: intPage, pageSize: intPageSize });

    return NextResponse.json<Many<ImageWithoutBuffer>>({
        results: images.results.map((result): ImageWithoutBuffer => ({
            id: result.id,
            public: result.public,
        })),
        count: images.count,
    })
}

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