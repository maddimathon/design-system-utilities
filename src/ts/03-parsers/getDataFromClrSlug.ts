/**
 * @since ___PKG_VERSION___
 * 
 * @packageDocumentation
 */
/*!
 * @maddimathon/design-system-utilities@___CURRENT_VERSION___
 * @license MIT
 */

import { CssColours } from '@maddimathon/utility-sass';

import type { ColourUtilities } from '../01-utilities/ColourUtilities.js';

import type { TokenTypes } from '../02-tokens/@types.js';

/**
 * Gets the shade name and level of the given colour token, if applicable.
 * 
 * @since ___PKG_VERSION___
 */
export function getDataFromClrSlug<
    T_Types extends TokenTypes.TypeParams = TokenTypes.TypeParams,
>(
    clrSlug: string,
): undefined | getDataFromClrSlug.Result<T_Types> {
    // returns
    if (
        CssColours.isKeyword( clrSlug )
        || CssColours.isSystemColor( clrSlug )
    ) {
        return undefined;
    }

    // returns
    if ( clrSlug === 'black' || clrSlug === 'white' ) {

        return {
            name: '$',
            level: clrSlug,
        };
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

    return {
        name: matches[ 1 ],
        level: matches[ 2 ],
    };
}

export namespace getDataFromClrSlug {

    export type Result<
        T_Types extends TokenTypes.TypeParams,
    > =
        | {
            name: TokenTypes.Colour.GenericName<T_Types[ 'colour' ][ 'names' ]>;
            level: ColourUtilities.Levels.Required | T_Types[ 'colour' ][ 'extraLevels' ];
        }
        | {
            name: '$';
            level: "black" | "white";
        };
}