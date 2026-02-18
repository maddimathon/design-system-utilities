/**
 * @since ___PKG_VERSION___
 * 
 * @packageDocumentation
 */
/*!
 * @maddimathon/design-system-utilities@___CURRENT_VERSION___
 * @license MIT
 */

import type { RecursiveRecord } from '../../ts/01-utilities/@types.js';
import { ColourUtilities } from '../../ts/01-utilities/ColourUtilities.js';
import { objectFlatten } from '../../ts/01-utilities/objectFlatten.js';

import type { TokenTypes } from '../../ts/02-tokens/@types.d.ts';
import type { Tokens } from '../../ts/02-tokens/Tokens.js';

export function captureClrDataFromThemeValue<
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

const _clrVarMaker = ( slug?: string ) => slug?.length ? `var(--clr-${ slug })` : String( slug ?? '' );

export function getClrFromThemeValue<
    T_Types extends TokenTypes.TypeParams,
>(
    tokens: Tokens.JsonReturn<T_Types>,
    brightness: "light" | "dark" | T_Types[ 'theme' ][ 'brightness' ],
    _clrSlug: string | string[],
    varMaker: typeof _clrVarMaker = _clrVarMaker,
): string {

    const slug = Array.isArray( _clrSlug ) ? _clrSlug[ 0 ] : _clrSlug;

    // returns
    if ( !slug ) {
        return varMaker( slug );
    }

    // returns
    if ( slug === 'transparent' || slug === 'unset' ) {
        return 'inherit';
    }

    // returns
    if ( slug === 'black' || slug === 'white' ) {

        // returns
        if ( brightness === 'dark' ) {
            return ColourUtilities.toString.hsl(
                tokens.colour[ ColourUtilities.Levels.toDark( slug ) ]
            );
        }

        return ColourUtilities.toString.hsl( tokens.colour[ slug ] );
    }

    const { name, level } = captureClrDataFromThemeValue( brightness, slug ) ?? {};

    // returns
    if ( !name || !level ) {
        return varMaker( slug );
    }

    const clr = tokens.colour[ name ]?.[ level ];

    // returns
    if ( !clr ) {
        return varMaker( slug );
    }

    return ColourUtilities.toString.hsl( clr );
}

const _themeVarMaker = ( slug?: string ) => slug?.length ? `var(--theme-${ slug })` : String( slug ?? '' );

export function getColourSlugFromThemeSlug<
    T_Types extends TokenTypes.TypeParams,
>(
    themeValueSlug: string,
    brightness: "light" | "dark" | T_Types[ 'theme' ][ 'brightness' ],
    contrast: "low" | "average" | "high" | T_Types[ 'theme' ][ 'contrast' ],
    tokens: Tokens.JsonReturn<T_Types>,
) {
    // returns
    if ( !tokens.themes.default[ brightness ]?.[ contrast ] ) {
        return null;
    }

    const flattened = objectFlatten(
        tokens.themes.default[ brightness ][ contrast ].data as unknown as RecursiveRecord<number | string, string>
    );

    // returns
    if ( !( themeValueSlug in flattened ) || !flattened[ themeValueSlug ] ) {
        return null;
    }

    return flattened[ themeValueSlug ] as TokenTypes.Colour.TokenSlug<T_Types[ 'colour' ][ 'names' ], T_Types[ 'colour' ][ 'extraLevels' ]>;
}

export function getColourValueFromThemeSlug<
    T_Types extends TokenTypes.TypeParams,
>(
    themeValueSlug: string,
    brightness: "light" | "dark" | T_Types[ 'theme' ][ 'brightness' ],
    contrast: "low" | "average" | "high" | T_Types[ 'theme' ][ 'contrast' ],
    tokens: Tokens.JsonReturn<T_Types>,
): string {
    const clrSlug = getColourSlugFromThemeSlug(
        themeValueSlug,
        brightness,
        contrast,
        tokens,
    );

    // returns
    if ( !clrSlug ) {
        return _themeVarMaker( themeValueSlug );
    }

    return getClrFromThemeValue(
        tokens,
        brightness,
        clrSlug,
        _themeVarMaker,
    );
}