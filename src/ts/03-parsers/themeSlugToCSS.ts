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

import { getColourCSS } from './getColourCSS.js';
import { getThemeTokenColourSlug } from './getThemeTokenColourSlug.js';

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
    brightness: TokenTypes.Theme.GetBrightnessKeys<T_Types[ 'theme' ]>,
    contrast: TokenTypes.Theme.GetContrastKeys<T_Types[ 'theme' ]>,
    tokens: Tokens.JsonReturn<T_Types>,
    convertColourToVarFn: boolean = true,
): string {
    const clrSlug = getThemeTokenColourSlug<T_Types>(
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

    return _themeVarMaker( getColourCSS(
        tokens,
        brightness,
        clrSlug,
        convertColourToVarFn,
    ) );
}