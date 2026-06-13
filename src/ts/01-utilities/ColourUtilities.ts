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
import * as WcagContrast from 'wcag-contrast';

import * as sass from 'sass-embedded';

import { makeNumber, makeNumberAsync } from '@maddimathon/utility-typescript';

import { LocalErrors } from './Errors.js';
import { roundToPixel } from './roundToPixel.js';

/**
 * Utility functions, schemas, and types for dealing with colour values in the
 * system.
 *
 * @since 0.1.0-alpha
 */
export namespace ColourUtilities {

    const defaultErrorMaker: LocalErrors.ConstructorFn = (
        message: string,
        context: LocalErrors.Context,
        opts?: undefined | {
            cause?: LocalErrors.Cause;
        },
    ) => new LocalErrors.ColourUtilitiesError( message, context, opts );

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
    export type Value = Value_Hex | Value_HSL | Value_LCH | Value_RGB;

    /**
     * All of the single colour values as an object.
     *
     * @since 0.1.0-alpha
     */
    export type Value_All = {
        hex: Value_Hex;
        hsl: Value_HSL;
        lch: Value_LCH;
        rgb: Value_RGB;
    };

    export type Value_Generic<T_Space extends "hex" | "hsl" | "lch" | "rgb"> =
        | T_Space extends "hex" ? string : never
        | T_Space extends "hsl" ? Value_HSL : never
        | T_Space extends "lch" ? Value_LCH : never
        | T_Space extends "rgb" ? Value_RGB : never;


    /* SINGLE SHADES
     * ====================================================================== */

    /**
     * Ensures a valid and complete shade object.
     */
    export async function validateShade(
        input: Value | Value_All,
        errMaker: LocalErrors.ConstructorFn = defaultErrorMaker,
        round?: boolean,
    ): Promise<Value_All> {
        // throws
        if ( !input ) {
            throw errMaker(
                `Input '${ input }' was falsey`,
                { function: 'ColourUtilities.validateShade' },
                { cause: input },
            );
        }

        // returns
        if ( typeof input === 'object' && 'hex' in input ) {
            return input;
        }

        return Promise.all( [
            toHex( input, errMaker ),
            toHSL( input, errMaker, round ),
            toRGB( input, errMaker, round ),
            toLCH( input, errMaker, round ),
        ] ).then( ( [ hex, hsl, rgb, lch ] ) => ( { hex, hsl, rgb, lch } ) );
    }



    /* UTILITY FUNCTIONS
     * ====================================================================== */

    /**
     * @since ___PKG_VERSION___
     */
    function isAllValues(
        clr: Value | Value_All | { data: Value_All; },
        spaceToCheck: keyof Value_All = 'hsl',
    ): clr is Value_All {
        // returns
        if ( typeof clr !== 'object' ) {
            return false;
        }

        return !!( ( spaceToCheck in clr ) && clr[ spaceToCheck as keyof typeof clr ] );
    }

    /**
     * @since ___PKG_VERSION___
     */
    function isSingleShade(
        clr: Value | Value_All | { data: Value_All; }
    ): clr is { data: Value_All; } {
        // returns
        if ( typeof clr !== 'object' ) {
            return false;
        }

        return !!( ( 'data' in clr ) && clr.data );
    }

    /**
     * @since ___PKG_VERSION___
     */
    function validator<T_Space extends keyof Value_All>(
        clr: { data: Value_All; } | Value_All | Value_Generic<T_Space>,
        space: T_Space,
        errContext: LocalErrors.Context,
        errMaker: LocalErrors.ConstructorFn,
    ): Value_Generic<T_Space> {
        let validClr: Value_Generic<T_Space>;

        if ( typeof clr === 'object' ) {

            if ( isSingleShade( clr ) ) {
                validClr = clr.data[ space ] as Value_Generic<T_Space>;
            } else if ( isAllValues( clr ) ) {
                validClr = clr[ space ] as Value_Generic<T_Space>;
            } else {
                validClr = clr;
            }
        } else {
            validClr = clr;
        }

        // returns
        switch ( space ) {

            case 'hex':
                return hexValidator(
                    validClr as Value_Hex,
                    errContext,
                    errMaker,
                ) as Value_Generic<T_Space>;

            case 'hsl':
                return hslValidator(
                    validClr as Value_HSL,
                    errContext,
                    errMaker,
                ) as Value_Generic<T_Space>;

            case 'lch':
                return lchValidator(
                    validClr as Value_LCH,
                    errContext,
                    errMaker,
                ) as Value_Generic<T_Space>;

            // case 'oklch':
            //     return oklchValidator(
            //         validClr as Value_OKLCH,
            //         errContext,
            //         errMaker,
            //     ) as Value_Generic<T_Space>;

            case 'rgb':
                return rgbValidator(
                    validClr as Value_RGB,
                    errContext,
                    errMaker,
                ) as Value_Generic<T_Space>;
        }
    }

    /**
     * Validates an input hex code, throwing an error if needed.
     */
    function hexValidator(
        hex: string,
        context: LocalErrors.Context,
        errMaker: LocalErrors.ConstructorFn,
    ): Value_Hex {
        const uppercaseInput = hex.toUpperCase();

        // throws
        if ( !uppercaseInput.match( /^#?[0-9|A-H]{3,6}$/i ) ) {
            throw errMaker(
                `Hex code '${ hex }' did not match required pattern`,
                context,
                { cause: hex },
            );
        }

        return hex;
    };

    /**
     * Validates an input HSL obj, throwing an error if needed.
     */
    function hslValidator(
        hsl: Value_HSL,
        context: LocalErrors.Context,
        errMaker: LocalErrors.ConstructorFn,
    ): Value_HSL {
        // throws
        if ( typeof hsl !== 'object' || hsl === null ) {
            throw errMaker(
                `HSL input must be an object with 'h', 's', and 'l' properties (was ${ hsl === null ? 'null' : typeof hsl })`,
                context,
                { cause: hsl },
            );
        }

        const hue = makeNumber( hsl.h );
        const sat = makeNumber( hsl.s );
        const lit = makeNumber( hsl.l );

        // throws
        if ( hue === null || sat === null || lit === null ) {
            throw errMaker(
                `HSL input must have values for 'h', 's', and 'l' properties`,
                context,
                { cause: hsl },
            );
        }

        // throws
        if (
            typeof hue !== 'number'
            || typeof sat !== 'number'
            || typeof lit !== 'number'
        ) {
            throw errMaker(
                `HSL input must have numerical values for 'h', 's', and 'l' properties`,
                context,
                { cause: hsl },
            );
        }

        return {
            h: Math.max( 0, Math.min( 360, hue ) ),
            s: Math.max( 0, Math.min( 100, sat ) ),
            l: Math.max( 0, Math.min( 100, lit ) ),
        };
    };

    /**
     * Validates an input LCH obj, throwing an error if needed.
     */
    function lchValidator(
        lch: Value_LCH,
        context: LocalErrors.Context,
        errMaker: LocalErrors.ConstructorFn,
    ): Value_LCH {
        // throws
        if ( typeof lch !== 'object' || lch === null ) {
            throw errMaker(
                `LCH input must be an object with 'l', 'c', and 'h' properties (was ${ lch === null ? 'null' : typeof lch })`,
                context,
                { cause: lch },
            );
        }

        const lum = makeNumber( lch.l );
        const chr = makeNumber( lch.c );
        const hue = makeNumber( lch.h );

        // throws
        if ( lum === null || chr === null || hue === null ) {
            throw errMaker(
                `LCH input must have values for 'l', 'c', and 'h' properties`,
                context,
                { cause: lch },
            );
        }

        // throws
        if (
            typeof lum !== 'number'
            || typeof chr !== 'number'
            || typeof hue !== 'number'
        ) {
            throw errMaker(
                `LCH input must have numerical values for 'l', 'c', and 'h' properties`,
                context,
                { cause: lch },
            );
        }

        return {
            l: Math.max( 0, Math.min( 100, lum ) ),
            c: chr,
            h: hue,
        };
    };

    /**
     * Validates an input RGB obj, throwing an error if needed.
     */
    function rgbValidator(
        rgb: Value_RGB,
        context: LocalErrors.Context,
        errMaker: LocalErrors.ConstructorFn,
    ): Value_RGB {
        // throws
        if ( typeof rgb !== 'object' || rgb === null ) {
            throw errMaker(
                `RGB input must be an object with 'r', 'g', and 'b' properties (was ${ rgb === null ? 'null' : typeof rgb })`,
                context,
                { cause: rgb },
            );
        }

        const red = makeNumber( rgb.r );
        const gre = makeNumber( rgb.g );
        const blu = makeNumber( rgb.b );

        // throws
        if ( red === null || gre === null || blu === null ) {
            throw errMaker(
                `RGB input must have values for 'r', 'g', and 'b' properties`,
                context,
                { cause: rgb },
            );
        }

        // throws
        if (
            typeof red !== 'number'
            || typeof gre !== 'number'
            || typeof blu !== 'number'
        ) {
            throw errMaker(
                `RGB input must have numerical values for 'r', 'g', and 'b' properties`,
                context,
                { cause: rgb },
            );
        }

        return {
            r: Math.max( 0, Math.min( 255, red ) ),
            g: Math.max( 0, Math.min( 255, gre ) ),
            b: Math.max( 0, Math.min( 255, blu ) ),
        };
    };

    /**
     * @since 0.1.0-alpha
     */
    export function toHex(
        clr: Value | Value_All | { data: Value_All; },
        errMaker: LocalErrors.ConstructorFn = defaultErrorMaker,
    ): Value_Hex {
        const errContext = {
            function: 'ColourUtilities.toHex',
        };

        // throws
        if ( !clr ) {
            throw errMaker(
                `Input clr '${ clr }' was falsey`,
                errContext,
                { cause: clr },
            );
        }

        const _hexFormatter = ( hex: string ) => hex.toUpperCase().replace( /^#/gi, '' );

        const _hexValidator = ( hex: string ) => _hexFormatter(
            hexValidator( hex, errContext, errMaker )
        );

        // returns - plain
        if ( typeof clr === 'string' ) {
            return _hexValidator( clr );
        }

        // returns - already built
        if ( 'data' in clr ) {
            return _hexValidator( clr.data.hex );
        }

        // returns - plain
        if ( 'hex' in clr ) {
            return _hexValidator( clr.hex );
        }

        // returns - hsl
        if ( 's' in clr ) {
            return _hexFormatter( clrConvert.hsl.hex.raw( clr.h, clr.s, clr.l ) );
        }

        // returns - lch
        if ( 'c' in clr ) {
            return _hexFormatter( clrConvert.lch.hex.raw( clr.l, clr.c, clr.h ) );
        }

        // clr is rgb
        return _hexFormatter( clrConvert.rgb.hex.raw( clr.r, clr.g, clr.b ) );
    }

    /**
     * @since 0.1.0-alpha
     */
    export function toHSL(
        clr: Value | Value_All | { data: Value_All; },
        errMaker: LocalErrors.ConstructorFn = defaultErrorMaker,
        round: boolean = true,
    ): Value_HSL {
        const errContext = {
            function: 'ColourUtilities.toHSL',
        };

        // throws
        if ( !clr ) {
            throw errMaker(
                `Input clr '${ clr }' was falsey`,
                errContext,
                { cause: clr },
            );
        }

        const _hslFormatter = ( hsl: Value_HSL ) => round ? {
            h: roundToPixel( hsl.h, 100 ),
            s: roundToPixel( hsl.s, 100 ),
            l: roundToPixel( hsl.l, 100 ),
        } : hsl;

        const _hslValidator = ( hsl: Value_HSL ) => _hslFormatter(
            hslValidator( hsl, errContext, errMaker )
        );

        // returns - converts
        if ( typeof clr === 'string' ) {
            const validHex = hexValidator(
                clr,
                {
                    function: 'ColourUtilities.toHSL',
                },
                errMaker,
            );

            const [ h, s, l ] = clrConvert.hex.hsl.raw( validHex );
            return _hslFormatter( { h, s, l } );
        }

        // returns - already built
        if ( 'data' in clr ) {
            return _hslValidator( clr.data.hsl );
        }

        // returns - plain
        if ( 'hsl' in clr ) {
            return _hslValidator( clr.hsl );
        }

        // returns - plain
        if ( 's' in clr ) {
            return _hslValidator( clr );
        }

        // returns - lch
        if ( 'c' in clr ) {
            const validLCH = lchValidator(
                clr,
                {
                    function: 'ColourUtilities.toHSL',
                },
                errMaker,
            );

            const [ h, s, l ] = clrConvert.lch.hsl.raw( [ validLCH.l, validLCH.c, validLCH.h ] );
            return _hslFormatter( { h, s, l } );
        }

        // clr is rgb
        const validRGB = rgbValidator(
            clr,
            {
                function: 'ColourUtilities.toHSL',
            },
            errMaker,
        );

        const [ h, s, l ] = clrConvert.rgb.hsl.raw( [ validRGB.r, validRGB.g, validRGB.b ] );
        return _hslFormatter( { h, s, l } );
    }

    /**
     * @since 0.1.0-alpha
     */
    export function toLCH(
        clr: Value | Value_All | { data: Value_All; },
        errMaker: LocalErrors.ConstructorFn = defaultErrorMaker,
        round: boolean = true,
    ): Value_LCH {
        const errContext = {
            function: 'ColourUtilities.toLCH',
        };

        // throws
        if ( !clr ) {
            throw errMaker(
                `Input clr '${ clr }' was falsey`,
                errContext,
                { cause: clr },
            );
        }

        const _lchFormatter = ( lch: Value_LCH ) => round ? {
            l: roundToPixel( lch.l, 1000 ),
            c: roundToPixel( lch.c, 2000 ),
            h: roundToPixel( lch.h, 1000 ),
        } : lch;

        const _lchValidator = ( lch: Value_LCH ) => _lchFormatter(
            lchValidator( lch, errContext, errMaker )
        );

        // returns - converts
        if ( typeof clr === 'string' ) {
            const validHex = hexValidator( clr, errContext, errMaker );

            const [ l, c, h ] = clrConvert.hex.lch.raw( validHex );
            return _lchFormatter( { l, c, h } );
        }

        // returns - already built
        if ( 'data' in clr ) {
            return _lchValidator( clr.data.lch );
        }

        // returns - plain
        if ( 'lch' in clr ) {
            return _lchValidator( clr.lch );
        }

        // returns - plain
        if ( 'c' in clr ) {
            return _lchValidator( clr );
        }

        // returns - hsl
        if ( 'h' in clr ) {
            const validHSL = hslValidator( clr, errContext, errMaker );

            const [ l, c, h ] = clrConvert.hsl.lch.raw( [ validHSL.h, validHSL.s, validHSL.l ] );
            return _lchFormatter( { l, c, h } );
        }

        // clr is rgb
        const validRGB = rgbValidator( clr, errContext, errMaker );

        const [ l, c, h ] = clrConvert.rgb.lch.raw( [ validRGB.r, validRGB.g, validRGB.b ] );
        return _lchFormatter( { l, c, h } );
    }

    /**
     * @since 0.1.0-alpha
     */
    export function toRGB(
        clr: Value | Value_All | { data: Value_All; },
        errMaker: LocalErrors.ConstructorFn = defaultErrorMaker,
        round: boolean = true,
    ): Value_RGB {
        const errContext = {
            function: 'ColourUtilities.toRGB',
        };

        // throws
        if ( !clr ) {
            throw errMaker(
                `Input clr '${ clr }' was falsey`,
                errContext,
                { cause: clr },
            );
        }

        const _rgbFormatter = ( rgb: Value_RGB ) => round ? {
            r: roundToPixel( rgb.r, 100 ),
            g: roundToPixel( rgb.g, 100 ),
            b: roundToPixel( rgb.b, 100 ),
        } : rgb;

        const _rgbValidator = ( rgb: Value_RGB ) => _rgbFormatter(
            rgbValidator( rgb, errContext, errMaker )
        );

        // returns - converts
        if ( typeof clr === 'string' ) {
            const validHex = hexValidator( clr, errContext, errMaker );

            const [ r, g, b ] = clrConvert.hex.rgb.raw( validHex );
            return _rgbFormatter( { r, g, b } );
        }

        // returns - already built
        if ( 'data' in clr ) {
            return _rgbValidator( clr.data.rgb );
        }

        // returns - plain
        if ( 'rgb' in clr ) {
            return _rgbValidator( clr.rgb );
        }

        // returns - plain
        if ( 'g' in clr ) {
            return _rgbValidator( clr );
        }

        // returns - lch
        if ( 'c' in clr ) {
            const validLCH = lchValidator( clr, errContext, errMaker );

            const [ r, g, b ] = clrConvert.lch.rgb.raw( [ validLCH.l, validLCH.c, validLCH.h ] );
            return _rgbFormatter( { r, g, b } );
        }

        // clr is hsl
        const validHSL = hslValidator( clr, errContext, errMaker );

        const [ r, g, b ] = clrConvert.hsl.rgb.raw( [ validHSL.h, validHSL.s, validHSL.l ] );
        return _rgbFormatter( { r, g, b } );
    }

    /**
     * @since 0.1.0-alpha
     */
    export async function mixColours(
        _clrA: Value | Value_All | { data: Value_All; },
        _clrB: Value | Value_All | { data: Value_All; },
        saturationMultiplier: number = 0,
    ): Promise<Value_LCH> {

        const [
            clrA,
            clrB,
        ] = await Promise.all( [
            toLCH( _clrA ),
            toLCH( _clrB ),
        ] );

        saturationMultiplier = Math.min( 1, Math.max( -1, saturationMultiplier ) ) * 100;

        const clrA_str = ColourUtilities.toString.lch( clrA );
        const clrB_str = ColourUtilities.toString.lch( clrB );

        const sass_mixed = `color.mix( ${ clrA_str }, ${ clrB_str }, $method: lch shorter hue )`;
        const sass_mixed_hsl = `color.to-gamut( ${ sass_mixed }, $space: hsl, $method: local-minde )`;
        const sass_mixed_saturated = `color.scale( ${ sass_mixed_hsl }, $saturation: ${ saturationMultiplier }%, $space: hsl )`;

        return sass.compileStringAsync(
            `@use 'sass:color'; /* #{color.to-gamut( ${ sass_mixed_saturated }, $space: lch, $method: local-minde )} */`,
        ).then( ( sassMixed: sass.CompileResult ) => {

            const matches = sassMixed.css.match( /lch\(\s*([\d\.]+)%\s+([\d\.]+)\s+([\d\.]+)deg\s*\)/is );

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
        } );
    }

    /**
     * @since ___PKG_VERSION___
     */
    export function toList(
        clr: Exclude<Value, Value_Hex> | Value_All | { data: Value_All; },
        separator: "comma" | "space",
        errContext: LocalErrors.Context,
        errMaker: LocalErrors.ConstructorFn,
        _defaultSpace?: Exclude<keyof Value_All, 'hex'>,
    ): string {
        const defaultSpace = _defaultSpace ?? 'hsl';

        // returns - converts
        if ( typeof clr === 'string' ) {
            return hexValidator( clr, errContext, errMaker );
        }

        // returns - already built
        if ( isSingleShade( clr ) ) {

            const converter = ColourUtilities.toList[ defaultSpace ] as ( clr: Value_Generic<typeof defaultSpace> ) => string;

            return converter( validator(
                clr.data[ defaultSpace ],
                defaultSpace,
                errContext,
                errMaker,
            ) );
        }

        // returns - already built
        if ( isAllValues( clr ) ) {

            const converter = ColourUtilities.toList[ defaultSpace ] as ( clr: Value_Generic<typeof defaultSpace> ) => string;

            return converter( validator(
                clr[ defaultSpace ],
                defaultSpace,
                errContext,
                errMaker,
            ) );
        }

        // returns - hsl
        if ( 's' in clr ) {
            return ColourUtilities.toList.hsl( hslValidator(
                clr,
                errContext,
                errMaker,
            ), separator );
        }

        // returns - oklch
        if ( 'c' in clr ) {
            return ColourUtilities.toList.lch( lchValidator(
                clr,
                errContext,
                errMaker,
            ) );
        }

        // returns - rgb
        return ColourUtilities.toList.rgb( rgbValidator(
            clr,
            errContext,
            errMaker,
        ), separator );
    }

    /**
     * @since ___PKG_VERSION___
     */
    export namespace toList {

        export function hsl(
            clr: Value_HSL | Value_All | { data: Value_All; },
            separator: "comma" | "space" = 'space',
        ): string {
            const hsl = toHSL( clr );
            const sep = separator === 'space' ? ' ' : ', ';
            return `${ hsl.h }${ sep }${ hsl.s }%${ sep }${ hsl.l }%`;
        }

        export function lch(
            clr: Value_LCH | Value_All | { data: Value_All; },
        ): string {
            const lch = toLCH( clr );
            return `${ lch.l }% ${ lch.c } ${ lch.h }`;
        }

        export function rgb(
            clr: Value_RGB | Value_All | { data: Value_All; },
            separator: "comma" | "space" = 'space',
        ): string {
            const rgb = toRGB( clr );
            const sep = separator === 'space' ? ' ' : ', ';
            return `${ rgb.r }${ sep }${ rgb.g }${ sep }${ rgb.b }`;
        }
    }

    /**
     * @since ___PKG_VERSION___
     */
    export function toString(
        clr: Value | Value_All | { data: Value_All; },
        separator: "comma" | "space",
        errContext: LocalErrors.Context,
        errMaker: LocalErrors.ConstructorFn,
        _defaultSpace?: keyof Value_All,
    ): string {
        const defaultSpace = _defaultSpace ?? 'hsl';

        // returns - converts
        if ( typeof clr === 'string' ) {
            return hexValidator( clr, errContext, errMaker );
        }

        // returns - already built
        if ( isSingleShade( clr ) ) {

            const converter = ColourUtilities.toString[ defaultSpace ] as ( clr: Value_Generic<typeof defaultSpace> ) => string;

            return converter( validator(
                clr.data[ defaultSpace ],
                defaultSpace,
                errContext,
                errMaker,
            ) );
        }

        // returns - already built
        if ( isAllValues( clr ) ) {

            const converter = ColourUtilities.toString[ defaultSpace ] as ( clr: Value_Generic<typeof defaultSpace> ) => string;

            return converter( validator(
                clr[ defaultSpace ],
                defaultSpace,
                errContext,
                errMaker,
            ) );
        }

        // returns - hsl
        if ( 's' in clr ) {
            return ColourUtilities.toString.hsl( hslValidator(
                clr,
                errContext,
                errMaker,
            ), separator );
        }

        // returns - oklch
        if ( 'c' in clr ) {
            return ColourUtilities.toString.lch( lchValidator(
                clr,
                errContext,
                errMaker,
            ) );
        }

        // returns - rgb
        return ColourUtilities.toString.rgb( rgbValidator(
            clr,
            errContext,
            errMaker,
        ), separator );
    }

    /**
     * @since 0.1.0-alpha
     */
    export namespace toString {

        export function hex(
            clr: Value_Hex | Value_All | { data: Value_All; },
        ): string {
            return '#' + toHex( clr );
        }

        export function hsl(
            clr: Value_HSL | Value_All | { data: Value_All; },
            separator: "comma" | "space" = 'comma',
        ): string {
            return `hsl( ${ toList.hsl( clr, separator ) } )`;
        }

        export function lch(
            clr: Value_LCH | Value_All | { data: Value_All; },
        ): string {
            return `lch( ${ toList.lch( clr ) } )`;
        }

        export function rgb(
            clr: Value_RGB | Value_All | { data: Value_All; },
            separator: "comma" | "space" = 'comma',
        ): string {
            return `rgb( ${ toList.rgb( clr, separator ) } )`;
        }
    }

    /**
     * @since ___PKG_VERSION___
     */
    export namespace Async {

        /**
         * @since ___PKG_VERSION___
         */
        async function validator<T_Space extends keyof Value_All>(
            clr: { data: Value_All; } | Value_All | Value_Generic<T_Space>,
            space: T_Space,
            errContext: LocalErrors.Context,
            errMaker: LocalErrors.ConstructorFn,
        ): Promise<Value_Generic<T_Space>> {
            let validClr: Value_Generic<T_Space>;

            if ( typeof clr === 'object' ) {

                if ( isSingleShade( clr ) ) {
                    validClr = clr.data[ space ] as Value_Generic<T_Space>;
                } else if ( isAllValues( clr ) ) {
                    validClr = clr[ space ] as Value_Generic<T_Space>;
                } else {
                    validClr = clr;
                }
            } else {
                validClr = clr;
            }

            // returns
            switch ( space ) {

                case 'hex':
                    return hexValidator(
                        validClr as Value_Hex,
                        errContext,
                        errMaker,
                    ) as Promise<Value_Generic<T_Space>>;

                case 'hsl':
                    return hslValidator(
                        validClr as Value_HSL,
                        errContext,
                        errMaker,
                    ) as Promise<Value_Generic<T_Space>>;

                case 'lch':
                    return lchValidator(
                        validClr as Value_LCH,
                        errContext,
                        errMaker,
                    ) as Promise<Value_Generic<T_Space>>;

                case 'rgb':
                    return rgbValidator(
                        validClr as Value_RGB,
                        errContext,
                        errMaker,
                    ) as Promise<Value_Generic<T_Space>>;
            }
        }

        /**
         * Validates an input hex code, throwing an error if needed.
         */
        async function hexValidator(
            hex: string,
            context: LocalErrors.Context,
            errMaker: LocalErrors.ConstructorFn,
        ): Promise<Value_Hex> {
            const uppercaseInput = hex.toUpperCase();

            // throws
            if ( !uppercaseInput.match( /^#?[0-9|A-H]{3,6}$/i ) ) {
                throw errMaker(
                    `Hex code '${ hex }' did not match required pattern`,
                    context,
                    { cause: hex },
                );
            }

            return hex;
        };

        /**
         * Validates an input HSL obj, throwing an error if needed.
         */
        async function hslValidator(
            hsl: Partial<Value_HSL>,
            context: LocalErrors.Context,
            errMaker: LocalErrors.ConstructorFn,
        ): Promise<Value_HSL> {
            // throws
            if ( typeof hsl !== 'object' || hsl === null ) {
                throw errMaker(
                    `HSL input must be an object with 'h', 's', and 'l' properties (was ${ hsl === null ? 'null' : typeof hsl })`,
                    context,
                    { cause: hsl },
                );
            }

            return Promise.all( [
                makeNumberAsync( hsl.h ),
                makeNumberAsync( hsl.s ),
                makeNumberAsync( hsl.l ),
            ] ).then(
                ( [ hue, sat, lit ] ) => {
                    // throws
                    if ( hue === null || sat === null || lit === null ) {
                        throw errMaker(
                            `HSL input must have values for 'h', 's', and 'l' properties`,
                            context,
                            { cause: hsl },
                        );
                    }

                    // throws
                    if (
                        typeof hue !== 'number'
                        || typeof sat !== 'number'
                        || typeof lit !== 'number'
                    ) {
                        throw errMaker(
                            `HSL input must have numerical values for 'h', 's', and 'l' properties`,
                            context,
                            { cause: hsl },
                        );
                    }

                    return {
                        h: Math.max( 0, Math.min( 360, hue ) ),
                        s: Math.max( 0, Math.min( 100, sat ) ),
                        l: Math.max( 0, Math.min( 100, lit ) ),
                    };
                }
            );

        };

        /**
         * Validates an input LCH obj, throwing an error if needed.
         */
        async function lchValidator(
            lch: Partial<Value_LCH>,
            context: LocalErrors.Context,
            errMaker: LocalErrors.ConstructorFn,
        ): Promise<Value_LCH> {
            // throws
            if ( typeof lch !== 'object' || lch === null ) {
                throw errMaker(
                    `LCH input must be an object with 'l', 'c', and 'h' properties (was ${ lch === null ? 'null' : typeof lch })`,
                    context,
                    { cause: lch },
                );
            }

            return Promise.all( [
                makeNumberAsync( lch.l ),
                makeNumberAsync( lch.c ),
                makeNumberAsync( lch.h ),
            ] ).then(
                ( [ lum, chr, hue ] ) => {
                    // throws
                    if ( lum === null || chr === null || hue === null ) {
                        throw errMaker(
                            `LCH input must have values for 'l', 'c', and 'h' properties`,
                            context,
                            { cause: lch },
                        );
                    }

                    // throws
                    if (
                        typeof lum !== 'number'
                        || typeof chr !== 'number'
                        || typeof hue !== 'number'
                    ) {
                        throw errMaker(
                            `LCH input must have numerical values for 'l', 'c', and 'h' properties`,
                            context,
                            { cause: lch },
                        );
                    }

                    return {
                        l: Math.max( 0, Math.min( 100, lum ) ),
                        c: chr,
                        h: hue,
                    };
                }
            );

        };

        /**
         * Validates an input RGB obj, throwing an error if needed.
         */
        async function rgbValidator(
            rgb: Partial<Value_RGB>,
            context: LocalErrors.Context,
            errMaker: LocalErrors.ConstructorFn,
        ): Promise<Value_RGB> {
            // throws
            if ( typeof rgb !== 'object' || rgb === null ) {
                throw errMaker(
                    `RGB input must be an object with 'r', 'g', and 'b' properties (was ${ rgb === null ? 'null' : typeof rgb })`,
                    context,
                    { cause: rgb },
                );
            }

            return Promise.all( [
                makeNumberAsync( rgb.r ),
                makeNumberAsync( rgb.g ),
                makeNumberAsync( rgb.b ),
            ] ).then(
                ( [ red, gre, blu ] ) => {
                    // throws
                    if ( red === null || gre === null || blu === null ) {
                        throw errMaker(
                            `RGB input must have values for 'r', 'g', and 'b' properties`,
                            context,
                            { cause: rgb },
                        );
                    }

                    // throws
                    if (
                        typeof red !== 'number'
                        || typeof gre !== 'number'
                        || typeof blu !== 'number'
                    ) {
                        throw errMaker(
                            `RGB input must have numerical values for 'r', 'g', and 'b' properties`,
                            context,
                            { cause: rgb },
                        );
                    }

                    return {
                        r: Math.max( 0, Math.min( 255, red ) ),
                        g: Math.max( 0, Math.min( 255, gre ) ),
                        b: Math.max( 0, Math.min( 255, blu ) ),
                    };
                }
            );

        };

        /**
         * @since ___PKG_VERSION___
         */
        export async function toHex(
            clr: Value | Value_All | { data: Value_All; },
            errMaker: LocalErrors.ConstructorFn = defaultErrorMaker,
        ): Promise<Value_Hex> {
            const errContext = {
                function: 'ColourUtilities.Async.toHex',
            };

            // throws
            if ( !clr ) {
                throw errMaker(
                    `Input clr '${ clr }' was falsey`,
                    errContext,
                    { cause: clr },
                );
            }

            const _hexFormatter = ( hex: string ) => hex.toUpperCase().replace( /^#/gi, '' );

            const _hexValidator = async ( hex: string | Promise<string> ) => hexValidator(
                await hex,
                errContext,
                errMaker,
            ).then( _hexFormatter );

            // returns - plain
            if ( typeof clr === 'string' ) {
                return _hexValidator( clr );
            }

            // returns - already built
            if ( 'data' in clr ) {
                return _hexValidator( clr.data.hex );
            }

            // returns - plain
            if ( 'hex' in clr ) {
                return _hexValidator( clr.hex );
            }

            // returns - hsl
            if ( 's' in clr ) {
                return _hexFormatter( clrConvert.hsl.hex.raw( clr.h, clr.s, clr.l ) );
            }

            // returns - lch
            if ( 'c' in clr ) {
                return _hexFormatter( clrConvert.lch.hex.raw( clr.l, clr.c, clr.h ) );
            }

            // clr is rgb
            return _hexFormatter( clrConvert.rgb.hex.raw( clr.r, clr.g, clr.b ) );
        }

        /**
         * @since ___PKG_VERSION___
         */
        export async function toHSL(
            clr: Value | Value_All | { data: Value_All; },
            errMaker: LocalErrors.ConstructorFn = defaultErrorMaker,
            round: boolean = true,
        ): Promise<Value_HSL> {
            const errContext = {
                function: 'ColourUtilities.Async.toHSL',
            };

            // throws
            if ( !clr ) {
                throw errMaker(
                    `Input clr '${ clr }' was falsey`,
                    errContext,
                    { cause: clr },
                );
            }

            const _hslFormatter = ( hsl: Value_HSL ) => round ? {
                h: roundToPixel( hsl.h, 100 ),
                s: roundToPixel( hsl.s, 100 ),
                l: roundToPixel( hsl.l, 100 ),
            } : hsl;

            const _hslValidator = ( hsl: Partial<Value_HSL> ) => hslValidator(
                hsl,
                errContext,
                errMaker,
            ).then( _hslFormatter );

            // returns - converts
            if ( typeof clr === 'string' ) {
                return hexValidator( clr, errContext, errMaker ).then(
                    validHex => {
                        const [ h, s, l ] = clrConvert.hex.hsl.raw( validHex );
                        return _hslFormatter( { h, s, l } );
                    }
                );
            }

            // returns - already built
            if ( 'data' in clr ) {
                return _hslValidator( clr.data.hsl );
            }

            // returns - plain
            if ( 'hsl' in clr ) {
                return _hslValidator( clr.hsl );
            }

            // returns - plain
            if ( 's' in clr ) {
                return _hslValidator( clr );
            }

            // returns - lch
            if ( 'c' in clr ) {
                return lchValidator( clr, errContext, errMaker ).then(
                    validLCH => {
                        const [ h, s, l ] = clrConvert.lch.hsl.raw( [ validLCH.l, validLCH.c, validLCH.h ] );
                        return _hslFormatter( { h, s, l } );
                    }
                );
            }

            // clr is rgb
            return rgbValidator( clr, errContext, errMaker ).then(
                validRGB => {
                    const [ h, s, l ] = clrConvert.rgb.hsl.raw( [ validRGB.r, validRGB.g, validRGB.b ] );
                    return _hslFormatter( { h, s, l } );
                }
            );
        }

        /**
         * @since ___PKG_VERSION___
         */
        export async function toLCH(
            clr: Value | Value_All | { data: Value_All; },
            errMaker: LocalErrors.ConstructorFn = defaultErrorMaker,
            round: boolean = true,
        ): Promise<Value_LCH> {
            const errContext = {
                function: 'ColourUtilities.Async.toLCH',
            };

            // throws
            if ( !clr ) {
                throw errMaker(
                    `Input clr '${ clr }' was falsey`,
                    errContext,
                    { cause: clr },
                );
            }

            const _lchFormatter = ( lch: Value_LCH ) => round ? {
                l: roundToPixel( lch.l, 1000 ),
                c: roundToPixel( lch.c, 2000 ),
                h: roundToPixel( lch.h, 1000 ),
            } : lch;

            const _lchValidator = ( hsl: Partial<Value_LCH> ) => lchValidator(
                hsl,
                errContext,
                errMaker,
            ).then( _lchFormatter );

            // returns - converts
            if ( typeof clr === 'string' ) {
                return hexValidator( clr, errContext, errMaker ).then(
                    validHex => {
                        const [ l, c, h ] = clrConvert.hex.lch.raw( validHex );
                        return _lchFormatter( { l, c, h } );
                    }
                );
            }

            // returns - already built
            if ( 'data' in clr ) {
                return _lchValidator( clr.data.lch );
            }

            // returns - plain
            if ( 'lch' in clr ) {
                return _lchValidator( clr.lch );
            }

            // returns - plain
            if ( 'c' in clr ) {
                return _lchValidator( clr );
            }

            // returns - hsl
            if ( 'h' in clr ) {
                return hslValidator( clr, errContext, errMaker ).then(
                    validHSL => {
                        const [ l, c, h ] = clrConvert.hsl.lch.raw( [ validHSL.h, validHSL.s, validHSL.l ] );
                        return _lchFormatter( { l, c, h } );
                    }
                );
            }

            // clr is rgb
            return rgbValidator( clr, errContext, errMaker ).then(
                validRGB => {
                    const [ l, c, h ] = clrConvert.rgb.lch.raw( [ validRGB.r, validRGB.g, validRGB.b ] );
                    return _lchFormatter( { l, c, h } );
                }
            );
        }

        /**
         * @since ___PKG_VERSION___
         */
        export async function toRGB(
            clr: Value | Value_All | { data: Value_All; },
            errMaker: LocalErrors.ConstructorFn = defaultErrorMaker,
            round: boolean = true,
        ): Promise<Value_RGB> {
            const errContext = {
                function: 'ColourUtilities.Async.toRGB',
            };

            // throws
            if ( !clr ) {
                throw errMaker(
                    `Input clr '${ clr }' was falsey`,
                    errContext,
                    { cause: clr },
                );
            }

            const _rgbFormatter = ( rgb: Value_RGB ) => round ? {
                r: roundToPixel( rgb.r, 100 ),
                g: roundToPixel( rgb.g, 100 ),
                b: roundToPixel( rgb.b, 100 ),
            } : rgb;

            const _rgbValidator = ( rgb: Partial<Value_RGB> ) => rgbValidator(
                rgb,
                errContext,
                errMaker,
            ).then( _rgbFormatter );

            // returns - converts
            if ( typeof clr === 'string' ) {
                return hexValidator( clr, errContext, errMaker ).then(
                    validHex => {
                        const [ r, g, b ] = clrConvert.hex.rgb.raw( validHex );
                        return _rgbFormatter( { r, g, b } );
                    }
                );
            }

            // returns - already built
            if ( 'data' in clr ) {
                return _rgbValidator( clr.data.rgb );
            }

            // returns - plain
            if ( 'rgb' in clr ) {
                return _rgbValidator( clr.rgb );
            }

            // returns - plain
            if ( 'g' in clr ) {
                return _rgbValidator( clr );
            }

            // returns - lch
            if ( 'c' in clr ) {
                return lchValidator( clr, errContext, errMaker ).then(
                    validLCH => {
                        const [ r, g, b ] = clrConvert.lch.rgb.raw( [ validLCH.l, validLCH.c, validLCH.h ] );
                        return _rgbFormatter( { r, g, b } );
                    }
                );
            }

            // clr is hsl
            return hslValidator( clr, errContext, errMaker ).then(
                validHSL => {
                    const [ r, g, b ] = clrConvert.hsl.rgb.raw( [ validHSL.h, validHSL.s, validHSL.l ] );
                    return _rgbFormatter( { r, g, b } );
                }
            );
        }

        /**
         * @since ___PKG_VERSION___
         */
        export async function toString(
            clr: Value | Value_All | { data: Value_All; },
            separator: "comma" | "space",
            errContext: LocalErrors.Context,
            errMaker: LocalErrors.ConstructorFn,
            _defaultSpace?: keyof Value_All,
        ): Promise<string> {
            const defaultSpace = _defaultSpace ?? 'hsl';

            // returns - converts
            if ( typeof clr === 'string' ) {
                return hexValidator( clr, errContext, errMaker ).then(
                    ColourUtilities.toString.hex
                );
            }

            // returns - already built
            if ( isSingleShade( clr ) ) {

                return validator(
                    clr.data[ defaultSpace ],
                    defaultSpace,
                    errContext,
                    errMaker,
                ).then(
                    ColourUtilities.toString[ defaultSpace ] as ( clr: Value_Generic<typeof defaultSpace> ) => string
                );
            }

            // returns - already built
            if ( isAllValues( clr ) ) {

                return validator(
                    clr[ defaultSpace ],
                    defaultSpace,
                    errContext,
                    errMaker,
                ).then(
                    ColourUtilities.toString[ defaultSpace ] as ( clr: Value_Generic<typeof defaultSpace> ) => string
                );
            }

            // returns - hsl
            if ( 's' in clr ) {
                return hslValidator(
                    clr,
                    errContext,
                    errMaker,
                ).then( str => ColourUtilities.toString.hsl( str, separator ) );
            }

            // returns - oklch
            if ( 'c' in clr ) {
                return lchValidator(
                    clr,
                    errContext,
                    errMaker,
                ).then( ColourUtilities.toString.lch );
            }

            // returns - rgb
            return rgbValidator(
                clr,
                errContext,
                errMaker,
            ).then( str => ColourUtilities.toString.rgb( str, separator ) );
        }
    }



    /* SHADE MAP FUNCTIONS
     * ====================================================================== */

    /**
     * Generates a single pair of contrast test results used by the
     * {@link Tokens_Colour_ShadeMap.Shade} objects.
     *
     * @since 0.1.0-alpha
     * @since ___PKG_VERSION___ — Moved to ColourUtilities and renamed.
     * @internal
     */
    export class ContrastTest {

        static #standards: ContrastTest.Standards;

        public static set standards( val: ContrastTest.Standards ) {
            if ( typeof this.#standards === 'undefined' ) {
                this.#standards = val;
            }
        }

        public static get standards(): ContrastTest.Standards {

            return this.#standards ?? {
                aa: {
                    ui: 3,
                    text: 4.5,
                },
                aaa: {
                    ui: 4.5,
                    text: 7,
                },
            };
        }

        protected static cachePath: string = '.scripts/.cache/contrast';

        static #testCache: { [ key: string ]: number; } = {};

        /**
         * Gets the contrast ratio for the given colours, checking the cache for
         * values first.
         */
        public static test(
            clrA: ColourUtilities.Value_All,
            clrB: ColourUtilities.Value_All,
        ): number {
            const cacheKey = [
                [ clrA.rgb.r, clrA.rgb.g, clrA.rgb.b ].join( '-' ),
                [ clrB.rgb.r, clrA.rgb.g, clrB.rgb.b ].join( '-' ),
            ].sort().join( '_' );

            // returns
            if ( typeof this.#testCache[ cacheKey ] !== 'undefined' ) {
                return this.#testCache[ cacheKey ];
            }

            this.#testCache[ cacheKey ] = WcagContrast.rgb(
                [ clrA.rgb.r, clrA.rgb.g, clrA.rgb.b ],
                [ clrB.rgb.r, clrB.rgb.g, clrB.rgb.b ],
            );

            return this.#testCache[ cacheKey ];
        }

        public readonly ratio: number;
        public readonly aa: ContrastTest.SingleResult;
        public readonly aaa: ContrastTest.SingleResult;

        public constructor (
            public readonly clrA: ColourUtilities.Value_All,
            public readonly clrB: ColourUtilities.Value_All,
        ) {
            this.ratio = ContrastTest.test( clrA, clrB );

            const standards = ContrastTest.standards;

            // @ts-expect-error - this will be filled
            const tmp_results: Omit<ContrastTest.Result, 'ratio'> = {};

            for ( const t_standard in standards ) {
                const standard = t_standard as keyof typeof standards;

                if ( typeof tmp_results[ standard ] === 'undefined' ) {
                    // @ts-expect-error - this will be filled
                    tmp_results[ standard ] = {};
                }

                for ( const t_testName in standards[ standard ] ) {
                    const testName = t_testName as keyof typeof standards[ typeof standard ];

                    tmp_results[ standard ][ testName ] = this.ratio >= standards[ standard ][ testName ];
                }
            }

            this.aa = tmp_results.aa;
            this.aaa = tmp_results.aaa;
        }

        public toJSON(): ContrastTest.JSON {
            return this.valueOf();
        }

        public valueOf(): ContrastTest.Result {
            return {
                ratio: this.ratio,
                aa: this.aa,
                aaa: this.aaa,
            };
        }
    }

    /**
     * Utilities for the {@link Tokens} class.
     * 
     * @since 0.1.0-alpha
     * @since ___PKG_VERSION___ — Moved to ColourUtilities and renamed.
     * @internal
     */
    export namespace ContrastTest {

        /**
         * @since 0.1.0-alpha
         */
        export type JSON = Result;

        /**
         * The partialized version of the {@link ContrastTest.Schema} accepted as input.
         *
         * @since 0.1.0-alpha
         */
        export type Part = Partial<Result>;

        /**
         * @since 0.1.0-alpha
         * @since ___PKG_VERSION___ — Renamed.
         */
        export type Result = {
            ratio: number;
            aa: SingleResult;
            aaa: SingleResult;
        };

        /**
         * @since 0.1.0-alpha
         * @since ___PKG_VERSION___ — Renamed.
         */
        export type SingleResult = {
            ui: boolean;
            text: boolean;
        };

        /**
         * An object defining the minimum contrast ratios required for a pass.
         * 
         * @since 0.1.0-alpha
         * @since ___PKG_VERSION___ — Renamed.
         */
        export type Standards = {
            [ T in "aa" | "aaa" ]: {
                [ K in keyof SingleResult ]: number;
            }
        };
    }

    /**
     * Utilities for dealing with shade level values.
     * 
     * @since ___PKG_VERSION___
     */
    export namespace Levels {

        /**
         * A key index for converting colour made shade levels to their opposite
         * (e.g., dark to light modes).
         * 
         * @since 0.1.0-alpha
         * @since ___PKG_VERSION___ — Moved from {@link ColourUtilities} to {@link ColourUtilities.Levels} and renamed.
         */
        export const converter: Readonly<{
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
        }> = {
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
        } satisfies {
            [ L in "black" | "white" | Levels.Required ]: "black" | "white" | Levels.Required;
        } & {
                [ L in Levels.Optional ]: Levels.Optional;
            };

        /**
         * The shade level keys that can be optionally included in maps for this
         * system.
         *
         * @since ___PKG_VERSION___
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
         * @since ___PKG_VERSION___
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

        const levelSets = {
            any: new Set<string>( [
                ...optional,
                ...required,
            ] ),
            optional: new Set<string>( optional ),
            required: new Set<string>( required ),
        } as const;

        /**
         * All possible shade levels possibly in shade maps for this system.
         * 
         * @since ___PKG_VERSION___
         */
        export type Any = Optional | Required;

        /**
         * Shade levels that can be optionally included in shade maps for this system.
         * 
         * @since 0.1.0-alpha — Introduced as a global `Levels.Optional` type in `02-tokens/@types.d.ts`.
         * @since ___PKG_VERSION___ — Moved to {@link ColourUtilities.Levels} and renamed.
         */
        export type Optional = typeof optional[ number ];

        /**
         * Shade levels always included in shade maps for this system.
         * 
         * @since 0.1.0-alpha — Introduced as a global `Levels.Required` type in `02-tokens/@types.d.ts`.
         * @since ___PKG_VERSION___ — Moved to {@link ColourUtilities.Levels} and renamed.
         */
        export type Required = typeof required[ number ];

        /**
         * Augments a single level by the given amount, creating a new valid level.
         * 
         * @since ___PKG_VERSION___
         */
        export function augmentor<T_AnyColourLevel extends Levels.Any>(
            allColourLevels: Set<T_AnyColourLevel>,
            level: "black" | "white" | NoInfer<T_AnyColourLevel>,
            levelOffset: number,
            minimum: number = 0,
            maximum: number = 1000,
        ): "black" | "white" | NoInfer<T_AnyColourLevel> {
            // returns
            if ( levelOffset === 0 && !minimum && !maximum ) {
                return level;
            }

            levelOffset = Math.round( levelOffset / 50 ) * 50;

            const validator = ( _num: number ) => Math.max(
                minimum,
                Math.min( _num, maximum ),
            );

            let levelAsNumber: number;

            switch ( level ) {

                case 'black':
                    levelAsNumber = 950;
                    break;

                case 'white':
                    levelAsNumber = 50;
                    break;

                default:
                    levelAsNumber = Number( level );
                    break;
            }

            const newLevel_num = validator( levelAsNumber + levelOffset );

            // returns
            if ( newLevel_num > 900 ) {
                return 'black';
            }

            // returns
            if ( newLevel_num < 100 ) {
                return 'white';
            }

            let newLevel_valid_str = String( newLevel_num ) as T_AnyColourLevel;

            const offsetStep = levelOffset < 0 ? -50 : 50;

            let i = 1;

            // returns if black or white levels are reached
            while (
                !allColourLevels.has( newLevel_valid_str )
                && i < 100
            ) {
                const _thisOffsetStep = offsetStep * i;

                let _testNum = newLevel_num + _thisOffsetStep;

                // start by trying addition
                newLevel_valid_str = String( _testNum ) as T_AnyColourLevel;

                // returns
                if ( _testNum > 900 ) {
                    return 'black';
                }

                // returns
                if ( _testNum < 100 ) {
                    return 'white';
                }

                // now test subtracting instead
                if ( !allColourLevels.has( newLevel_valid_str ) ) {
                    _testNum = newLevel_num - _thisOffsetStep;
                    newLevel_valid_str = String( _testNum ) as T_AnyColourLevel;
                }

                // returns
                if ( _testNum > 900 ) {
                    return 'black';
                }

                // returns
                if ( _testNum < 100 ) {
                    return 'white';
                }

                i++;
            }

            return newLevel_valid_str;
        }

        function toNumbers<T_Level extends Levels.Optional | Levels.Required>(
            arr: ( "black" | "white" | T_Level )[],
        ): number[] {

            return arr.map(
                str => {

                    // returns
                    if ( str === 'black' || str === 'white' || !levelSets.any.has( str ) ) {
                        return false;
                    }

                    const num = Number( str );

                    return Number.isNaN( num ) ? false : num;
                }
            ).filter(
                num => num !== false
            );
        }

        /**
         * Gets the max level in the given array.
         * 
         * @since ___PKG_VERSION___
         */
        export function max<T_Level extends Levels.Optional | Levels.Required>(
            arr: ( "black" | "white" | T_Level )[],
        ): "black" | "white" | T_Level {

            // returns
            if ( arr.includes( 'black' ) ) {
                return 'black';
            }

            const levelNums = toNumbers( arr );

            // returns
            if ( !levelNums.length ) {
                return arr[ 0 ] ?? 'black';
            }

            return String( Math.max( ...levelNums ) ) as T_Level;
        }

        /**
         * Gets the max level in the given array.
         * 
         * @since ___PKG_VERSION___
         */
        export function min<T_Level extends Levels.Optional | Levels.Required>(
            arr: ( "black" | "white" | T_Level )[],
        ): "black" | "white" | T_Level {

            // returns
            if ( arr.includes( 'white' ) ) {
                return 'white';
            }

            const levelNums = toNumbers( arr );

            // returns
            if ( !levelNums.length ) {
                return arr[ 0 ] ?? 'white';
            }

            return String( Math.min( ...levelNums ) ) as T_Level;
        }

        /**
         * Converts the given shade level to its oppposite (via
         * {@link ColourUtilities.Levels.converter}).
         * 
         * @since 0.1.0-alpha
         * @since ___PKG_VERSION___ — Moved to {@link ColourUtilities.Levels} and renamed.
         */
        export function toDark<
            T_LightLevel extends "black" | "white" | Levels.Any
        >( lightLevel: T_LightLevel ): typeof converter[ T_LightLevel ] {
            return converter[ lightLevel ];
        }
    }
}