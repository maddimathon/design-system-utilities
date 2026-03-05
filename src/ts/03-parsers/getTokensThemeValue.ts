/**
 * @since ___PKG_VERSION___
 * 
 * @packageDocumentation
 */
/*!
 * @maddimathon/design-system-utilities@___CURRENT_VERSION___
 * @license MIT
 */

import { objectFlatten } from '@maddimathon/utility-typescript';

import type { RecursiveRecord } from '../01-utilities/@types.js';

import type { TokenTypes } from '../02-tokens/@types.js';
import type { Tokens } from '../02-tokens/Tokens.js';

/**
 * Gets the value of the given theme slug.
 * 
 * @since ___PKG_VERSION___
 */
export function getTokensThemeValue<
    T_Types extends TokenTypes.TypeParams,
>(
    themeValueSlug: string,
    themeName: "default" | T_Types[ 'theme' ][ 'name' ],
    brightness: TokenTypes.Theme.GetBrightnessKeys<T_Types[ 'theme' ]>,
    contrast: TokenTypes.Theme.GetContrastKeys<T_Types[ 'theme' ]>,
    tokens: Tokens.JsonReturn<T_Types>,
) {
    if ( !tokens.themes[ themeName ] ) {
        themeName = 'default';
    }

    // returns
    if ( !tokens.themes[ themeName ][ brightness ]?.[ contrast ] ) {
        return null;
    }

    const flattened = objectFlatten(
        tokens.themes[ themeName ][ brightness ][ contrast ].data as unknown as RecursiveRecord<number | string, string>
    );

    // returns
    if ( !( themeValueSlug in flattened ) || !flattened[ themeValueSlug ] ) {
        return null;
    }

    return flattened[ themeValueSlug ] as TokenTypes.Colour.TokenSlug<T_Types[ 'colour' ][ 'names' ], T_Types[ 'colour' ][ 'extraLevels' ]>;
}