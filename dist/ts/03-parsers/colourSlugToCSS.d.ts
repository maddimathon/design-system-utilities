/**
 * @since 0.1.0-beta.0.draft
 *
 * @packageDocumentation
 */
/*!
 * @maddimathon/design-system-utilities@0.1.0-beta.0.draft
 * @license MIT
 */
import type { TokenTypes } from '../../ts/02-tokens/@types.js';
import type { Tokens } from '../../ts/02-tokens/Tokens.js';
import type { Tokens_Colour } from '../../ts/02-tokens/Tokens_Colour.js';
import type { Tokens_Themes } from '../../ts/02-tokens/Tokens_Themes.js';
/**
 * Takes a colour slug and returns a css-friendly colour code, if possible.
 *
 * @since 0.1.0-beta.0.draft
 */
export declare function colourSlugToCSS<T_Types extends TokenTypes.TypeParams>(tokens: Tokens.JsonReturn<T_Types> | {
    themes: Tokens_Themes.ScssVars<T_Types['colour'], T_Types['theme']>;
    colour: undefined | Tokens_Colour.ScssVars<T_Types['colour']>;
}, brightness: undefined | TokenTypes.Theme.GetBrightnessKeys<T_Types['theme']>, _clrSlug: string | string[], convertToVarFn?: boolean): string;
