/**
 * @since ___PKG_VERSION___
 * 
 * @packageDocumentation
 */
/*!
 * @maddimathon/design-system-utilities@___CURRENT_VERSION___
 * @license MIT
 */

import * as z from 'zod';

import { ColourUtilities } from '../../../01-utilities/ColourUtilities.js';
import { objectMap } from '../../../01-utilities/objectMap.js';

import type { TokenLevels } from '../../@utils.js';

import { AbstractTokens } from '../../abstracts/AbstractTokens.js';
import { Tokens_Colour_ShadeMap_Shade } from './ShadeMap/ShadeMap_Shade.js';

/**
 * Generates a map of shades used as colour tokens for the design system.
 * 
 * @since ___PKG_VERSION___
 * @internal
 */
export class Tokens_Colour_ShadeMap<
    T_ColourName extends string,
> extends AbstractTokens<
    typeof Tokens_Colour_ShadeMap.Schema,
    Tokens_Colour_ShadeMap.Parsed<T_ColourName>,
    Tokens_Colour_ShadeMap.Part<T_ColourName>,
    Tokens_Colour_ShadeMap.JSON<T_ColourName>,
    Tokens_Colour_ShadeMap.ScssVars<T_ColourName>
> {

    get schema() {
        return Tokens_Colour_ShadeMap.Schema;
    }

    public readonly map: Tokens_Colour_ShadeMap.Parsed<T_ColourName>;

    public constructor (
        public readonly name: string,
        input?: Tokens_Colour_ShadeMap.Part<T_ColourName>,
    ) {
        super( input ?? {} );

        this.map = this.parseSchema(
            this.schema,
            input,
            {
                name: `Tokens_Colour_ShadeMap.${ this.name }`,
                location: 'src/ts/02-tokens/Tokens/Colour/Colour_ShadeMap.ts:48',
            },
        ) as Tokens_Colour_ShadeMap.Parsed<T_ColourName>;
    }

    /**
     * Adds the given shade map to this map's shades' contrast results.
     * 
     * @since ___PKG_VERSION___
     */
    public async addContrastTests(
        colourGroupName: T_ColourName,
        testMap: Tokens_Colour_ShadeMap.Parsed<T_ColourName>,
    ) {
        const promises: Promise<void>[] = [];

        for ( const t_thisLevel in this.map ) {
            const thisLevel = t_thisLevel as keyof typeof this.map;

            for ( const t_testLevel in testMap ) {
                const testLevel = t_testLevel as keyof typeof this.map;

                promises.push(
                    this.map[ thisLevel ].addContrastTest(
                        colourGroupName,
                        testLevel,
                        testMap[ testLevel ],
                    )
                );
            }
        }

        return Promise.all( promises );
    }

    public toJSON(): Tokens_Colour_ShadeMap.JSON<T_ColourName> {

        return objectMap(
            this.map,
            ( { value } ) => value.toJSON(),
        );
    }

    public toScssVars(): Tokens_Colour_ShadeMap.ScssVars<T_ColourName> {

        const levels: Tokens_Colour_ShadeMap.ScssVars<T_ColourName> = {
            '100': this.map[ "100" ].toScssVars(),
            '200': this.map[ "200" ].toScssVars(),
            '300': this.map[ "300" ].toScssVars(),
            '400': this.map[ "400" ].toScssVars(),
            '500': this.map[ "500" ].toScssVars(),
            '600': this.map[ "600" ].toScssVars(),
            '700': this.map[ "700" ].toScssVars(),
            '800': this.map[ "800" ].toScssVars(),
            '900': this.map[ "900" ].toScssVars(),
        };

        return levels;
    }

    public valueOf(): Tokens_Colour_ShadeMap.Parsed<T_ColourName> {
        return this.map;
    }
}

/**
 * Utilities for the {@link Tokens} class.
 * 
 * @since ___PKG_VERSION___
 * @internal
 */
export namespace Tokens_Colour_ShadeMap {

    // TODO - make this work by only setting 500
    export function completeMap<
        T_ColourName extends string,
    >(

        part: {
            [ K in TokenLevels ]?: (
                | Tokens_Colour_ShadeMap_Shade<T_ColourName>
                | Tokens_Colour_ShadeMap_Shade.Parsed<T_ColourName>
                | Omit<Tokens_Colour_ShadeMap_Shade.Parsed<T_ColourName>, 'contrast'>
                | undefined
            );
        },

        cfx: Partial<{ path: string | ( number | string )[]; }>,

    ): { [ K in keyof typeof part ]-?: Tokens_Colour_ShadeMap_Shade<T_ColourName>; } {

        const inputKeys = Object.keys( part ) as TokenLevels[];
        const name = Array.isArray( cfx.path ) ? cfx.path.join( ' ' ) : cfx.path;

        const bases = {
            // '100': { l: 98, c: 0.05, h: 75 },
            // '500': { l: 50, c: 1, h: 55 },
            // '900': { l: 2, c: 2.5, h: 38 },
            '100': { l: 98, c: 0, h: 0 },
            '500': { l: 50, c: 0, h: 0 },
            '900': { l: 2, c: 0, h: 0 },
        };

        let _l_100: Tokens_Colour_ShadeMap_Shade<T_ColourName>;
        let _l_900: Tokens_Colour_ShadeMap_Shade<T_ColourName>;

        /*
         * Making sure the minimum required levels are present. 
         */

        if ( !inputKeys.length ) {
            // we should set the default basics and generate a grey map, then
            _l_100 = new Tokens_Colour_ShadeMap_Shade<T_ColourName>( `${ name }-100`, bases[ '100' ] );
            part[ '500' ] = new Tokens_Colour_ShadeMap_Shade<T_ColourName>( `${ name }-500`, bases[ '500' ] );
            _l_900 = new Tokens_Colour_ShadeMap_Shade<T_ColourName>( `${ name }-900`, bases[ '900' ] );

        } else if ( !( '100' in part ) && !( '900' in part ) || !( part[ '100' ] && part[ '900' ] ) ) {
            // if these core colours aren't set, we have to generate them or the
            // reset of the system will break
            // TODO - generate these from whatever existing keys
            _l_100 = new Tokens_Colour_ShadeMap_Shade<T_ColourName>( `${ name }-100`, bases[ '100' ] );
            _l_900 = new Tokens_Colour_ShadeMap_Shade<T_ColourName>( `${ name }-900`, bases[ '900' ] );
        } else {
            // now we can safely assume these exist
            _l_100 = new Tokens_Colour_ShadeMap_Shade<T_ColourName>( `${ name }-100`, part[ '100' ] );
            _l_900 = new Tokens_Colour_ShadeMap_Shade<T_ColourName>( `${ name }-900`, part[ '900' ] );
        }

        const l_100 = _l_100;
        const l_900 = _l_900;

        const l_500 = new Tokens_Colour_ShadeMap_Shade<T_ColourName>(
            `${ name }-500`,
            (
                ( !( '500' in part ) || !part[ '500' ] )
                    // we should merge it from what's available
                    ? ColourUtilities.mixColours( l_100, l_900 )
                    // otherwise we can safely assume this exists
                    : part[ '500' ]
            )
        );

        const l_300 = new Tokens_Colour_ShadeMap_Shade<T_ColourName>(
            `${ name }-300`,
            (
                ( !( '300' in part ) || !part[ '300' ] )
                    // we should merge it from what's available
                    ? ColourUtilities.mixColours( l_100, l_500 )
                    // otherwise we can safely assume this exists
                    : part[ '300' ]
            )
        );

        const l_700 = new Tokens_Colour_ShadeMap_Shade<T_ColourName>(
            `${ name }-700`,
            (
                ( !( '700' in part ) || !part[ '700' ] )
                    // we should merge it from what's available
                    ? ColourUtilities.mixColours( l_500, l_900 )
                    // otherwise we can safely assume this exists
                    : part[ '700' ]
            )
        );

        const l_200 = new Tokens_Colour_ShadeMap_Shade<T_ColourName>(
            `${ name }-200`,
            (
                ( !( '200' in part ) || !part[ '200' ] )
                    // we should merge it from what's available
                    ? ColourUtilities.mixColours( l_100, l_300 )
                    // otherwise we can safely assume this exists
                    : part[ '200' ]
            )
        );

        const l_400 = new Tokens_Colour_ShadeMap_Shade<T_ColourName>(
            `${ name }-400`,
            (
                ( !( '400' in part ) || !part[ '400' ] )
                    // we should merge it from what's available
                    ? ColourUtilities.mixColours( l_300, l_500 )
                    // otherwise we can safely assume this exists
                    : part[ '400' ]
            )
        );

        const l_600 = new Tokens_Colour_ShadeMap_Shade<T_ColourName>(
            `${ name }-600`,
            (
                ( !( '600' in part ) || !part[ '600' ] )
                    // we should merge it from what's available
                    ? ColourUtilities.mixColours( l_500, l_700 )
                    // otherwise we can safely assume this exists
                    : part[ '600' ]
            )
        );

        const l_800 = new Tokens_Colour_ShadeMap_Shade<T_ColourName>(
            `${ name }-800`,
            (
                ( !( '800' in part ) || !part[ '800' ] )
                    // we should merge it from what's available
                    ? ColourUtilities.mixColours( l_700, l_900 )
                    // otherwise we can safely assume this exists
                    : part[ '800' ]
            )
        );

        return {
            '100': l_100,
            '200': l_200,
            '300': l_300,
            '400': l_400,
            '500': l_500,
            '600': l_600,
            '700': l_700,
            '800': l_800,
            '900': l_900,
        };
    }



    /* SCHEMA
     * ====================================================================== */

    export type Schema<
        T_ColourName extends string,
    > = {
            [ K in TokenLevels ]-?: Tokens_Colour_ShadeMap_Shade<T_ColourName>;
        };

    export const Schema = z.object( {
        '100': Tokens_Colour_ShadeMap_Shade.Schema,
        '200': Tokens_Colour_ShadeMap_Shade.Schema,
        '300': Tokens_Colour_ShadeMap_Shade.Schema,
        '400': Tokens_Colour_ShadeMap_Shade.Schema,
        '500': Tokens_Colour_ShadeMap_Shade.Schema,
        '600': Tokens_Colour_ShadeMap_Shade.Schema,
        '700': Tokens_Colour_ShadeMap_Shade.Schema,
        '800': Tokens_Colour_ShadeMap_Shade.Schema,
        '900': Tokens_Colour_ShadeMap_Shade.Schema,
    } ).partial().default( {} ).transform(
        ( part, cfx ): Schema<string> => completeMap( part, cfx )
    );



    /* TYPES
     * ====================================================================== */

    export type Parsed<
        T_ColourName extends string,
    > = Schema<T_ColourName>;

    export type Part<
        T_ColourName extends string,
    > = {
            [ K in keyof Schema<T_ColourName> ]?: Tokens_Colour_ShadeMap_Shade.Part;
        };

    export type JSON<
        T_ColourName extends string,
    > = {
            [ K in keyof Schema<T_ColourName> ]: Tokens_Colour_ShadeMap_Shade.JSON<T_ColourName>;
        };

    export type ScssVars<
        T_ColourName extends string,
    > = {
            [ K in keyof Schema<T_ColourName> ]: Tokens_Colour_ShadeMap_Shade.ScssVars;
        };
}