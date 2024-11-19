import { BlobRef, ValidationResult } from "@atproto/lexicon";
/**
 * GENERATED CODE - DO NOT MODIFY
 */
import { type HeadersMap, XRPCError } from "@atproto/xrpc";
import { CID } from "multiformats/cid";
import { lexicons } from "../../../../lexicons";
import { hasProp, isObj } from "../../../../util";

export interface QueryParams {
    /** The handle or DID of the repo. */
    repo: string;
    /** The NSID of the record collection. */
    collection: string;
    /** The Record Key. */
    rkey: string;
    /** The CID of the version of the record. If not specified, then return the most recent version. */
    cid?: string;
}

export type InputSchema = undefined;

export interface OutputSchema {
    uri: string;
    cid?: string;
    value: {};
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

export class RecordNotFoundError extends XRPCError {
    constructor(src: XRPCError) {
        super(src.status, src.error, src.message, src.headers, { cause: src });
    }
}

export function toKnownErr(e: any) {
    if (e instanceof XRPCError) {
        if (e.error === "RecordNotFound") return new RecordNotFoundError(e);
    }

    return e;
}