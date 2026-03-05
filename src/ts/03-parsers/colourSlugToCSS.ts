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

import { ColourUtilities } from '../../ts/01-utilities/ColourUtilities.js';

import type { TokenTypes } from '../../ts/02-tokens/@types.js';
import type { Tokens } from '../../ts/02-tokens/Tokens.js';
import type { Tokens_Colour } from '../../ts/02-tokens/Tokens_Colour.js';
import type { Tokens_Colour_ShadeMap } from '../../ts/02-tokens/Colour/Colour_ShadeMap.js';
import type { Tokens_Themes } from '../../ts/02-tokens/Tokens_Themes.js';

import { getDataFromClrSlug } from '../../ts/03-parsers/getDataFromClrSlug.js';

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
    brightness: undefined | TokenTypes.Theme.GetBrightnessKeys<T_Types[ 'theme' ]>,
    _clrSlug: string | string[],
    convertToVarFn: boolean = true,
): string {
    const clrSlug = Array.isArray( _clrSlug ) ? _clrSlug[ 0 ] : _clrSlug;

    const varMaker = convertToVarFn
        ? ( slug: undefined | string, value: null | string ) => slug?.length ? `var(--clr-${ slug }${ value ? `, ${ value }` : '' })` : String( value ?? slug ?? '' )
        : ( slug: undefined | string, value: null | string ) => String( value ?? slug ?? '' );

    // returns
    if ( !clrSlug ) {
        return varMaker( clrSlug, null );
    }

    // returns
    if (
        CssColours.isKeyword( clrSlug )
        || CssColours.isSystemColor( clrSlug )
    ) {
        return clrSlug;
    }

    // returns
    if ( !tokens.colour ) {
        return varMaker( clrSlug, null );
    }

    const formatter =
        ( val: string | Tokens_Colour_ShadeMap.Shade.JsonReturn<T_Types[ 'colour' ]> ) =>
            varMaker(
                clrSlug,
                typeof val === 'object'
                    ? ColourUtilities.toString.hsl( val )
                    : val.replace(
                        /(^|,\s*)hsl\(\s*([\d\.]+)\s*[,\s]\s*([\d\.]+)%?\s*[,\s]\s*([\d\.]+)%?\s*\)(\b|\s*\)|$)/i,
                        '$1hsl( $2, $3%, $4% )$5',
                    ),
            );

    // returns
    if ( clrSlug === 'black' || clrSlug === 'white' ) {

        // returns
        if ( brightness === 'dark' ) {
            return formatter(
                tokens.colour.$[ ColourUtilities.Levels.toDark( clrSlug ) ],
            );
        }

        return formatter( tokens.colour.$[ clrSlug ] );
    }

    const data = getDataFromClrSlug<T_Types>( clrSlug );

    // returns
    if ( !data ) {
        return varMaker( clrSlug, null );
    }

    let clr: undefined
        | Tokens_Colour_ShadeMap.Shade.JsonReturn<T_Types[ 'colour' ]>
        | Tokens_Colour_ShadeMap.Shade.ScssVars;

    if ( data.name === '$' ) {
        const { name, level } = data;

        clr = brightness === 'dark'
            ? tokens.colour[ name ]?.[ ColourUtilities.Levels.toDark( level ) ]
            : tokens.colour[ name ]?.[ level ];

    } else {
        const { name, level } = data;

        clr = brightness === 'dark'
            ? tokens.colour[ name ]?.[ ColourUtilities.Levels.toDark( level ) ]
            : tokens.colour[ name ]?.[ level ];
    }

    // returns
    if ( !clr ) {
        return varMaker( clrSlug, null );
    }

    return formatter( clr );
}