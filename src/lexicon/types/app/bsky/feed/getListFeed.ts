import { BlobRef, ValidationResult } from "@atproto/lexicon";
/**
 * GENERATED CODE - DO NOT MODIFY
 */
import { type HeadersMap, XRPCError } from "@atproto/xrpc";
import { CID } from "multiformats/cid";
import { lexicons } from "../../../../lexicons";
import { hasProp, isObj } from "../../../../util";
import type * as AppBskyFeedDefs from "./defs";

export interface QueryParams {
    /** Reference (AT-URI) to the list record. */
    list: string;
    limit?: number;
    cursor?: string;
}

export type InputSchema = undefined;

export interface OutputSchema {
    cursor?: string;
    feed: AppBskyFeedDefs.FeedViewPost[];
    [k: string]: unknown;
}

export interface CallOptions {
    signal?: AbortSignal;
    headers?: HeadersMap;
}

export interface Response {
    success: boolean;
    headers: HeadersMap;
    data: OutputSchema;
}

export class UnknownListError extends XRPCError {
    constructor(src: XRPCError) {
        super(src.status, src.error, src.message, src.headers, { cause: src });
    }
}

export function toKnownErr(e: any) {
    if (e instanceof XRPCError) {
        if (e.error === "UnknownList") return new UnknownListError(e);
    }

    return e;
}