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

import type { TokenTypes } from '../../ts/02-tokens/@types.js';
import type { Tokens } from '../../ts/02-tokens/Tokens.js';

import { getTokensDataFromClrSlug } from '../../ts/03-parsers/getTokensDataFromClrSlug.js';
import type { Tokens_Colour, Tokens_Themes } from '../internal.docs.js';

const _clrVarMaker = ( slug?: string ) => slug?.length ? `var(--clr-${ slug })` : String( slug ?? '' );

/**
 * Takes a colour slug and returns a css-friendly colour code, if possible.
 * 
 * @since ___PKG_VERSION___
 */
export function colourSlugToCSS<
    T_Types extends TokenTypes.TypeParams,
>(
    tokens: Tokens.JsonReturn<T_Types> | {
        themes: Tokens_Themes.ScssVars<T_Types[ 'colour' ], T_Types[ 'theme' ]>;
        colour: undefined | Tokens_Colour.ScssVars<T_Types[ 'colour' ]>;
    },
    brightness: "light" | "dark" | T_Types[ 'theme' ][ 'brightness' ],
    _clrSlug: string | string[],
    convertToVarFn: boolean = true,
): string {
    const slug = Array.isArray( _clrSlug ) ? _clrSlug[ 0 ] : _clrSlug;

    const varMaker = convertToVarFn
        ? _clrVarMaker
        : ( slug?: string ) => String( slug ?? '' );

    // returns
    if ( !slug ) {
        return varMaker( slug );
    }

    // returns
    if ( slug === 'transparent' || slug === 'unset' ) {
        return slug;
    }

    // returns
    if ( !tokens.colour ) {
        return varMaker( slug );
    }

    const formatter = 'spacing' in tokens
        ? ColourUtilities.toString.hsl
        : ( str: any ) => String( str );

    // returns
    if ( slug === 'black' || slug === 'white' ) {

        // returns
        if ( brightness === 'dark' ) {
            return formatter(
                tokens.colour[ ColourUtilities.Levels.toDark( slug ) ]
            );
        }

        return formatter( tokens.colour[ slug ] );
    }

    const { name, level } = getTokensDataFromClrSlug( brightness, slug ) ?? {};

    // returns
    if ( !name || !level ) {
        return varMaker( slug );
    }

    const clr = tokens.colour[ name ]?.[ level ];

    // returns
    if ( !clr ) {
        return varMaker( slug );
    }

    return formatter( clr );
}