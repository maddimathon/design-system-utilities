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

import { AbstractTokens } from '../../abstracts/AbstractTokens.js';
import type { TokenLevels } from 'src/ts/00-schemata/@utils.js';
import { Tokens_Colour_ShadeMap_Shade } from './ShadeMap/Colour_ShadeMap_Shade.js';

/**
 * Generates a map of shades used as colour tokens for the design system.
 * 
 * @since ___PKG_VERSION___
 * @internal
 */
export class Tokens_Colour_ShadeMap extends AbstractTokens<
    typeof Tokens_Colour_ShadeMap.Schema,
    Tokens_Colour_ShadeMap.Export,
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
                location: 'src/ts/02-tokens/Tokens/Colour/Colour_ShadeMap.ts:44',
            },
        );
    }

    public valueOf(): Tokens_Colour_ShadeMap.Export {
        return this.map;
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
}

/**
 * Utilities for the {@link Tokens} class.
 * 
 * @since ___PKG_VERSION___
 * @internal
 */
export namespace Tokens_Colour_ShadeMap {

    export function mixColours(
        name: string,
        clrA: Tokens_Colour_ShadeMap_Shade | z.input<typeof Tokens_Colour_ShadeMap_Shade.Schema>,
        clrB: Tokens_Colour_ShadeMap_Shade | z.input<typeof Tokens_Colour_ShadeMap_Shade.Schema>,
    ): Tokens_Colour_ShadeMap_Shade {
        // TODO - make it actually work
        clrA;
        clrB;
        return new Tokens_Colour_ShadeMap_Shade( name, { h: 0, s: 100, l: 50 } );
    }

    export function completeMap(
        part: { [ K in TokenLevels ]?: z.output<typeof Tokens_Colour_ShadeMap_Shade.Schema> | undefined },
        cfx: Partial<{ path: string | ( number | string )[]; }>,
    ): {
            [ K in keyof typeof part ]-?: Tokens_Colour_ShadeMap_Shade;
        } {
        const inputKeys = Object.keys( part ) as TokenLevels[];
        const name = Array.isArray( cfx.path ) ? cfx.path.join( ' ' ) : cfx.path;

        let _l_100: Tokens_Colour_ShadeMap_Shade;
        let _l_900: Tokens_Colour_ShadeMap_Shade;

        /*
         * Making sure the minimum required levels are present. 
         */

        if ( !inputKeys.length ) {
            // we should set the default basics and generate a grey map, then
            _l_100 = new Tokens_Colour_ShadeMap_Shade( `${ name }-100`, { h: 0, s: 0, l: 98 } );
            _l_900 = new Tokens_Colour_ShadeMap_Shade( `${ name }-900`, { h: 0, s: 0, l: 2 } );

        } else if ( !( '100' in part ) && !( '900' in part ) || !( part[ '100' ] && part[ '900' ] ) ) {
            // if these core colours aren't set, we have to generate them or the
            // reset of the system will break
            _l_100 = new Tokens_Colour_ShadeMap_Shade( `${ name }-100`, { h: 0, s: 0, l: 98 } );
            _l_900 = new Tokens_Colour_ShadeMap_Shade( `${ name }-900`, { h: 0, s: 0, l: 2 } );
        } else {
            // now we can safely assume these exist
            _l_100 = new Tokens_Colour_ShadeMap_Shade( `${ name }-100`, part[ '100' ] );
            _l_900 = new Tokens_Colour_ShadeMap_Shade( `${ name }-900`, part[ '900' ] );
        }

        const l_100 = _l_100;
        const l_900 = _l_900;

        const l_500: Tokens_Colour_ShadeMap_Shade = ( !( '500' in part ) || !part[ '500' ] )
            // we should merge it from what's available
            ? Tokens_Colour_ShadeMap.mixColours( `${ name }-500`, l_100, l_900 )
            // now we can safely assume this exists
            : new Tokens_Colour_ShadeMap_Shade( `${ name }-500`, part[ '500' ] );

        let l_200: Tokens_Colour_ShadeMap_Shade | null = null;
        let l_300: Tokens_Colour_ShadeMap_Shade | null = null;
        let l_400: Tokens_Colour_ShadeMap_Shade | null = null;
        let l_600: Tokens_Colour_ShadeMap_Shade | null = null;
        let l_700: Tokens_Colour_ShadeMap_Shade | null = null;
        let l_800: Tokens_Colour_ShadeMap_Shade | null = null;

        return {
            '100': l_100,
            '200': l_200 ?? new Tokens_Colour_ShadeMap_Shade( `${ name }-200`, { h: 0, s: 0, l: 50 } ),
            '300': l_300 ?? new Tokens_Colour_ShadeMap_Shade( `${ name }-300`, { h: 0, s: 0, l: 50 } ),
            '400': l_400 ?? new Tokens_Colour_ShadeMap_Shade( `${ name }-400`, { h: 0, s: 0, l: 50 } ),
            '500': l_500,
            '600': l_600 ?? new Tokens_Colour_ShadeMap_Shade( `${ name }-600`, { h: 0, s: 0, l: 50 } ),
            '700': l_700 ?? new Tokens_Colour_ShadeMap_Shade( `${ name }-700`, { h: 0, s: 0, l: 50 } ),
            '800': l_800 ?? new Tokens_Colour_ShadeMap_Shade( `${ name }-800`, { h: 0, s: 0, l: 50 } ),
            '900': l_900,
        };
    }

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
    } ).partial().transform( ( part, cfx ): {
        [ K in keyof typeof part ]-?: Tokens_Colour_ShadeMap_Shade;
    } => completeMap( part, cfx ) );

    export type Export = {
        [ K in keyof z.output<typeof Schema> ]-?: Tokens_Colour_ShadeMap_Shade.Export;
    };

    export type JSON = {
        [ K in keyof z.output<typeof Schema> ]-?: Tokens_Colour_ShadeMap_Shade.JSON;
    };

    /**
     * The partialized version of the {@link Tokens_Colour_ShadeMap.Schema} accepted as input.
     *
     * @since ___PKG_VERSION___
     * @interface
     */
    export type Part = {
        [ K in keyof z.input<typeof Schema> ]?: z.input<typeof Tokens_Colour_ShadeMap_Shade.Schema>;
    };

    /**
     * @interface
     */
    export type ScssVars = {
        [ K in keyof z.output<typeof Schema> ]-?: Tokens_Colour_ShadeMap_Shade.ScssVars;
    };
}