/**
 * @since 0.1.1-alpha.1.draft
 *
 * @packageDocumentation
 */
/*!
 * @maddimathon/design-system-utilities@0.1.1-alpha.1.draft
 * @license MIT
 */
import type { Tokens } from '../02-tokens/Tokens.js';
/**
 * Gets a string of valid PHP code for wordpress defining constants for the given set of
 * SVGs.
 *
 * @since 0.1.1-alpha.1.draft
 */
export declare function getWordpressSvgConstants<T_SetName extends "icons" | "logos">(_setName: T_SetName, svgSet: Tokens.JsonReturn[T_SetName] | Tokens.Instance[T_SetName], phpNamespace: string, textDomain: string): Promise<string | undefined>;
