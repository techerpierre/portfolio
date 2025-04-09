import { getUserFromRequest } from "@/helpers/getUserFromRequest";
import ImageService from "@/services/image.service";
import { ApiError } from "@/types/api.types";
import { NextRequest, NextResponse } from "next/server";

interface GetImageParams {
    params: Promise<{
        id: string;
    }>;
}

export async function GET(request: NextRequest, { params }: GetImageParams): Promise<NextResponse<ReadableStream | ApiError>> {
    const isAuthenticated = !!await getUserFromRequest(request);
    const image = await ImageService.findById((await params).id);
    if (!image || (!image.public && !isAuthenticated))
        return NextResponse.json<ApiError>({ error: "This images is not found" }, { status: 404 });
    const stream = new ReadableStream({
        start(controller) {
            controller.enqueue(image.content);
            controller.close();
        }
    });
    return new NextResponse(stream, {
        status: 200,
        headers: {
            "Content-Type": "image/png",
            "Content-Length": image.content.length.toString(),
            "Cache-Control": "no-cache",
        },
    });
}