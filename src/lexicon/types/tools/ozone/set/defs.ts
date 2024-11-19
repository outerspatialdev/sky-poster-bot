/**
 * GENERATED CODE - DO NOT MODIFY
 */
import { BlobRef, type ValidationResult } from "@atproto/lexicon";
import { CID } from "multiformats/cid";
import { lexicons } from "../../../../lexicons";
import { hasProp, isObj } from "../../../../util";

export interface Set {
    name: string;
    description?: string;
    [k: string]: unknown;
}

export function isSet(v: unknown): v is Set {
    return isObj(v) && hasProp(v, "$type") && v.$type === "tools.ozone.set.defs#set";
}

export function validateSet(v: unknown): ValidationResult {
    return lexicons.validate("tools.ozone.set.defs#set", v);
}

export interface SetView {
    name: string;
    description?: string;
    setSize: number;
    createdAt: string;
    updatedAt: string;
    [k: string]: unknown;
}

export function isSetView(v: unknown): v is SetView {
    return isObj(v) && hasProp(v, "$type") && v.$type === "tools.ozone.set.defs#setView";
}

export function validateSetView(v: unknown): ValidationResult {
    return lexicons.validate("tools.ozone.set.defs#setView", v);
}