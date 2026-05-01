/**
 * @since ___PKG_VERSION___
 * 
 * @packageDocumentation
 */
/*!
 * @maddimathon/design-system-utilities@___CURRENT_VERSION___
 * @license MIT
 */

import type {
    RecursiveRecord,
} from '@maddimathon/utility-typescript/types';

import {
    mapToObjectAsync,
    objectFlatten,
    objectFlattenAsync,
    objectMapAsync,
} from '@maddimathon/utility-typescript';

import {
    CssColours,
    jsValueToSass,
    sassAssertValueType,
} from '@maddimathon/utility-sass';

import * as sass from "sass-embedded";

import { ColourUtilities } from '../../01-utilities/ColourUtilities.js';
import { objectGeneratorAsync } from '../../01-utilities/objectGenerator.js';

import type { TokenTypes } from '../../02-tokens/@types.js';
import type { Tokens_Colour } from '../../02-tokens/Tokens_Colour.js';
import type { Tokens_Themes } from '../../02-tokens/Tokens_Themes.js';

import { getColourCSS } from '../../03-parsers/getColourCSS.js';

/**
 * A function to include in {@link sass.Options} that flattens the scss theme
 * objects and sets their values to colour values.
 *
 * @since __PKG_VERSION___
 */
export function sassFn_themeFlattenGetValues(): [ string, sass.CustomFunction<'async'> ] {

    return [
        'mmdsu-global-themeFlattenGetValues( $colours, $themes, $replaceVarClrWithValue, $includeHSL, $includeRGB )',
        async ( args: sass.Value[] ) => {

            const [
                colourTokens,
                themeTokens,
                replaceVarClrWithValue = false,
                includeHSL = true,
                includeRGB = false,
            ] = await Promise.all( [

                sassAssertValueType( 'colours', 'map', args[ 0 ], true )?.then(
                    map => ( map instanceof Map ? mapToObjectAsync( map ) : map ) as undefined | Tokens_Colour.ScssVars<TokenTypes.Colour.TypeParams>
                ),

                sassAssertValueType( 'themes', 'map', args[ 1 ], true )?.then(
                    map => ( map instanceof Map ? mapToObjectAsync( map ) : map ) as undefined | Tokens_Themes.ScssVars<TokenTypes.Colour.TypeParams, TokenTypes.Theme.TypeParams>
                ),

                sassAssertValueType( 'replaceVarClrWithValue', 'bool', args[ 2 ], true ),
                sassAssertValueType( 'includeHSL', 'bool', args[ 3 ], true ),
                sassAssertValueType( 'includeRGB', 'bool', args[ 4 ], true ),
            ] );

            if ( !themeTokens ) {
                return sass.sassNull;
            }

            const varMaker = !replaceVarClrWithValue
                ? ( slug: undefined | string, value: null | string ) => slug?.length ? `var(--clr-${ slug }${ value ? `, ${ value }` : '' })` : String( value ?? slug ?? '' )
                : ( slug: undefined | string, value: null | string ) => String( value ?? slug ?? '' );

            const slugTranslator = async (
                brightness: TokenTypes.Theme.Mode.BrightnessOption,
                val: string,
            ): Promise<string | { $: string; hsl?: string; rgb?: string; }> => {

                const clrVal = getColourCSS(
                    { themes: themeTokens, colour: colourTokens },
                    brightness,
                    val,
                    !replaceVarClrWithValue,
                );

                // returns
                if ( !includeHSL && !includeRGB ) {
                    return clrVal;
                }

                const clr: { $: string; hsl?: string; rgb?: string; } = {
                    $: clrVal,
                };

                // returns
                if (
                    CssColours.isKeyword( clrVal )
                    || CssColours.isSystemColor( clrVal )
                ) {
                    if ( includeHSL ) {
                        clr.hsl = clrVal;
                    }
                    if ( includeRGB ) {
                        clr.rgb = clrVal;
                    }
                    return clr;
                }

                let clrValidate: Promise<ColourUtilities.Value_All> | null = null;

                const hslMatches = clrVal.match(
                    /(^|,\s*)hsl\(\s*([\d\.]+)\s*[,\s]\s*([\d\.]+)%?\s*[,\s]\s*([\d\.]+)%?\s*\)(\b|\s*\)|$)/i
                ) as null | [ string, string, string, string, string, string ];

                if ( hslMatches ) {
                    clrValidate = ColourUtilities.validateShade( {
                        h: Number( hslMatches[ 2 ] ),
                        s: Number( hslMatches[ 3 ] ),
                        l: Number( hslMatches[ 4 ] ),
                    } );
                } else {

                    const rgbMatches = clrVal.match(
                        /(^|,\s*)rgb\(\s*([\d\.]+)\s*[,\s]\s*([\d\.]+)\s*[,\s]\s*([\d\.]+)\s*\)(\b|\s*\)|$)/i
                    ) as null | [ string, string, string, string, string, string ];

                    if ( rgbMatches ) {
                        clrValidate = ColourUtilities.validateShade( {
                            r: Number( rgbMatches[ 2 ] ),
                            g: Number( rgbMatches[ 3 ] ),
                            b: Number( rgbMatches[ 4 ] ),
                        } );
                    } else if ( clrVal.match( /^#?[0-9|A-H]{3,6}$/i ) ) {
                        clrValidate = ColourUtilities.validateShade( clrVal );
                    }
                }

                const clrObj = await clrValidate;

                // returns
                if ( !clrObj ) {
                    return clrVal;
                }

                clr.$ = varMaker(
                    val,
                    ColourUtilities.toString.hsl( clrObj ),
                );

                if ( includeHSL ) {
                    clr.hsl = varMaker(
                        `${ val }-hsl`,
                        `${ clrObj.hsl.h }, ${ clrObj.hsl.s }%, ${ clrObj.hsl.l }%`,
                    );
                }

                if ( includeRGB ) {
                    clr.rgb = varMaker(
                        `${ val }-rgb`,
                        `${ clrObj.rgb.r }, ${ clrObj.rgb.g }, ${ clrObj.rgb.b }`,
                    );
                }

                return clr;
            };

            const mapped = await objectMapAsync(
                themeTokens,
                async ( [ themeName, themeSetObj ] ) => {
                    if ( typeof themeSetObj !== 'object' ) {
                        return themeSetObj;
                    }

                    const brightness_all = (
                        Object.keys( themeSetObj ) as ( 'forced-colors' | TokenTypes.Theme.Mode.BrightnessOption )[]
                    ).filter( key => key !== 'forced-colors' );

                    return Promise.all( [

                        objectMapAsync(
                            objectFlattenAsync<string, string>( themeSetObj[ 'forced-colors' ] as RecursiveRecord<string, string> ),
                            ( [ themeSlug, themeValue ] ) => {
                                // returns
                                if ( !includeHSL && !includeRGB ) {
                                    return themeValue;
                                }

                                const clr: { $: string; hsl?: string; rgb?: string; } = {
                                    $: themeValue,
                                };

                                if ( includeHSL ) {
                                    clr.hsl = themeValue;
                                }
                                if ( includeRGB ) {
                                    clr.rgb = themeValue;
                                }

                                return clr;
                            },
                        ).then(
                            themeSet => objectFlatten<string, string>( themeSet as RecursiveRecord<string, string> )
                        ),

                        objectGeneratorAsync(
                            brightness_all,

                            ( brightness ) => objectMapAsync(
                                themeSetObj[ brightness ],

                                ( [ contrast, themeSet ] ) => contrast && objectMapAsync(
                                    objectFlatten<string, string>( themeSet as RecursiveRecord<string, string> ),

                                    async ( [ themeSlug, themeValue ] ) => {
                                        themeSlug;

                                        // returns
                                        if ( Array.isArray( themeValue ) ) {
                                            return Promise.all( themeValue.map(
                                                item => slugTranslator( brightness, item )
                                            ) );
                                        }

                                        return slugTranslator( brightness, themeValue );
                                    }
                                ).then(
                                    themeSet => objectFlatten<string, string>( themeSet as RecursiveRecord<string, string> )
                                )
                            )
                        )

                    ] ).then(
                        ( [
                            forcedColors,
                            brightnessMaps,
                        ] ) => ( {
                            'forced-colors': forcedColors,
                            ...brightnessMaps,
                        } )
                    );
                }
            );

            return jsValueToSass( mapped, {
                coloursAsStrings: true,
                quoteStrings: false,
            } );
        },
    ];
}