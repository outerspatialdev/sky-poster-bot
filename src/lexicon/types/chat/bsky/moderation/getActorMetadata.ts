import { BlobRef, type ValidationResult } from "@atproto/lexicon";
/**
 * GENERATED CODE - DO NOT MODIFY
 */
import { type HeadersMap, XRPCError } from "@atproto/xrpc";
import { CID } from "multiformats/cid";
import { lexicons } from "../../../../lexicons";
import { hasProp, isObj } from "../../../../util";

export interface QueryParams {
    actor: string;
}

export type InputSchema = undefined;

export interface OutputSchema {
    day: Metadata;
    month: Metadata;
    all: Metadata;
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

export interface Metadata {
    messagesSent: number;
    messagesReceived: number;
    convos: number;
    convosStarted: number;
    [k: string]: unknown;
}

export function isMetadata(v: unknown): v is Metadata {
    return (
        isObj(v) &&
        hasProp(v, "$type") &&
        v.$type === "chat.bsky.moderation.getActorMetadata#metadata"
    );
}

export function validateMetadata(v: unknown): ValidationResult {
    return lexicons.validate("chat.bsky.moderation.getActorMetadata#metadata", v);
}