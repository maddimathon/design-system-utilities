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
 * Gets the value of the given theme slug.
 *
 * @since 0.1.0-beta.0.draft
 */
export declare function getTokensThemeValue<T_Types extends TokenTypes.TypeParams>(themeValueSlug: string, themeName: "default" | T_Types['theme']['name'], brightness: TokenTypes.Theme.GetBrightnessKeys<T_Types['theme']>, contrast: TokenTypes.Theme.GetContrastKeys<T_Types['theme']>, tokens: Tokens.JsonReturn<T_Types>): "base-100" | "base-150" | "base-200" | "base-250" | "base-300" | "base-400" | "base-500" | "base-600" | "base-700" | "base-750" | "base-800" | "base-850" | "base-900" | `${T_Types["colour"]["names"]}-100` | `${T_Types["colour"]["names"]}-150` | `${T_Types["colour"]["names"]}-200` | `${T_Types["colour"]["names"]}-250` | `${T_Types["colour"]["names"]}-300` | `${T_Types["colour"]["names"]}-400` | `${T_Types["colour"]["names"]}-500` | `${T_Types["colour"]["names"]}-600` | `${T_Types["colour"]["names"]}-700` | `${T_Types["colour"]["names"]}-750` | `${T_Types["colour"]["names"]}-800` | `${T_Types["colour"]["names"]}-850` | `${T_Types["colour"]["names"]}-900` | `${T_Types["colour"]["names"]}-${T_Types["colour"]["extraLevels"]}` | null;
