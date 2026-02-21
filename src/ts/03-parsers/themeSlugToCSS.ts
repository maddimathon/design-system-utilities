/**
 * @since ___PKG_VERSION___
 * 
 * @packageDocumentation
 */
/*!
 * @maddimathon/design-system-utilities@___CURRENT_VERSION___
 * @license MIT
 */

import type { TokenTypes } from '../02-tokens/@types.js';
import type { Tokens } from '../02-tokens/Tokens.js';

import { colourSlugToCSS } from './colourSlugToCSS.js';
import { getTokensThemeValue } from './getTokensThemeValue.js';

const _themeVarMaker = ( slug?: string ) => slug?.length ? `var(--theme-${ slug })` : String( slug ?? '' );

/**
 * Takes a theme slug and returns a css-friendly colour code of its value, if
 * possible.
 *
 * @since ___PKG_VERSION___
 */
export function themeSlugToCSS<
    T_Types extends TokenTypes.TypeParams,
>(
    themeValueSlug: string,
    themeName: "default" | T_Types[ 'theme' ][ 'name' ],
    brightness: "light" | "dark" | T_Types[ 'theme' ][ 'brightness' ],
    contrast: "low" | "average" | "high" | T_Types[ 'theme' ][ 'contrast' ],
    tokens: Tokens.JsonReturn<T_Types>,
    convertColourToVarFn: boolean = true,
): string {
    const clrSlug = getTokensThemeValue<T_Types>(
        themeValueSlug,
        themeName,
        brightness,
        contrast,
        tokens,
    );

    // returns
    if ( !clrSlug ) {
        return _themeVarMaker( themeValueSlug );
    }

    return _themeVarMaker( colourSlugToCSS(
        tokens,
        brightness,
        clrSlug,
        convertColourToVarFn,
    ) );
}