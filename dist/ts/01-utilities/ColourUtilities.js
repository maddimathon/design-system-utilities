/**
 * @since 0.1.0-alpha
 *
 * @packageDocumentation
 */
/*!
 * @maddimathon/design-system-utilities@0.1.0-beta.0.draft
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
export var ColourUtilities;
(function (ColourUtilities) {
    const defaultErrorMaker = (message, context, opts) => new LocalErrors.ColourUtilitiesError(message, context, opts);
    /* SINGLE SHADES
     * ====================================================================== */
    /**
     * Ensures a valid and complete shade object.
     */
    async function validateShade(input, errMaker = defaultErrorMaker, round) {
        // throws
        if (!input) {
            throw errMaker(`Input '${input}' was falsey`, { function: 'ColourUtilities.validateShade' }, { cause: input });
        }
        // returns
        if (typeof input === 'object' && 'hex' in input) {
            return input;
        }
        return Promise.all([
            toHex(input, errMaker),
            toHSL(input, errMaker, round),
            toRGB(input, errMaker, round),
            toLCH(input, errMaker, round),
        ]).then(([hex, hsl, rgb, lch]) => ({ hex, hsl, rgb, lch }));
    }
    ColourUtilities.validateShade = validateShade;
    /* UTILITY FUNCTIONS
     * ====================================================================== */
    /**
     * @since 0.1.0-beta.0.draft
     */
    function isAllValues(clr, spaceToCheck = 'hsl') {
        // returns
        if (typeof clr !== 'object') {
            return false;
        }
        return !!((spaceToCheck in clr) && clr[spaceToCheck]);
    }
    /**
     * @since 0.1.0-beta.0.draft
     */
    function isSingleShade(clr) {
        // returns
        if (typeof clr !== 'object') {
            return false;
        }
        return !!(('data' in clr) && clr.data);
    }
    /**
     * @since 0.1.0-beta.0.draft
     */
    function validator(clr, space, errContext, errMaker) {
        let validClr;
        if (typeof clr === 'object') {
            if (isSingleShade(clr)) {
                validClr = clr.data[space];
            }
            else if (isAllValues(clr)) {
                validClr = clr[space];
            }
            else {
                validClr = clr;
            }
        }
        else {
            validClr = clr;
        }
        // returns
        switch (space) {
            case 'hex':
                return hexValidator(validClr, errContext, errMaker);
            case 'hsl':
                return hslValidator(validClr, errContext, errMaker);
            case 'lch':
                return lchValidator(validClr, errContext, errMaker);
            // case 'oklch':
            //     return oklchValidator(
            //         validClr as Value_OKLCH,
            //         errContext,
            //         errMaker,
            //     ) as Value_Generic<T_Space>;
            case 'rgb':
                return rgbValidator(validClr, errContext, errMaker);
        }
    }
    /**
     * Validates an input hex code, throwing an error if needed.
     */
    function hexValidator(hex, context, errMaker) {
        const uppercaseInput = hex.toUpperCase();
        // throws
        if (!uppercaseInput.match(/^#?[0-9|A-H]{3,6}$/i)) {
            throw errMaker(`Hex code '${hex}' did not match required pattern`, context, { cause: hex });
        }
        return hex;
    }
    ;
    /**
     * Validates an input HSL obj, throwing an error if needed.
     */
    function hslValidator(hsl, context, errMaker) {
        // throws
        if (typeof hsl !== 'object' || hsl === null) {
            throw errMaker(`HSL input must be an object with 'h', 's', and 'l' properties (was ${hsl === null ? 'null' : typeof hsl})`, context, { cause: hsl });
        }
        const hue = makeNumber(hsl.h);
        const sat = makeNumber(hsl.s);
        const lit = makeNumber(hsl.l);
        // throws
        if (hue === null || sat === null || lit === null) {
            throw errMaker(`HSL input must have values for 'h', 's', and 'l' properties`, context, { cause: hsl });
        }
        // throws
        if (typeof hue !== 'number'
            || typeof sat !== 'number'
            || typeof lit !== 'number') {
            throw errMaker(`HSL input must have numerical values for 'h', 's', and 'l' properties`, context, { cause: hsl });
        }
        return {
            h: Math.max(0, Math.min(360, hue)),
            s: Math.max(0, Math.min(100, sat)),
            l: Math.max(0, Math.min(100, lit)),
        };
    }
    ;
    /**
     * Validates an input LCH obj, throwing an error if needed.
     */
    function lchValidator(lch, context, errMaker) {
        // throws
        if (typeof lch !== 'object' || lch === null) {
            throw errMaker(`LCH input must be an object with 'l', 'c', and 'h' properties (was ${lch === null ? 'null' : typeof lch})`, context, { cause: lch });
        }
        const lum = makeNumber(lch.l);
        const chr = makeNumber(lch.c);
        const hue = makeNumber(lch.h);
        // throws
        if (lum === null || chr === null || hue === null) {
            throw errMaker(`LCH input must have values for 'l', 'c', and 'h' properties`, context, { cause: lch });
        }
        // throws
        if (typeof lum !== 'number'
            || typeof chr !== 'number'
            || typeof hue !== 'number') {
            throw errMaker(`LCH input must have numerical values for 'l', 'c', and 'h' properties`, context, { cause: lch });
        }
        return {
            l: Math.max(0, Math.min(100, lum)),
            c: chr,
            h: hue,
        };
    }
    ;
    /**
     * Validates an input RGB obj, throwing an error if needed.
     */
    function rgbValidator(rgb, context, errMaker) {
        // throws
        if (typeof rgb !== 'object' || rgb === null) {
            throw errMaker(`RGB input must be an object with 'r', 'g', and 'b' properties (was ${rgb === null ? 'null' : typeof rgb})`, context, { cause: rgb });
        }
        const red = makeNumber(rgb.r);
        const gre = makeNumber(rgb.g);
        const blu = makeNumber(rgb.b);
        // throws
        if (red === null || gre === null || blu === null) {
            throw errMaker(`RGB input must have values for 'r', 'g', and 'b' properties`, context, { cause: rgb });
        }
        // throws
        if (typeof red !== 'number'
            || typeof gre !== 'number'
            || typeof blu !== 'number') {
            throw errMaker(`RGB input must have numerical values for 'r', 'g', and 'b' properties`, context, { cause: rgb });
        }
        return {
            r: Math.max(0, Math.min(255, red)),
            g: Math.max(0, Math.min(255, gre)),
            b: Math.max(0, Math.min(255, blu)),
        };
    }
    ;
    /**
     * @since 0.1.0-alpha
     */
    function toHex(clr, errMaker = defaultErrorMaker) {
        const errContext = {
            function: 'ColourUtilities.toHex',
        };
        // throws
        if (!clr) {
            throw errMaker(`Input clr '${clr}' was falsey`, errContext, { cause: clr });
        }
        const _hexFormatter = (hex) => hex.toUpperCase().replace(/^#/gi, '');
        const _hexValidator = (hex) => _hexFormatter(hexValidator(hex, errContext, errMaker));
        // returns - plain
        if (typeof clr === 'string') {
            return _hexValidator(clr);
        }
        // returns - already built
        if ('data' in clr) {
            return _hexValidator(clr.data.hex);
        }
        // returns - plain
        if ('hex' in clr) {
            return _hexValidator(clr.hex);
        }
        // returns - hsl
        if ('s' in clr) {
            return _hexFormatter(clrConvert.hsl.hex.raw(clr.h, clr.s, clr.l));
        }
        // returns - lch
        if ('c' in clr) {
            return _hexFormatter(clrConvert.lch.hex.raw(clr.l, clr.c, clr.h));
        }
        // clr is rgb
        return _hexFormatter(clrConvert.rgb.hex.raw(clr.r, clr.g, clr.b));
    }
    ColourUtilities.toHex = toHex;
    /**
     * @since 0.1.0-alpha
     */
    function toHSL(clr, errMaker = defaultErrorMaker, round = true) {
        const errContext = {
            function: 'ColourUtilities.toHSL',
        };
        // throws
        if (!clr) {
            throw errMaker(`Input clr '${clr}' was falsey`, errContext, { cause: clr });
        }
        const _hslFormatter = (hsl) => round ? {
            h: roundToPixel(hsl.h, 100),
            s: roundToPixel(hsl.s, 100),
            l: roundToPixel(hsl.l, 100),
        } : hsl;
        const _hslValidator = (hsl) => _hslFormatter(hslValidator(hsl, errContext, errMaker));
        // returns - converts
        if (typeof clr === 'string') {
            const validHex = hexValidator(clr, {
                function: 'ColourUtilities.toHSL',
            }, errMaker);
            const [h, s, l] = clrConvert.hex.hsl.raw(validHex);
            return _hslFormatter({ h, s, l });
        }
        // returns - already built
        if ('data' in clr) {
            return _hslValidator(clr.data.hsl);
        }
        // returns - plain
        if ('hsl' in clr) {
            return _hslValidator(clr.hsl);
        }
        // returns - plain
        if ('s' in clr) {
            return _hslValidator(clr);
        }
        // returns - lch
        if ('c' in clr) {
            const validLCH = lchValidator(clr, {
                function: 'ColourUtilities.toHSL',
            }, errMaker);
            const [h, s, l] = clrConvert.lch.hsl.raw([validLCH.l, validLCH.c, validLCH.h]);
            return _hslFormatter({ h, s, l });
        }
        // clr is rgb
        const validRGB = rgbValidator(clr, {
            function: 'ColourUtilities.toHSL',
        }, errMaker);
        const [h, s, l] = clrConvert.rgb.hsl.raw([validRGB.r, validRGB.g, validRGB.b]);
        return _hslFormatter({ h, s, l });
    }
    ColourUtilities.toHSL = toHSL;
    /**
     * @since 0.1.0-alpha
     */
    function toLCH(clr, errMaker = defaultErrorMaker, round = true) {
        const errContext = {
            function: 'ColourUtilities.toLCH',
        };
        // throws
        if (!clr) {
            throw errMaker(`Input clr '${clr}' was falsey`, errContext, { cause: clr });
        }
        const _lchFormatter = (lch) => round ? {
            l: roundToPixel(lch.l, 1000),
            c: roundToPixel(lch.c, 2000),
            h: roundToPixel(lch.h, 1000),
        } : lch;
        const _lchValidator = (lch) => _lchFormatter(lchValidator(lch, errContext, errMaker));
        // returns - converts
        if (typeof clr === 'string') {
            const validHex = hexValidator(clr, errContext, errMaker);
            const [l, c, h] = clrConvert.hex.lch.raw(validHex);
            return _lchFormatter({ l, c, h });
        }
        // returns - already built
        if ('data' in clr) {
            return _lchValidator(clr.data.lch);
        }
        // returns - plain
        if ('lch' in clr) {
            return _lchValidator(clr.lch);
        }
        // returns - plain
        if ('c' in clr) {
            return _lchValidator(clr);
        }
        // returns - hsl
        if ('h' in clr) {
            const validHSL = hslValidator(clr, errContext, errMaker);
            const [l, c, h] = clrConvert.hsl.lch.raw([validHSL.h, validHSL.s, validHSL.l]);
            return _lchFormatter({ l, c, h });
        }
        // clr is rgb
        const validRGB = rgbValidator(clr, errContext, errMaker);
        const [l, c, h] = clrConvert.rgb.lch.raw([validRGB.r, validRGB.g, validRGB.b]);
        return _lchFormatter({ l, c, h });
    }
    ColourUtilities.toLCH = toLCH;
    /**
     * @since 0.1.0-alpha
     */
    function toRGB(clr, errMaker = defaultErrorMaker, round = true) {
        const errContext = {
            function: 'ColourUtilities.toRGB',
        };
        // throws
        if (!clr) {
            throw errMaker(`Input clr '${clr}' was falsey`, errContext, { cause: clr });
        }
        const _rgbFormatter = (rgb) => round ? {
            r: roundToPixel(rgb.r, 100),
            g: roundToPixel(rgb.g, 100),
            b: roundToPixel(rgb.b, 100),
        } : rgb;
        const _rgbValidator = (rgb) => _rgbFormatter(rgbValidator(rgb, errContext, errMaker));
        // returns - converts
        if (typeof clr === 'string') {
            const validHex = hexValidator(clr, errContext, errMaker);
            const [r, g, b] = clrConvert.hex.rgb.raw(validHex);
            return _rgbFormatter({ r, g, b });
        }
        // returns - already built
        if ('data' in clr) {
            return _rgbValidator(clr.data.rgb);
        }
        // returns - plain
        if ('rgb' in clr) {
            return _rgbValidator(clr.rgb);
        }
        // returns - plain
        if ('g' in clr) {
            return _rgbValidator(clr);
        }
        // returns - lch
        if ('c' in clr) {
            const validLCH = lchValidator(clr, errContext, errMaker);
            const [r, g, b] = clrConvert.lch.rgb.raw([validLCH.l, validLCH.c, validLCH.h]);
            return _rgbFormatter({ r, g, b });
        }
        // clr is hsl
        const validHSL = hslValidator(clr, errContext, errMaker);
        const [r, g, b] = clrConvert.hsl.rgb.raw([validHSL.h, validHSL.s, validHSL.l]);
        return _rgbFormatter({ r, g, b });
    }
    ColourUtilities.toRGB = toRGB;
    /**
     * @since 0.1.0-alpha
     */
    async function mixColours(_clrA, _clrB, saturationMultiplier = 0) {
        const [clrA, clrB,] = await Promise.all([
            toLCH(_clrA),
            toLCH(_clrB),
        ]);
        saturationMultiplier = Math.min(1, Math.max(-1, saturationMultiplier)) * 100;
        const clrA_str = ColourUtilities.toString.lch(clrA);
        const clrB_str = ColourUtilities.toString.lch(clrB);
        const sass_mixed = `color.mix( ${clrA_str}, ${clrB_str}, $method: lch shorter hue )`;
        const sass_mixed_hsl = `color.to-gamut( ${sass_mixed}, $space: hsl, $method: local-minde )`;
        const sass_mixed_saturated = `color.scale( ${sass_mixed_hsl}, $saturation: ${saturationMultiplier}%, $space: hsl )`;
        return sass.compileStringAsync(`@use 'sass:color'; /* #{color.to-gamut( ${sass_mixed_saturated}, $space: lch, $method: local-minde )} */`).then((sassMixed) => {
            const matches = sassMixed.css.match(/lch\(\s*([\d\.]+)%\s+([\d\.]+)\s+([\d\.]+)deg\s*\)/is);
            // returns - in theory never used
            if (!(matches && matches[1] && matches[2] && matches[3])) {
                return toLCH({
                    l: (clrA.l + clrB.l) / 2,
                    c: ((clrA.c + clrB.c) / 2) * saturationMultiplier,
                    h: (clrA.h + clrB.h) / 2,
                });
            }
            return toLCH({
                l: Number(matches[1]),
                c: Number(matches[2]),
                h: Number(matches[3]),
            });
        });
    }
    ColourUtilities.mixColours = mixColours;
    /**
     * @since 0.1.0-beta.0.draft
     */
    function toString(clr, errContext, errMaker, _defaultSpace) {
        const defaultSpace = _defaultSpace ?? 'hsl';
        // returns - converts
        if (typeof clr === 'string') {
            return hexValidator(clr, errContext, errMaker);
        }
        // returns - already built
        if (isSingleShade(clr)) {
            const converter = ColourUtilities.toString[defaultSpace];
            return converter(validator(clr.data[defaultSpace], defaultSpace, errContext, errMaker));
        }
        // returns - already built
        if (isAllValues(clr)) {
            const converter = ColourUtilities.toString[defaultSpace];
            return converter(validator(clr[defaultSpace], defaultSpace, errContext, errMaker));
        }
        // returns - hsl
        if ('s' in clr) {
            return ColourUtilities.toString.hsl(hslValidator(clr, errContext, errMaker));
        }
        // returns - oklch
        if ('c' in clr) {
            return ColourUtilities.toString.lch(lchValidator(clr, errContext, errMaker));
        }
        // returns - rgb
        return ColourUtilities.toString.rgb(rgbValidator(clr, errContext, errMaker));
    }
    ColourUtilities.toString = toString;
    /**
     * @since 0.1.0-alpha
     */
    (function (toString) {
        function hex(clr) {
            return '#' + toHex(clr);
        }
        toString.hex = hex;
        function hsl(clr) {
            const hsl = toHSL(clr);
            return `hsl( ${hsl.h}, ${hsl.s}%, ${hsl.l}% )`;
        }
        toString.hsl = hsl;
        function lch(clr) {
            const lch = toLCH(clr);
            return `lch( ${lch.l}% ${lch.c} ${lch.h} )`;
        }
        toString.lch = lch;
        function rgb(clr) {
            const rgb = toRGB(clr);
            return `rgb( ${rgb.r}, ${rgb.g}, ${rgb.b} )`;
        }
        toString.rgb = rgb;
    })(toString = ColourUtilities.toString || (ColourUtilities.toString = {}));
    /**
     * @since 0.1.0-beta.0.draft
     */
    let Async;
    (function (Async) {
        /**
         * @since 0.1.0-beta.0.draft
         */
        async function validator(clr, space, errContext, errMaker) {
            let validClr;
            if (typeof clr === 'object') {
                if (isSingleShade(clr)) {
                    validClr = clr.data[space];
                }
                else if (isAllValues(clr)) {
                    validClr = clr[space];
                }
                else {
                    validClr = clr;
                }
            }
            else {
                validClr = clr;
            }
            // returns
            switch (space) {
                case 'hex':
                    return hexValidator(validClr, errContext, errMaker);
                case 'hsl':
                    return hslValidator(validClr, errContext, errMaker);
                case 'lch':
                    return lchValidator(validClr, errContext, errMaker);
                case 'rgb':
                    return rgbValidator(validClr, errContext, errMaker);
            }
        }
        /**
         * Validates an input hex code, throwing an error if needed.
         */
        async function hexValidator(hex, context, errMaker) {
            const uppercaseInput = hex.toUpperCase();
            // throws
            if (!uppercaseInput.match(/^#?[0-9|A-H]{3,6}$/i)) {
                throw errMaker(`Hex code '${hex}' did not match required pattern`, context, { cause: hex });
            }
            return hex;
        }
        ;
        /**
         * Validates an input HSL obj, throwing an error if needed.
         */
        async function hslValidator(hsl, context, errMaker) {
            // throws
            if (typeof hsl !== 'object' || hsl === null) {
                throw errMaker(`HSL input must be an object with 'h', 's', and 'l' properties (was ${hsl === null ? 'null' : typeof hsl})`, context, { cause: hsl });
            }
            return Promise.all([
                makeNumberAsync(hsl.h),
                makeNumberAsync(hsl.s),
                makeNumberAsync(hsl.l),
            ]).then(([hue, sat, lit]) => {
                // throws
                if (hue === null || sat === null || lit === null) {
                    throw errMaker(`HSL input must have values for 'h', 's', and 'l' properties`, context, { cause: hsl });
                }
                // throws
                if (typeof hue !== 'number'
                    || typeof sat !== 'number'
                    || typeof lit !== 'number') {
                    throw errMaker(`HSL input must have numerical values for 'h', 's', and 'l' properties`, context, { cause: hsl });
                }
                return {
                    h: Math.max(0, Math.min(360, hue)),
                    s: Math.max(0, Math.min(100, sat)),
                    l: Math.max(0, Math.min(100, lit)),
                };
            });
        }
        ;
        /**
         * Validates an input LCH obj, throwing an error if needed.
         */
        async function lchValidator(lch, context, errMaker) {
            // throws
            if (typeof lch !== 'object' || lch === null) {
                throw errMaker(`LCH input must be an object with 'l', 'c', and 'h' properties (was ${lch === null ? 'null' : typeof lch})`, context, { cause: lch });
            }
            return Promise.all([
                makeNumberAsync(lch.l),
                makeNumberAsync(lch.c),
                makeNumberAsync(lch.h),
            ]).then(([lum, chr, hue]) => {
                // throws
                if (lum === null || chr === null || hue === null) {
                    throw errMaker(`LCH input must have values for 'l', 'c', and 'h' properties`, context, { cause: lch });
                }
                // throws
                if (typeof lum !== 'number'
                    || typeof chr !== 'number'
                    || typeof hue !== 'number') {
                    throw errMaker(`LCH input must have numerical values for 'l', 'c', and 'h' properties`, context, { cause: lch });
                }
                return {
                    l: Math.max(0, Math.min(100, lum)),
                    c: chr,
                    h: hue,
                };
            });
        }
        ;
        /**
         * Validates an input RGB obj, throwing an error if needed.
         */
        async function rgbValidator(rgb, context, errMaker) {
            // throws
            if (typeof rgb !== 'object' || rgb === null) {
                throw errMaker(`RGB input must be an object with 'r', 'g', and 'b' properties (was ${rgb === null ? 'null' : typeof rgb})`, context, { cause: rgb });
            }
            return Promise.all([
                makeNumberAsync(rgb.r),
                makeNumberAsync(rgb.g),
                makeNumberAsync(rgb.b),
            ]).then(([red, gre, blu]) => {
                // throws
                if (red === null || gre === null || blu === null) {
                    throw errMaker(`RGB input must have values for 'r', 'g', and 'b' properties`, context, { cause: rgb });
                }
                // throws
                if (typeof red !== 'number'
                    || typeof gre !== 'number'
                    || typeof blu !== 'number') {
                    throw errMaker(`RGB input must have numerical values for 'r', 'g', and 'b' properties`, context, { cause: rgb });
                }
                return {
                    r: Math.max(0, Math.min(255, red)),
                    g: Math.max(0, Math.min(255, gre)),
                    b: Math.max(0, Math.min(255, blu)),
                };
            });
        }
        ;
        /**
         * @since 0.1.0-beta.0.draft
         */
        async function toHex(clr, errMaker = defaultErrorMaker) {
            const errContext = {
                function: 'ColourUtilities.Async.toHex',
            };
            // throws
            if (!clr) {
                throw errMaker(`Input clr '${clr}' was falsey`, errContext, { cause: clr });
            }
            const _hexFormatter = (hex) => hex.toUpperCase().replace(/^#/gi, '');
            const _hexValidator = async (hex) => hexValidator(await hex, errContext, errMaker).then(_hexFormatter);
            // returns - plain
            if (typeof clr === 'string') {
                return _hexValidator(clr);
            }
            // returns - already built
            if ('data' in clr) {
                return _hexValidator(clr.data.hex);
            }
            // returns - plain
            if ('hex' in clr) {
                return _hexValidator(clr.hex);
            }
            // returns - hsl
            if ('s' in clr) {
                return _hexFormatter(clrConvert.hsl.hex.raw(clr.h, clr.s, clr.l));
            }
            // returns - lch
            if ('c' in clr) {
                return _hexFormatter(clrConvert.lch.hex.raw(clr.l, clr.c, clr.h));
            }
            // clr is rgb
            return _hexFormatter(clrConvert.rgb.hex.raw(clr.r, clr.g, clr.b));
        }
        Async.toHex = toHex;
        /**
         * @since 0.1.0-beta.0.draft
         */
        async function toHSL(clr, errMaker = defaultErrorMaker, round = true) {
            const errContext = {
                function: 'ColourUtilities.Async.toHSL',
            };
            // throws
            if (!clr) {
                throw errMaker(`Input clr '${clr}' was falsey`, errContext, { cause: clr });
            }
            const _hslFormatter = (hsl) => round ? {
                h: roundToPixel(hsl.h, 100),
                s: roundToPixel(hsl.s, 100),
                l: roundToPixel(hsl.l, 100),
            } : hsl;
            const _hslValidator = (hsl) => hslValidator(hsl, errContext, errMaker).then(_hslFormatter);
            // returns - converts
            if (typeof clr === 'string') {
                return hexValidator(clr, errContext, errMaker).then(validHex => {
                    const [h, s, l] = clrConvert.hex.hsl.raw(validHex);
                    return _hslFormatter({ h, s, l });
                });
            }
            // returns - already built
            if ('data' in clr) {
                return _hslValidator(clr.data.hsl);
            }
            // returns - plain
            if ('hsl' in clr) {
                return _hslValidator(clr.hsl);
            }
            // returns - plain
            if ('s' in clr) {
                return _hslValidator(clr);
            }
            // returns - lch
            if ('c' in clr) {
                return lchValidator(clr, errContext, errMaker).then(validLCH => {
                    const [h, s, l] = clrConvert.lch.hsl.raw([validLCH.l, validLCH.c, validLCH.h]);
                    return _hslFormatter({ h, s, l });
                });
            }
            // clr is rgb
            return rgbValidator(clr, errContext, errMaker).then(validRGB => {
                const [h, s, l] = clrConvert.rgb.hsl.raw([validRGB.r, validRGB.g, validRGB.b]);
                return _hslFormatter({ h, s, l });
            });
        }
        Async.toHSL = toHSL;
        /**
         * @since 0.1.0-beta.0.draft
         */
        async function toLCH(clr, errMaker = defaultErrorMaker, round = true) {
            const errContext = {
                function: 'ColourUtilities.Async.toLCH',
            };
            // throws
            if (!clr) {
                throw errMaker(`Input clr '${clr}' was falsey`, errContext, { cause: clr });
            }
            const _lchFormatter = (lch) => round ? {
                l: roundToPixel(lch.l, 1000),
                c: roundToPixel(lch.c, 2000),
                h: roundToPixel(lch.h, 1000),
            } : lch;
            const _lchValidator = (hsl) => lchValidator(hsl, errContext, errMaker).then(_lchFormatter);
            // returns - converts
            if (typeof clr === 'string') {
                return hexValidator(clr, errContext, errMaker).then(validHex => {
                    const [l, c, h] = clrConvert.hex.lch.raw(validHex);
                    return _lchFormatter({ l, c, h });
                });
            }
            // returns - already built
            if ('data' in clr) {
                return _lchValidator(clr.data.lch);
            }
            // returns - plain
            if ('lch' in clr) {
                return _lchValidator(clr.lch);
            }
            // returns - plain
            if ('c' in clr) {
                return _lchValidator(clr);
            }
            // returns - hsl
            if ('h' in clr) {
                return hslValidator(clr, errContext, errMaker).then(validHSL => {
                    const [l, c, h] = clrConvert.hsl.lch.raw([validHSL.h, validHSL.s, validHSL.l]);
                    return _lchFormatter({ l, c, h });
                });
            }
            // clr is rgb
            return rgbValidator(clr, errContext, errMaker).then(validRGB => {
                const [l, c, h] = clrConvert.rgb.lch.raw([validRGB.r, validRGB.g, validRGB.b]);
                return _lchFormatter({ l, c, h });
            });
        }
        Async.toLCH = toLCH;
        /**
         * @since 0.1.0-beta.0.draft
         */
        async function toRGB(clr, errMaker = defaultErrorMaker, round = true) {
            const errContext = {
                function: 'ColourUtilities.Async.toRGB',
            };
            // throws
            if (!clr) {
                throw errMaker(`Input clr '${clr}' was falsey`, errContext, { cause: clr });
            }
            const _rgbFormatter = (rgb) => round ? {
                r: roundToPixel(rgb.r, 100),
                g: roundToPixel(rgb.g, 100),
                b: roundToPixel(rgb.b, 100),
            } : rgb;
            const _rgbValidator = (rgb) => rgbValidator(rgb, errContext, errMaker).then(_rgbFormatter);
            // returns - converts
            if (typeof clr === 'string') {
                return hexValidator(clr, errContext, errMaker).then(validHex => {
                    const [r, g, b] = clrConvert.hex.rgb.raw(validHex);
                    return _rgbFormatter({ r, g, b });
                });
            }
            // returns - already built
            if ('data' in clr) {
                return _rgbValidator(clr.data.rgb);
            }
            // returns - plain
            if ('rgb' in clr) {
                return _rgbValidator(clr.rgb);
            }
            // returns - plain
            if ('g' in clr) {
                return _rgbValidator(clr);
            }
            // returns - lch
            if ('c' in clr) {
                return lchValidator(clr, errContext, errMaker).then(validLCH => {
                    const [r, g, b] = clrConvert.lch.rgb.raw([validLCH.l, validLCH.c, validLCH.h]);
                    return _rgbFormatter({ r, g, b });
                });
            }
            // clr is hsl
            return hslValidator(clr, errContext, errMaker).then(validHSL => {
                const [r, g, b] = clrConvert.hsl.rgb.raw([validHSL.h, validHSL.s, validHSL.l]);
                return _rgbFormatter({ r, g, b });
            });
        }
        Async.toRGB = toRGB;
        /**
         * @since 0.1.0-beta.0.draft
         */
        async function toString(clr, errContext, errMaker, _defaultSpace) {
            const defaultSpace = _defaultSpace ?? 'hsl';
            // returns - converts
            if (typeof clr === 'string') {
                return hexValidator(clr, errContext, errMaker).then(ColourUtilities.toString.hex);
            }
            // returns - already built
            if (isSingleShade(clr)) {
                return validator(clr.data[defaultSpace], defaultSpace, errContext, errMaker).then(ColourUtilities.toString[defaultSpace]);
            }
            // returns - already built
            if (isAllValues(clr)) {
                return validator(clr[defaultSpace], defaultSpace, errContext, errMaker).then(ColourUtilities.toString[defaultSpace]);
            }
            // returns - hsl
            if ('s' in clr) {
                return hslValidator(clr, errContext, errMaker).then(ColourUtilities.toString.hsl);
            }
            // returns - oklch
            if ('c' in clr) {
                return lchValidator(clr, errContext, errMaker).then(ColourUtilities.toString.lch);
            }
            // returns - rgb
            return rgbValidator(clr, errContext, errMaker).then(ColourUtilities.toString.rgb);
        }
        Async.toString = toString;
    })(Async = ColourUtilities.Async || (ColourUtilities.Async = {}));
    /* SHADE MAP FUNCTIONS
     * ====================================================================== */
    /**
     * Generates a single pair of contrast test results used by the
     * {@link Tokens_Colour_ShadeMap.Shade} objects.
     *
     * @since 0.1.0-alpha
     * @since 0.1.0-beta.0.draft — Moved to ColourUtilities and renamed.
     * @internal
     */
    class ContrastTest {
        clrA;
        clrB;
        static #standards;
        static set standards(val) {
            if (typeof this.#standards === 'undefined') {
                this.#standards = val;
            }
        }
        static get standards() {
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
        static cachePath = '.scripts/.cache/contrast';
        static #testCache = {};
        /**
         * Gets the contrast ratio for the given colours, checking the cache for
         * values first.
         */
        static test(clrA, clrB) {
            const cacheKey = [
                [clrA.rgb.r, clrA.rgb.g, clrA.rgb.b].join('-'),
                [clrB.rgb.r, clrA.rgb.g, clrB.rgb.b].join('-'),
            ].sort().join('_');
            // returns
            if (typeof this.#testCache[cacheKey] !== 'undefined') {
                return this.#testCache[cacheKey];
            }
            this.#testCache[cacheKey] = WcagContrast.rgb([clrA.rgb.r, clrA.rgb.g, clrA.rgb.b], [clrB.rgb.r, clrB.rgb.g, clrB.rgb.b]);
            return this.#testCache[cacheKey];
        }
        ratio;
        aa;
        aaa;
        constructor(clrA, clrB) {
            this.clrA = clrA;
            this.clrB = clrB;
            this.ratio = ContrastTest.test(clrA, clrB);
            const standards = ContrastTest.standards;
            // @ts-expect-error - this will be filled
            const tmp_results = {};
            for (const t_standard in standards) {
                const standard = t_standard;
                if (typeof tmp_results[standard] === 'undefined') {
                    // @ts-expect-error - this will be filled
                    tmp_results[standard] = {};
                }
                for (const t_testName in standards[standard]) {
                    const testName = t_testName;
                    tmp_results[standard][testName] = this.ratio >= standards[standard][testName];
                }
            }
            this.aa = tmp_results.aa;
            this.aaa = tmp_results.aaa;
        }
        toJSON() {
            return this.valueOf();
        }
        valueOf() {
            return {
                ratio: this.ratio,
                aa: this.aa,
                aaa: this.aaa,
            };
        }
    }
    ColourUtilities.ContrastTest = ContrastTest;
    /**
     * Utilities for dealing with shade level values.
     *
     * @since 0.1.0-beta.0.draft
     */
    let Levels;
    (function (Levels) {
        /**
         * A key index for converting colour made shade levels to their opposite
         * (e.g., dark to light modes).
         *
         * @since 0.1.0-alpha
         * @since 0.1.0-beta.0.draft — Moved from {@link ColourUtilities} to {@link ColourUtilities.Levels} and renamed.
         */
        Levels.converter = {
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
        };
        /**
         * The shade level keys that can be optionally included in maps for this
         * system.
         *
         * @since 0.1.0-beta.0.draft
         */
        Levels.optional = [
            '350',
            '450',
            '550',
            '650',
        ];
        /**
         * The shade level keys always included in maps for this system.
         *
         * @since 0.1.0-beta.0.draft
         */
        Levels.required = [
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
        ];
        const levelSets = {
            any: new Set([
                ...Levels.optional,
                ...Levels.required,
            ]),
            optional: new Set(Levels.optional),
            required: new Set(Levels.required),
        };
        /**
         * Augments a single level by the given amount, creating a new valid level.
         *
         * @since 0.1.0-beta.0.draft
         */
        function augmentor(allColourLevels, level, levelOffset, minimum = 0, maximum = 1000) {
            // returns
            if (levelOffset === 0 && !minimum && !maximum) {
                return level;
            }
            levelOffset = Math.round(levelOffset / 50) * 50;
            const validator = (_num) => Math.max(minimum, Math.min(_num, maximum));
            let levelAsNumber;
            switch (level) {
                case 'black':
                    levelAsNumber = 950;
                    break;
                case 'white':
                    levelAsNumber = 50;
                    break;
                default:
                    levelAsNumber = Number(level);
                    break;
            }
            const newLevel_num = validator(levelAsNumber + levelOffset);
            // returns
            if (newLevel_num > 900) {
                return 'black';
            }
            // returns
            if (newLevel_num < 100) {
                return 'white';
            }
            let newLevel_valid_str = String(newLevel_num);
            const offsetStep = levelOffset < 0 ? -50 : 50;
            let i = 1;
            // returns if black or white levels are reached
            while (!allColourLevels.has(newLevel_valid_str)
                && i < 100) {
                const _thisOffsetStep = offsetStep * i;
                let _testNum = newLevel_num + _thisOffsetStep;
                // start by trying addition
                newLevel_valid_str = String(_testNum);
                // returns
                if (_testNum > 900) {
                    return 'black';
                }
                // returns
                if (_testNum < 100) {
                    return 'white';
                }
                // now test subtracting instead
                if (!allColourLevels.has(newLevel_valid_str)) {
                    _testNum = newLevel_num - _thisOffsetStep;
                    newLevel_valid_str = String(_testNum);
                }
                // returns
                if (_testNum > 900) {
                    return 'black';
                }
                // returns
                if (_testNum < 100) {
                    return 'white';
                }
                i++;
            }
            return newLevel_valid_str;
        }
        Levels.augmentor = augmentor;
        function toNumbers(arr) {
            return arr.map(str => {
                // returns
                if (str === 'black' || str === 'white' || !levelSets.any.has(str)) {
                    return false;
                }
                const num = Number(str);
                return Number.isNaN(num) ? false : num;
            }).filter(num => num !== false);
        }
        /**
         * Gets the max level in the given array.
         *
         * @since 0.1.0-beta.0.draft
         */
        function max(arr) {
            // returns
            if (arr.includes('black')) {
                return 'black';
            }
            const levelNums = toNumbers(arr);
            // returns
            if (!levelNums.length) {
                return arr[0] ?? 'black';
            }
            return String(Math.max(...levelNums));
        }
        Levels.max = max;
        /**
         * Gets the max level in the given array.
         *
         * @since 0.1.0-beta.0.draft
         */
        function min(arr) {
            // returns
            if (arr.includes('white')) {
                return 'white';
            }
            const levelNums = toNumbers(arr);
            // returns
            if (!levelNums.length) {
                return arr[0] ?? 'white';
            }
            return String(Math.min(...levelNums));
        }
        Levels.min = min;
        /**
         * Converts the given shade level to its oppposite (via
         * {@link ColourUtilities.Levels.converter}).
         *
         * @since 0.1.0-alpha
         * @since 0.1.0-beta.0.draft — Moved to {@link ColourUtilities.Levels} and renamed.
         */
        function toDark(lightLevel) {
            return Levels.converter[lightLevel];
        }
        Levels.toDark = toDark;
    })(Levels = ColourUtilities.Levels || (ColourUtilities.Levels = {}));
})(ColourUtilities || (ColourUtilities = {}));
