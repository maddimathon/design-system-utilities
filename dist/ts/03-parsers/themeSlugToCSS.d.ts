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
 * Takes a theme slug and returns a css-friendly colour code of its value, if
 * possible.
 *
 * @since 0.1.0-beta.0.draft
 */
export declare function themeSlugToCSS<T_Types extends TokenTypes.TypeParams>(themeValueSlug: string, themeName: "default" | T_Types['theme']['name'], brightness: TokenTypes.Theme.GetBrightnessKeys<T_Types['theme']>, contrast: TokenTypes.Theme.GetContrastKeys<T_Types['theme']>, tokens: Tokens.JsonReturn<T_Types>, convertColourToVarFn?: boolean): string;
