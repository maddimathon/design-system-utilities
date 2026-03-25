/**
 * @since 0.1.0-beta.0.draft
 *
 * @packageDocumentation
 */
/*!
 * @maddimathon/design-system-utilities@0.1.0-beta.0.draft
 * @license MIT
 */
import type { TokenTypes } from '../02-tokens/@types.js';
import type { Tokens } from '../02-tokens/Tokens.js';
/**
 * Takes a font size slug and returns a css-friendly variable with fallback value.
 *
 * @since 0.1.0-beta.0.draft
 */
export declare function getFontSizeCSS<T_Types extends TokenTypes.TypeParams>(tokens: Tokens.JsonReturn<T_Types>, fontSize: string): string;
