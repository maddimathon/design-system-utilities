/**
 * @since 0.1.0-alpha
 * 
 * @packageDocumentation
 */
/*!
 * @maddimathon/design-system-utilities@___CURRENT_VERSION___
 * @license MIT
 */

import clrConvert from 'color-convert';

import * as sass from 'sass-embedded';

import { roundToPixel } from './roundToPixel.js';

/**
 * Utility functions, schemas, and types for dealing with colour values in the
 * system.
 *
 * @since 0.1.0-alpha
 */
export namespace ColourUtilities {

    /**
     * A colour value in the Hex space.
     *
     * @since 0.1.0-alpha
     */
    export type Value_Hex = string;

    /**
     * A colour value in the HSL space.
     *
     * @since 0.1.0-alpha
     */
    export type Value_HSL = {
        h: number;
        s: number;
        l: number;
    };

    /**
     * A colour value in the RGB space.
     *
     * @since 0.1.0-alpha
     */
    export type Value_RGB = {
        r: number;
        g: number;
        b: number;
    };

    /**
     * A colour value in the LCH space.
     *
     * @since 0.1.0-alpha
     */
    export type Value_LCH = {
        l: number;
        c: number;
        h: number;
    };

    /**
     * Any of the single colour values.
     *
     * @since 0.1.0-alpha
     */
    export type Value = Value_Hex | Value_HSL | Value_RGB | Value_LCH;

    /**
     * All of the single colour values as an object.
     *
     * @since 0.1.0-alpha
     */
    export type Value_All = {
        hex: Value_Hex;
        hsl: Value_HSL;
        rgb: Value_RGB;
        lch: Value_LCH;
    };



    /* SINGLE SHADES
     * ====================================================================== */

    /**
     * Allowed input for the {@link SingleShade} schema.
     *
     * @since 0.1.0-alpha
     * @useDeclaredType
     */
    export type SingleShade_Input = Value | Value_All;

    /**
     * The parsed output of the {@link SingleShade} schema.
     *
     * @since 0.1.0-alpha
     * @useDeclaredType
     */
    export type SingleShade = Value_All;

    /**
     * Ensures a valid shade object.
     */
    export function validateShade( input: SingleShade_Input ): SingleShade {
        // returns
        if ( typeof input === 'object' && 'hex' in input ) {
            return input;
        }

        return {
            hex: toHex( input ),
            hsl: toHSL( input ),
            rgb: toRGB( input ),
            lch: toLCH( input ),
        };
    }



    /* UTILITY FUNCTIONS
     * ====================================================================== */

    /**
     * @since 0.1.0-alpha
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
     * @since 0.1.0-alpha
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
     * @since 0.1.0-alpha
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
     * @since 0.1.0-alpha
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
     * @since 0.1.0-alpha
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
            return '#' + toHex( clr );
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



    /* SHADE MAP FUNCTIONS
     * ====================================================================== */

    /**
     * Utilities for dealing with shade level values.
     * 
     * @since 0.1.1-alpha.0
     */
    export namespace Levels {

        /**
         * A key index for converting colour made shade levels to their opposite
         * (e.g., dark to light modes).
         * 
         * @since 0.1.0-alpha
         * @since 0.1.1-alpha.0 — Moved from {@link ColourUtilities} to {@link ColourUtilities.Levels} and renamed.
         */
        export const converter = {
            '100': '900',
            '150': '850',
            '200': '800',
            '250': '750',
            '300': '700',
            '350': '650',
            '400': '600',
            '450': '550',
            '500': '500',
            '550': '450',
            '600': '400',
            '650': '350',
            '700': '300',
            '750': '250',
            '800': '200',
            '850': '150',
            '900': '100',

            'black': 'white',
            'white': 'black',
        } as const satisfies {
            [ L in "black" | "white" | Levels.Required ]: "black" | "white" | Levels.Required;
        } & {
                [ L in Levels.Optional ]: Levels.Optional;
            };

        /**
         * The shade level keys that can be optionally included in maps for this
         * system.
         *
         * @since 0.1.1-alpha.0
         */
        export const optional = [
            '350',
            '450',
            '550',
            '650',
        ] as const;

        /**
         * The shade level keys always included in maps for this system.
         * 
         * @since 0.1.1-alpha.0
         */
        export const required = [
            '100',
            '150',
            '200',
            '250',
            '300',
            '400',
            '500',
            '600',
            '700',
            '750',
            '800',
            '850',
            '900',
        ] as const;

        /**
         * Shade levels that can be optionally included in maps for this system.
         * 
         * @since 0.1.0-alpha — Introduced as a global `Levels.Optional` type in `02-tokens/@types.d.ts`.
         * @since 0.1.1-alpha.0 — Moved to {@link ColourUtilities.Levels} and renamed.
         */
        export type Optional = typeof optional[ number ];

        /**
         * Shade levels always included in maps for this system.
         * 
         * @since 0.1.0-alpha — Introduced as a global `Levels.Required` type in `02-tokens/@types.d.ts`.
         * @since 0.1.1-alpha.0 — Moved to {@link ColourUtilities.Levels} and renamed.
         */
        export type Required = typeof required[ number ];

        /**
         * Converts the given shade level to its oppposite (via
         * {@link ColourUtilities.Levels.converter}).
         * 
         * @since 0.1.0-alpha
         * @since 0.1.1-alpha.0 — Moved to {@link ColourUtilities.Levels} and renamed.
         */
        export function toDark<
            T_LightLevel extends "black" | "white" | Levels.Required | Levels.Optional
        >( lightLevel: T_LightLevel ): typeof converter[ T_LightLevel ] {
            return converter[ lightLevel ];
        }
    }

    /**
     * Utilities for working with shade maps (100-900 levels from light to dark).
     * 
     * @since 0.1.1-alpha.0
     */
    export namespace ShadeMaps {

        /**
         * @since 0.1.0-alpha
         */
        export function getDarkLevel<
            T_LightLevel extends Levels.Required | Levels.Optional
        >(
            lightLevel: T_LightLevel,
        ): ( typeof Levels.converter )[ T_LightLevel ] {

            return Levels.converter[ lightLevel ];
        }
    }
}