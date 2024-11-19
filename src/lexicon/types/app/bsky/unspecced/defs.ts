/**
 * GENERATED CODE - DO NOT MODIFY
 */
import { BlobRef, type ValidationResult } from "@atproto/lexicon";
import { CID } from "multiformats/cid";
import { lexicons } from "../../../../lexicons";
import { hasProp, isObj } from "../../../../util";

export interface SkeletonSearchPost {
    uri: string;
    [k: string]: unknown;
}

export function isSkeletonSearchPost(v: unknown): v is SkeletonSearchPost {
    return (
        isObj(v) && hasProp(v, "$type") && v.$type === "app.bsky.unspecced.defs#skeletonSearchPost"
    );
}

export function validateSkeletonSearchPost(v: unknown): ValidationResult {
    return lexicons.validate("app.bsky.unspecced.defs#skeletonSearchPost", v);
}

export interface SkeletonSearchActor {
    did: string;
    [k: string]: unknown;
}

export function isSkeletonSearchActor(v: unknown): v is SkeletonSearchActor {
    return (
        isObj(v) && hasProp(v, "$type") && v.$type === "app.bsky.unspecced.defs#skeletonSearchActor"
    );
}

export function validateSkeletonSearchActor(v: unknown): ValidationResult {
    return lexicons.validate("app.bsky.unspecced.defs#skeletonSearchActor", v);
}

export interface SkeletonSearchStarterPack {
    uri: string;
    [k: string]: unknown;
}

export function isSkeletonSearchStarterPack(v: unknown): v is SkeletonSearchStarterPack {
    return (
        isObj(v) &&
        hasProp(v, "$type") &&
        v.$type === "app.bsky.unspecced.defs#skeletonSearchStarterPack"
    );
}

export function validateSkeletonSearchStarterPack(v: unknown): ValidationResult {
    return lexicons.validate("app.bsky.unspecced.defs#skeletonSearchStarterPack", v);
}