/**
 * GENERATED CODE - DO NOT MODIFY
 */
import type { BlobRef, ValidationResult } from "@atproto/lexicon";
import { CID } from "multiformats/cid";
import { lexicons } from "../../../../lexicons";
import { hasProp, isObj } from "../../../../util";
import type * as ComAtprotoLabelDefs from "../../../com/atproto/label/defs";
import type * as AppBskyRichtextFacet from "../richtext/facet";

export interface Record {
    did: string;
    displayName: string;
    description?: string;
    descriptionFacets?: AppBskyRichtextFacet.Main[];
    avatar?: BlobRef;
    /** Declaration that a feed accepts feedback interactions from a client through app.bsky.feed.sendInteractions */
    acceptsInteractions?: boolean;
    labels?: ComAtprotoLabelDefs.SelfLabels | { $type: string; [k: string]: unknown };
    createdAt: string;
    [k: string]: unknown;
}

export function isRecord(v: unknown): v is Record {
    return (
        isObj(v) &&
        hasProp(v, "$type") &&
        (v.$type === "app.bsky.feed.generator#main" || v.$type === "app.bsky.feed.generator")
    );
}

export function validateRecord(v: unknown): ValidationResult {
    return lexicons.validate("app.bsky.feed.generator#main", v);
}