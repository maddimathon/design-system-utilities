/**
 * @since ___PKG_VERSION___
 * 
 * @packageDocumentation
 */
/*!
 * @maddimathon/design-system-utilities@___CURRENT_VERSION___
 * @license MIT
 */

import {
    jsValueToSass,
    type RecursiveRecord,

    // jsValueToSass,
    sassAssertValueType,
} from '@maddimathon/utility-sass';

import * as sass from "sass-embedded";

import { mapToObjectRecursive } from '../../01-utilities/mapToObjectRecursive.js';
import { objectFlatten } from '../../01-utilities/objectFlatten.js';
import { objectGeneratorAsync } from '../../01-utilities/objectGenerator.js';
import { objectMapAsync } from '../../01-utilities/objectMapAsync.js';

import type { TokenTypes } from '../../02-tokens/@types.js';
import type { Tokens_Colour } from '../../02-tokens/Tokens_Colour.js';
import type { Tokens_Themes } from '../../02-tokens/Tokens_Themes.js';

import { colourSlugToCSS } from '../../03-parsers/colourSlugToCSS.js';
// import { getTokensDataFromClrSlug } from '../../03-parsers/getTokensDataFromClrSlug.js';

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
                sassAssertValueType( 'map', args[ 0 ] )?.then( map => ( map instanceof Map ? mapToObjectRecursive( map ) : map ) as undefined | Tokens_Colour.ScssVars<TokenTypes.Colour.TypeParams> ),
                sassAssertValueType( 'map', args[ 1 ] )?.then( map => ( map instanceof Map ? mapToObjectRecursive( map ) : map ) as undefined | Tokens_Themes.ScssVars<TokenTypes.Colour.TypeParams, TokenTypes.Theme.TypeParams> ),
                sassAssertValueType( 'bool', args[ 2 ] ),
                sassAssertValueType( 'bool', args[ 3 ] ),
                sassAssertValueType( 'bool', args[ 4 ] ),
            ] );

            // console.vi.log( {
            //     themeTokens: themeTokens && Object.keys( themeTokens ),
            //     colourTokens: colourTokens && Object.keys( colourTokens ),
            //     replaceVarClrWithValue: replaceVarClrWithValue,
            // }, 1 );

            // return sass.sassNull;

            if ( !themeTokens ) {
                return sass.sassNull;
            }

            const slugTranslator = (
                brightness: TokenTypes.Theme.Mode.BrightnessOption,
                val: string,
            ): string | { $: string; hsl?: string; rgb?: string; } => {

                const clrVal = colourSlugToCSS(
                    { themes: themeTokens, colour: colourTokens },
                    brightness,
                    val,
                    replaceVarClrWithValue,
                );

                // returns
                if ( !includeHSL && !includeRGB ) {
                    return clrVal;
                }

                const clr: { $: string; hsl?: string; rgb?: string; } = {
                    $: clrVal,
                };

                if ( includeHSL ) {
                    const hslMatches = clr.$.match(
                        /^\s*hsl\(\s*([\d\.]+)\s*[,\s]\s*([\d\.]+)%?\s*[,\s]\s*([\d\.]+)%?\s*\)\s*$/i
                    ) as null | [ string, string, string, string ];

                    if ( hslMatches ) {
                        clr.hsl = `${ hslMatches[ 1 ] }, ${ hslMatches[ 2 ] }%, ${ hslMatches[ 3 ] }%`;
                        clr.$ = `hsl( ${ clr.hsl } )`;
                    }
                }

                if ( includeRGB ) {
                    const rgbMatches = clr.$.match(
                        /^\s*rgb\(\s*([\d\.]+)\s*[,\s]\s*([\d\.]+)\s*[,\s]\s*([\d\.]+)\s*\)\s*$/i
                    ) as null | [ string, string, string, string ];

                    if ( rgbMatches ) {
                        clr.rgb = `${ rgbMatches[ 1 ] }, ${ rgbMatches[ 2 ] }, ${ rgbMatches[ 3 ] }`;
                        clr.$ = `rgb( ${ clr.rgb } )`;
                    }
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

                        objectFlatten<string, string>( themeSetObj[ 'forced-colors' ] as RecursiveRecord<string, string> ),

                        objectGeneratorAsync(
                            brightness_all,

                            ( brightness ) => objectMapAsync(
                                themeSetObj[ brightness ],

                                ( [ contrast, themeSet ] ) => contrast && objectMapAsync(
                                    objectFlatten<string, string>( themeSet as RecursiveRecord<string, string> ),

                                    ( [ themeSlug, themeValue ] ) => {
                                        themeSlug;

                                        // returns
                                        if ( Array.isArray( themeValue ) ) {
                                            return themeValue.map(
                                                item => slugTranslator( brightness, item )
                                            );
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

            return jsValueToSass( mapped );
        },
    ];
}