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

import * as sass from 'sass';
import * as z from 'zod';

import { roundToPixel } from './roundToPixel.js';
import type { ColourLevels, ColourLevels_Extended } from '../internal.docs.js';

/**
 * Utility functions, schemas, and types for dealing with colour values in the
 * system.
 *
 * @since ___PKG_VERSION___
 */
export namespace ColourUtilities {

    /**
     * A colour value in the Hex space.
     *
     * @since ___PKG_VERSION___
     */
    export type Value_Hex = z.infer<typeof Value_Hex>;
    /** @hidden */
    export const Value_Hex = z.string().toUpperCase().regex( /^#?[0-9|A-H]{3,6}$/i );

    /**
     * A colour value in the HSL space.
     *
     * @since ___PKG_VERSION___
     */
    export type Value_HSL = z.infer<typeof Value_HSL>;
    /** @hidden */
    export const Value_HSL = z.object( {
        h: z.number().nonnegative().lte( 360 ),
        s: z.number().nonnegative().lte( 100 ),
        l: z.number().nonnegative().lte( 100 ),
    } );

    /**
     * A colour value in the RGB space.
     *
     * @since ___PKG_VERSION___
     */
    export type Value_RGB = z.infer<typeof Value_RGB>;
    /** @hidden */
    export const Value_RGB = z.object( {
        r: z.number().nonnegative().lte( 255 ),
        g: z.number().nonnegative().lte( 255 ),
        b: z.number().nonnegative().lte( 255 ),
    } );

    /**
     * A colour value in the LCH space.
     *
     * @since ___PKG_VERSION___
     */
    export type Value_LCH = z.infer<typeof Value_LCH>;
    /** @hidden */
    export const Value_LCH = z.object( {
        l: z.number().nonnegative().lte( 100 ),
        c: z.number().safe(),
        h: z.number().safe(),
    } );

    /**
     * Any of the single colour values.
     *
     * @since ___PKG_VERSION___
     */
    export type Value = z.infer<typeof Value>;
    /** @hidden */
    export const Value = z.union( [
        Value_Hex,
        Value_HSL,
        Value_RGB,
        Value_LCH,
    ] );

    /**
     * All of the single colour values as an object.
     *
     * @since ___PKG_VERSION___
     */
    export type Value_All = z.infer<typeof Value_All>;
    /** @hidden */
    export const Value_All = z.object( {
        hex: Value_Hex,
        hsl: Value_HSL,
        rgb: Value_RGB,
        lch: Value_LCH,
    } );



    /* SINGLE SHADES
     * ====================================================================== */

    /**
     * Allowed input for the {@link SingleShade} schema.
     *
     * @since ___PKG_VERSION___
     * @useDeclaredType
     */
    export type SingleShade_Input = z.input<typeof SingleShade>;

    /**
     * The parsed output of the {@link SingleShade} schema.
     *
     * @since ___PKG_VERSION___
     * @useDeclaredType
     */
    export type SingleShade = z.output<typeof SingleShade>;

    /** @private */
    export const SingleShade = z.union( [
        Value,
        Value_All,
    ] ).transform( ( input ): Value_All => {

        // returns - is already converted
        if ( typeof input === 'object' && 'hex' in input ) {
            return input;
        }

        return {
            hex: toHex( input ),
            hsl: toHSL( input ),
            rgb: toRGB( input ),
            lch: toLCH( input ),
        };
    } );



    /* UTILITY FUNCTIONS
     * ====================================================================== */

    export function getDarkLevel(
        lightLevel: ColourLevels | ColourLevels_Extended,
    ): ColourLevels | ColourLevels_Extended {

        const dark = ( 1000 - Number( lightLevel ) ).toFixed( 0 );

        return dark.padStart(
            Math.max( 0, 3 - dark.length ),
            '0',
        ) as ColourLevels | ColourLevels_Extended;
    }

    /**
     * @since ___PKG_VERSION___
     */
    export function toHex(
        clr: { data: SingleShade; } | SingleShade | SingleShade_Input,
    ): Value_Hex {

        const _hexValidator = ( hex: string ) => hex.toUpperCase().replace( /^#/gi, '' );

        // returns - plain
        if ( typeof clr === 'string' ) {
            return _hexValidator( clr );
        }

        // returns - already built
        if ( 'data' in clr ) {
            return clr.data.hex;
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

    /**
     * @since ___PKG_VERSION___
     */
    export function toHSL(
        clr: { data: SingleShade; } | SingleShade | SingleShade_Input,
        round: boolean = true,
    ): Value_HSL {

        const _arrayToObject = ( hsl: [ number, number, number ] ) => (
            round
                ? {
                    h: roundToPixel( hsl[ 0 ], 100 ),
                    s: Math.max( 0, Math.min( 100, roundToPixel( hsl[ 1 ], 100 ) ) ),
                    l: Math.max( 0, Math.min( 100, roundToPixel( hsl[ 2 ], 100 ) ) ),
                }
                : {
                    h: hsl[ 0 ],
                    s: hsl[ 1 ],
                    l: hsl[ 2 ],
                }
        );

        // returns - converts
        if ( typeof clr === 'string' ) {
            const hsl = clrConvert.hex.hsl.raw( clr );
            return _arrayToObject( hsl );
        }

        // returns - already built
        if ( 'data' in clr ) {
            return clr.data.hsl;
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

    /**
     * @since ___PKG_VERSION___
     */
    export function toLCH(
        clr: { data: SingleShade; } | SingleShade | SingleShade_Input,
    ): Value_LCH {

        const _arrayToObject = ( lch: [ number, number, number ] ) => ( {
            l: roundToPixel( lch[ 0 ], 1000 ),
            c: roundToPixel( lch[ 1 ], 2000 ),
            h: roundToPixel( lch[ 2 ], 1000 ),
        } );

        // returns - converts
        if ( typeof clr === 'string' ) {
            const lch = clrConvert.hex.lch.raw( clr );
            return _arrayToObject( lch );
        }

        // returns - already built
        if ( 'data' in clr ) {
            return clr.data.lch;
        }

        // returns - plain
        if ( 'lch' in clr ) {
            return _arrayToObject( [ clr.lch.l, clr.lch.c, clr.lch.h ] );
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

    /**
     * @since ___PKG_VERSION___
     */
    export function toRGB(
        clr: { data: SingleShade; } | SingleShade | SingleShade_Input,
    ): Value_RGB {

        const _arrayToObject = ( rgb: [ number, number, number ] ) => ( {
            r: Math.max( 0, roundToPixel( rgb[ 0 ], 100 ) ),
            g: Math.max( 0, roundToPixel( rgb[ 1 ], 100 ) ),
            b: Math.max( 0, roundToPixel( rgb[ 2 ], 100 ) ),
        } );

        // returns - converts
        if ( typeof clr === 'string' ) {
            const rgb = clrConvert.hex.rgb.raw( clr );
            return _arrayToObject( rgb );
        }

        // returns - already built
        if ( 'data' in clr ) {
            return clr.data.rgb;
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

    /**
     * @since ___PKG_VERSION___
     */
    export function mixColours(
        _clrA: { data: SingleShade; } | SingleShade | SingleShade_Input,
        _clrB: { data: SingleShade; } | SingleShade | SingleShade_Input,
        saturationMultiplier: number = 0,
    ): Value_LCH {

        const clrA = toLCH( _clrA );
        const clrB = toLCH( _clrB );

        saturationMultiplier = ( Math.min( 1, Math.max( -1, saturationMultiplier ) ) * 100 );

        const clrA_str = ColourUtilities.toString.lch( clrA );
        const clrB_str = ColourUtilities.toString.lch( clrB );

        const sass_mixed = `color.mix( ${ clrA_str }, ${ clrB_str }, $method: lch shorter hue )`;
        const sass_mixed_hsl = `color.to-gamut( ${ sass_mixed }, $space: hsl, $method: local-minde )`;
        const sass_mixed_saturated = `color.scale( ${ sass_mixed_hsl }, $saturation: ${ saturationMultiplier }%, $space: hsl )`;

        const sassMixed = sass.compileString(
            `@use 'sass:color'; /* #{color.to-gamut( ${ sass_mixed_saturated }, $space: lch, $method: local-minde )} */`,
        );

        const matches = `${ sassMixed.css }`.match( /lch\(\s*([\d\.]+)%\s+([\d\.]+)\s+([\d\.]+)deg\s*\)/is );

        // returns - in theory never used
        if ( !( matches && matches[ 1 ] && matches[ 2 ] && matches[ 3 ] ) ) {
            return toLCH( {
                l: ( clrA.l + clrB.l ) / 2,
                c: ( ( clrA.c + clrB.c ) / 2 ) * saturationMultiplier,
                h: ( clrA.h + clrB.h ) / 2,
            } );
        }

        return toLCH( {
            l: Number( matches[ 1 ] ),
            c: Number( matches[ 2 ] ),
            h: Number( matches[ 3 ] ),
        } );
    }

    export namespace toString {

        export function hex(
            clr: { data: SingleShade; } | SingleShade | SingleShade_Input,
        ): string {
            return toHex( clr );
        }

        export function hsl(
            clr: { data: SingleShade; } | SingleShade | SingleShade_Input,
        ): string {
            const hsl = toHSL( clr );
            return `hsl( ${ hsl.h }, ${ hsl.s }%, ${ hsl.l }% )`;
        }

        export function lch(
            clr: { data: SingleShade; } | SingleShade | SingleShade_Input,
        ): string {
            const lch = toLCH( clr );
            return `lch( ${ lch.l }% ${ lch.c } ${ lch.h } )`;
        }

        export function rgb(
            clr: { data: SingleShade; } | SingleShade | SingleShade_Input,
        ): string {
            const rgb = toRGB( clr );
            return `rgb( ${ rgb.r }, ${ rgb.g }, ${ rgb.b } )`;
        }
    }
}