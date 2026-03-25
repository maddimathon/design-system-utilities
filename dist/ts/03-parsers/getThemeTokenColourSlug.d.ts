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
 * Gets the colour slug value of the given theme slug.
 *
 * @since 0.1.0-beta.0.draft
 */
export declare function getThemeTokenColourSlug<T_Types extends TokenTypes.TypeParams>(themeValueSlug: string, themeName: "default" | T_Types['theme']['name'], brightness: TokenTypes.Theme.GetBrightnessKeys<T_Types['theme']>, contrast: TokenTypes.Theme.GetContrastKeys<T_Types['theme']>, tokens: Tokens.JsonReturn<T_Types>): null | TokenTypes.Colour.TokenSlug<T_Types['colour']>;
