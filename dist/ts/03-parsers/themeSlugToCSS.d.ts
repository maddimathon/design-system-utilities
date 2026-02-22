/**
 * @since 0.1.1-alpha.1.draft
 *
 * @packageDocumentation
 */
/*!
 * @maddimathon/design-system-utilities@0.1.1-alpha.1.draft
 * @license MIT
 */
import type { TokenTypes } from '../02-tokens/@types.js';
import type { Tokens } from '../02-tokens/Tokens.js';
/**
 * Takes a theme slug and returns a css-friendly colour code of its value, if
 * possible.
 *
 * @since 0.1.1-alpha.1.draft
 */
export declare function themeSlugToCSS<T_Types extends TokenTypes.TypeParams>(themeValueSlug: string, themeName: "default" | T_Types['theme']['name'], brightness: "light" | "dark" | T_Types['theme']['brightness'], contrast: "low" | "average" | "high" | T_Types['theme']['contrast'], tokens: Tokens.JsonReturn<T_Types>, convertColourToVarFn?: boolean): string;
