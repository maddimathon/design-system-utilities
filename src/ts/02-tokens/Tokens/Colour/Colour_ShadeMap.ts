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

import type { TokenLevels } from '../../../old--00-schemata/@utils.js';

import { AbstractTokens } from '../../abstracts/AbstractTokens.js';
import { Tokens_Colour_ShadeMap_Shade } from './ShadeMap/Colour_ShadeMap_Shade.js';

/**
 * Generates a map of shades used as colour tokens for the design system.
 * 
 * @since ___PKG_VERSION___
 * @internal
 */
export class Tokens_Colour_ShadeMap extends AbstractTokens<
    typeof Tokens_Colour_ShadeMap.Schema,
    Tokens_Colour_ShadeMap.Parsed,
    Tokens_Colour_ShadeMap.Part,
    Tokens_Colour_ShadeMap.JSON,
    Tokens_Colour_ShadeMap.ScssVars
> {

    get schema() {
        return Tokens_Colour_ShadeMap.Schema;
    }

    public readonly map: z.output<typeof Tokens_Colour_ShadeMap.Schema>;

    public constructor (
        public readonly name: string,
        input?: Tokens_Colour_ShadeMap.Part,
    ) {
        super( input ?? {} );

        this.map = this.parseSchema(
            this.schema,
            input,
            {
                name: `Tokens_Colour_ShadeMap.${ this.name }`,
                location: 'src/ts/02-tokens/Tokens/Colour/Colour_ShadeMap.ts:48',
            },
        );
    }

    public toJSON(): Tokens_Colour_ShadeMap.JSON {
        return this.valueOf();
    }

    public toScssVars(): Tokens_Colour_ShadeMap.ScssVars {

        const levels: Tokens_Colour_ShadeMap.ScssVars = {
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

    public valueOf(): Tokens_Colour_ShadeMap.Parsed {
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

    export function mixColours(
        _clrA: Tokens_Colour_ShadeMap_Shade | z.input<typeof Tokens_Colour_ShadeMap_Shade.Schema>,
        _clrB: Tokens_Colour_ShadeMap_Shade | z.input<typeof Tokens_Colour_ShadeMap_Shade.Schema>,
    ): z.input<typeof Tokens_Colour_ShadeMap_Shade.Schema> {

        const clrA = Tokens_Colour_ShadeMap_Shade.toLCH( _clrA );
        const clrB = Tokens_Colour_ShadeMap_Shade.toLCH( _clrB );

        return Tokens_Colour_ShadeMap_Shade.toLCH( {
            l: ( clrA.l + clrB.l ) / 2,
            c: ( clrA.c + clrB.c ) / 2,
            h: ( clrA.h + clrB.h ) / 2,
        } );
    }

    // TODO - make this work by only setting 500
    export function completeMap(

        part: {
            [ K in TokenLevels ]?: (
                | Tokens_Colour_ShadeMap_Shade
                | Tokens_Colour_ShadeMap_Shade.Parsed
                | undefined
            );
        },

        cfx: Partial<{ path: string | ( number | string )[]; }>,

    ): { [ K in keyof typeof part ]-?: Tokens_Colour_ShadeMap_Shade; } {

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

        let _l_100: Tokens_Colour_ShadeMap_Shade;
        let _l_900: Tokens_Colour_ShadeMap_Shade;

        /*
         * Making sure the minimum required levels are present. 
         */

        if ( !inputKeys.length ) {
            // we should set the default basics and generate a grey map, then
            _l_100 = new Tokens_Colour_ShadeMap_Shade( `${ name }-100`, bases[ '100' ] );
            part[ '500' ] = new Tokens_Colour_ShadeMap_Shade( `${ name }-500`, bases[ '500' ] );
            _l_900 = new Tokens_Colour_ShadeMap_Shade( `${ name }-900`, bases[ '900' ] );

        } else if ( !( '100' in part ) && !( '900' in part ) || !( part[ '100' ] && part[ '900' ] ) ) {
            // if these core colours aren't set, we have to generate them or the
            // reset of the system will break
            // TODO - generate these from whatever existing keys
            _l_100 = new Tokens_Colour_ShadeMap_Shade( `${ name }-100`, bases[ '100' ] );
            _l_900 = new Tokens_Colour_ShadeMap_Shade( `${ name }-900`, bases[ '900' ] );
        } else {
            // now we can safely assume these exist
            _l_100 = new Tokens_Colour_ShadeMap_Shade( `${ name }-100`, part[ '100' ] );
            _l_900 = new Tokens_Colour_ShadeMap_Shade( `${ name }-900`, part[ '900' ] );
        }

        const l_100 = _l_100;
        const l_900 = _l_900;

        const l_500 = new Tokens_Colour_ShadeMap_Shade(
            `${ name }-500`,
            (
                ( !( '500' in part ) || !part[ '500' ] )
                    // we should merge it from what's available
                    ? Tokens_Colour_ShadeMap.mixColours( l_100, l_900 )
                    // otherwise we can safely assume this exists
                    : part[ '500' ]
            )
        );

        const l_300 = new Tokens_Colour_ShadeMap_Shade(
            `${ name }-300`,
            (
                ( !( '300' in part ) || !part[ '300' ] )
                    // we should merge it from what's available
                    ? Tokens_Colour_ShadeMap.mixColours( l_100, l_500 )
                    // otherwise we can safely assume this exists
                    : part[ '300' ]
            )
        );

        const l_700 = new Tokens_Colour_ShadeMap_Shade(
            `${ name }-700`,
            (
                ( !( '700' in part ) || !part[ '700' ] )
                    // we should merge it from what's available
                    ? Tokens_Colour_ShadeMap.mixColours( l_500, l_900 )
                    // otherwise we can safely assume this exists
                    : part[ '700' ]
            )
        );

        const l_200 = new Tokens_Colour_ShadeMap_Shade(
            `${ name }-200`,
            (
                ( !( '200' in part ) || !part[ '200' ] )
                    // we should merge it from what's available
                    ? Tokens_Colour_ShadeMap.mixColours( l_100, l_300 )
                    // otherwise we can safely assume this exists
                    : part[ '200' ]
            )
        );

        const l_400 = new Tokens_Colour_ShadeMap_Shade(
            `${ name }-400`,
            (
                ( !( '400' in part ) || !part[ '400' ] )
                    // we should merge it from what's available
                    ? Tokens_Colour_ShadeMap.mixColours( l_300, l_500 )
                    // otherwise we can safely assume this exists
                    : part[ '400' ]
            )
        );

        const l_600 = new Tokens_Colour_ShadeMap_Shade(
            `${ name }-600`,
            (
                ( !( '600' in part ) || !part[ '600' ] )
                    // we should merge it from what's available
                    ? Tokens_Colour_ShadeMap.mixColours( l_500, l_700 )
                    // otherwise we can safely assume this exists
                    : part[ '600' ]
            )
        );

        const l_800 = new Tokens_Colour_ShadeMap_Shade(
            `${ name }-800`,
            (
                ( !( '800' in part ) || !part[ '800' ] )
                    // we should merge it from what's available
                    ? Tokens_Colour_ShadeMap.mixColours( l_700, l_900 )
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
    } ).partial().default( {} ).transform( ( part, cfx ): {
        [ K in keyof typeof part ]-?: Tokens_Colour_ShadeMap_Shade;
    } => completeMap( part, cfx ) );



    /* TYPES
     * ====================================================================== */

    export type Parsed = z.output<typeof Schema>;

    export type Part = {
        [ K in keyof z.output<typeof Schema> ]?: Tokens_Colour_ShadeMap_Shade.Part;
    };

    export type JSON = {
        [ K in keyof z.output<typeof Schema> ]: Tokens_Colour_ShadeMap_Shade.JSON;
    };

    export type ScssVars = {
        [ K in keyof z.output<typeof Schema> ]: Tokens_Colour_ShadeMap_Shade.ScssVars;
    };
}