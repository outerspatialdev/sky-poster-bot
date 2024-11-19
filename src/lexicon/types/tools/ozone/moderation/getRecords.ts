import { BlobRef, ValidationResult } from "@atproto/lexicon";
/**
 * GENERATED CODE - DO NOT MODIFY
 */
import { type HeadersMap, XRPCError } from "@atproto/xrpc";
import { CID } from "multiformats/cid";
import { lexicons } from "../../../../lexicons";
import { hasProp, isObj } from "../../../../util";
import type * as ToolsOzoneModerationDefs from "./defs";

export interface QueryParams {
    uris: string[];
}

export type InputSchema = undefined;

export interface OutputSchema {
    records: (
        | ToolsOzoneModerationDefs.RecordViewDetail
        | ToolsOzoneModerationDefs.RecordViewNotFound
        | { $type: string; [k: string]: unknown }
    )[];
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

export function toKnownErr(e: any) {
    return e;
}
