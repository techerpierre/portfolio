import { NextResponse } from "next/server";

export interface ApiError {
    error: string;
}

export interface ApiResponse<T> extends NextResponse<T | ApiError> {}
export type PromisedApiResponse<T> = Promise<ApiResponse<T>>

export interface Many<T> {
    results: T[];
    count: number;
}