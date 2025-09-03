/**
 * @since ___PKG_VERSION___
 * 
 * @packageDocumentation
 */
/*!
 * @maddimathon/design-system-utilities@___CURRENT_VERSION___
 * @license MIT
 */

import clrConvert from 'color-convert';
import * as z from 'zod';

import { AbstractTokens } from '../../../abstracts/AbstractTokens.js';

/**
 * Generates a token object for the design system.
 * 
 * @since ___PKG_VERSION___
 * @internal
 */
export class Tokens_Colour_ShadeMap_Shade extends AbstractTokens<
    typeof Tokens_Colour_ShadeMap_Shade.Schema,
    Tokens_Colour_ShadeMap_Shade.Parsed,
    Tokens_Colour_ShadeMap_Shade.Part,
    Tokens_Colour_ShadeMap_Shade.JSON,
    Tokens_Colour_ShadeMap_Shade.ScssVars
> {

    get schema() {
        return Tokens_Colour_ShadeMap_Shade.Schema;
    }

    public readonly hex: Tokens_Colour_ShadeMap_Shade.Parsed[ 'hex' ];
    public readonly hsl: Tokens_Colour_ShadeMap_Shade.Parsed[ 'hsl' ];
    public readonly rgb: Tokens_Colour_ShadeMap_Shade.Parsed[ 'rgb' ];
    public readonly oklch: Tokens_Colour_ShadeMap_Shade.Parsed[ 'oklch' ];

    public constructor (
        public readonly name: string,
        input: z.input<typeof Tokens_Colour_ShadeMap_Shade.Schema> | z.output<typeof Tokens_Colour_ShadeMap_Shade.Schema>,
    ) {
        super( input );

        const parsed = this.parseSchema(
            this.schema,
            input ?? {},
            {
                name: `Tokens_Colour_ShadeMap_Shade.${ this.name }`,
                location: 'src/ts/02-tokens/Tokens/Colour/ShadeMap/Colour_ShadeMap_Shade.ts:50',
            },
        );

        this.hex = parsed.hex;
        this.hsl = parsed.hsl;
        this.rgb = parsed.rgb;
        this.oklch = parsed.oklch;
    }

    public valueOf(): Tokens_Colour_ShadeMap_Shade.Parsed {

        return {
            hex: this.hex,
            hsl: this.hsl,
            rgb: this.rgb,
            oklch: this.oklch,
        };
    }

    public toJSON(): Tokens_Colour_ShadeMap_Shade.JSON {
        return this.valueOf();
    }

    public toScssVars(): Tokens_Colour_ShadeMap_Shade.ScssVars {
        return `oklch( ${ this.oklch.l / 100 } ${ this.oklch.c } ${ this.oklch.h } )`;
    }
}

/**
 * Utilities for the {@link Tokens} class.
 * 
 * @since ___PKG_VERSION___
 * @internal
 */
export namespace Tokens_Colour_ShadeMap_Shade {



    /* SCHEMA
     * ====================================================================== */

    export const Schema_Hex = z.string().toUpperCase().regex( /^#?[0-9|A-H]{3,6}$/i );

    export const Schema_HSL = z.object( {
        h: z.number().nonnegative().lte( 360 ),
        s: z.number().nonnegative().lte( 100 ),
        l: z.number().nonnegative().lte( 100 ),
    } );

    export const Schema_RGB = z.object( {
        r: z.number().nonnegative().lte( 255 ),
        g: z.number().nonnegative().lte( 255 ),
        b: z.number().nonnegative().lte( 255 ),
    } );

    export const Schema_OKLCH = z.object( {
        l: z.number().nonnegative().lte( 100 ),
        c: z.number().safe(),
        h: z.number().safe(),
    } );

    export const Schema = z.union( [
        Schema_Hex,
        Schema_HSL,
        Schema_RGB,
        Schema_OKLCH,

        z.object( {
            hex: Schema_Hex,
            hsl: Schema_HSL,
            rgb: Schema_RGB,
            oklch: Schema_OKLCH,
        } ),
    ] ).transform( ( input ): {
        hex: z.infer<typeof Schema_Hex>,
        hsl: z.infer<typeof Schema_HSL>,
        rgb: z.infer<typeof Schema_RGB>,
        oklch: z.infer<typeof Schema_OKLCH>,
    } => {

        // returns - is already converted
        if ( typeof input === 'object' && 'hex' in input ) {
            return input;
        }

        return {
            hex: toHex( input ),
            hsl: toHSL( input ),
            rgb: toRGB( input ),
            oklch: toOKLCH( input ),
        };
    } );



    /* TYPES
     * ====================================================================== */

    export type Parsed = z.output<typeof Schema>;

    /**
     * The partialized version of the {@link Tokens_TEMPLATE.Schema} accepted as input.
     *
     * @since ___PKG_VERSION___
     */
    export type Part = z.input<typeof Schema>;

    export type JSON = Parsed;

    export type ScssVars = string;



    /* UTILITY FUNCTIONS
     * ====================================================================== */

    export function toHex(
        clr: Tokens_Colour_ShadeMap_Shade | z.input<typeof Schema>,
    ): z.infer<typeof Schema_Hex> {

        const _hexValidator = ( hex: string ) => '#' + hex.replace( /^#/gi, '' );

        // returns - plain
        if ( typeof clr === 'string' ) {
            return _hexValidator( clr );
        }

        // returns - plain
        if ( 'hex' in clr ) {
            return _hexValidator( clr.hex );
        }

        // returns - hsl
        if ( 's' in clr ) {
            const hex = clrConvert.hsl.hex.raw( clr.h, clr.s, clr.l );
            return _hexValidator( hex );
        }

        // returns - lch
        if ( 'c' in clr ) {
            const hex = clrConvert.lch.hex.raw( clr.l, clr.c, clr.h );
            return _hexValidator( hex );
        }

        // clr is rgb
        const hex = clrConvert.rgb.hex.raw( clr.r, clr.g, clr.b );
        return _hexValidator( hex );
    }

    export function toHSL(
        clr: Tokens_Colour_ShadeMap_Shade | z.input<typeof Schema>,
    ): z.infer<typeof Schema_HSL> {

        const _arrayToObject = ( hsl: [ number, number, number ] ) => ( {
            h: Math.round( hsl[ 0 ] * 200 ) / 200,
            s: Math.round( hsl[ 1 ] * 200 ) / 200,
            l: Math.round( hsl[ 2 ] * 200 ) / 200,
        } );

        // returns - converts
        if ( typeof clr === 'string' ) {
            const hsl = clrConvert.hex.hsl.raw( clr );
            return _arrayToObject( hsl );
        }

        // returns - plain
        if ( 'hsl' in clr ) {
            return _arrayToObject( [ clr.hsl.h, clr.hsl.s, clr.hsl.l ] );
        }

        // returns - plain
        if ( 's' in clr ) {
            return _arrayToObject( [ clr.h, clr.s, clr.l ] );
        }

        // returns - lch
        if ( 'c' in clr ) {
            const hsl = clrConvert.lch.hsl.raw( clr.l, clr.c, clr.h );
            return _arrayToObject( hsl );
        }

        // clr is rgb
        const hsl = clrConvert.rgb.hsl.raw( clr.r, clr.g, clr.b );
        return _arrayToObject( hsl );
    }

    export function toOKLCH(
        clr: Tokens_Colour_ShadeMap_Shade | z.input<typeof Schema>,
    ): z.infer<typeof Schema_OKLCH> {

        const _arrayToObject = ( oklch: [ number, number, number ] ) => ( {
            l: Math.max(
                0,
                Math.min(
                    100,
                    Math.round( oklch[ 0 ] * 1000 ) / 1000
                )
            ),
            c: Math.round( oklch[ 1 ] * 10000 ) / 10000,
            h: Math.round( oklch[ 2 ] * 1000 ) / 1000,
        } );

        // returns - converts
        if ( typeof clr === 'string' ) {
            const lch = clrConvert.hex.lch.raw( clr );
            return _arrayToObject( lch );
        }

        // returns - plain
        if ( 'oklch' in clr ) {
            return _arrayToObject( [ clr.oklch.l, clr.oklch.c, clr.oklch.h ] );
        }

        // returns - plain
        if ( 'c' in clr ) {
            return _arrayToObject( [ clr.l, clr.c, clr.h ] );
        }

        // returns - hsl
        if ( 'h' in clr ) {
            const lch = clrConvert.hsl.lch.raw( clr.h, clr.s, clr.l );
            return _arrayToObject( lch );
        }

        // clr is rgb
        const lch = clrConvert.rgb.lch.raw( clr.r, clr.g, clr.b );
        return _arrayToObject( lch );
    }

    export function toRGB(
        clr: Tokens_Colour_ShadeMap_Shade | z.input<typeof Schema>,
    ): z.infer<typeof Schema_RGB> {

        const _arrayToObject = ( rgb: [ number, number, number ] ) => ( {
            r: Math.round( rgb[ 0 ] * 200 ) / 200,
            g: Math.round( rgb[ 1 ] * 200 ) / 200,
            b: Math.round( rgb[ 2 ] * 200 ) / 200,
        } );

        // returns - converts
        if ( typeof clr === 'string' ) {
            const rgb = clrConvert.hex.rgb.raw( clr );
            return _arrayToObject( rgb );
        }

        // returns - plain
        if ( 'rgb' in clr ) {
            return _arrayToObject( [ clr.rgb.r, clr.rgb.g, clr.rgb.b ] );
        }

        // returns - plain
        if ( 'g' in clr ) {
            return _arrayToObject( [ clr.r, clr.g, clr.b ] );
        }

        // returns - lch
        if ( 'c' in clr ) {
            const rgb = clrConvert.lch.rgb.raw( clr.l, clr.c, clr.h );
            return _arrayToObject( rgb );
        }

        // clr is hsl
        const rgb = clrConvert.hsl.rgb.raw( clr.h, clr.s, clr.l );
        return _arrayToObject( rgb );
    }
}