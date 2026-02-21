/**
 * @since ___PKG_VERSION___
 * 
 * @packageDocumentation
 */
/*!
 * @maddimathon/design-system-utilities@___CURRENT_VERSION___
 * @license MIT
 */

import { ColourUtilities } from '../../ts/01-utilities/ColourUtilities.js';

import type { TokenTypes } from '../02-tokens/@types.js';

/**
 * Gets the shade name and level of the given colour token, if applicable.
 * 
 * @since ___PKG_VERSION___
 */
export function getTokensDataFromClrSlug<
    T_Types extends TokenTypes.TypeParams,
>(
    brightness: "light" | "dark" | T_Types[ 'theme' ][ 'brightness' ],
    clrSlug: string,
): undefined | {
    name: T_Types[ 'colour' ][ 'names' ];
    level: ColourUtilities.Levels.Required | T_Types[ 'colour' ][ 'extraLevels' ];
} {
    // returns
    if ( clrSlug === 'transparent' || clrSlug === 'unset' ) {
        return undefined;
    }

    const matches = clrSlug?.match( /^([^\s]+)-(\d{3})$/i ) as null | [
        string,
        T_Types[ 'colour' ][ 'names' ],
        ColourUtilities.Levels.Required | T_Types[ 'colour' ][ 'extraLevels' ],
    ];

    // returns
    if ( !matches ) {
        return undefined;
    }

    const level = brightness == 'dark'
        ? ColourUtilities.Levels.toDark( matches[ 2 ] )
        : matches[ 2 ];

    return {
        name: matches[ 1 ],
        level,
    };
}