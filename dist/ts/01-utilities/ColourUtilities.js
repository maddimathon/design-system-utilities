/**
 * @since 0.1.0-alpha
 *
 * @packageDocumentation
 */
/*!
 * @maddimathon/design-system-utilities@0.1.1-alpha.1.draft
 * @license MIT
 */
import clrConvert from 'color-convert';
import * as WcagContrast from 'wcag-contrast';
import * as sass from 'sass-embedded';
import { LocalErrors } from './Errors.js';
import { makeNumber } from './makeNumber.js';
import { makeNumberAsync } from './makeNumberAsync.js';
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
    /* CSS COLOUR KEYWORDS
     * ====================================================================== */
    /**
     * @since 0.1.1-alpha.1.draft
     */
    let CssColours;
    (function (CssColours) {
        /**
         * @since 0.1.1-alpha.1.draft
         */
        const arrays = {
            keywords: [
                'currentColor',
                'inherit',
                'transparent',
            ],
            slugs: [
                'aliceblue',
                'antiquewhite',
                'aqua',
                'aquamarine',
                'azure',
                'beige',
                'bisque',
                'black',
                'blanchedalmond',
                'blue',
                'blueviolet',
                'brown',
                'burlywood',
                'cadetblue',
                'chartreuse',
                'chocolate',
                'coral',
                'cornflowerblue',
                'cornsilk',
                'crimson',
                'cyan',
                'darkblue',
                'darkcyan',
                'darkgoldenrod',
                'darkgray',
                'darkgreen',
                'darkgrey',
                'darkkhaki',
                'darkmagenta',
                'darkolivegreen',
                'darkorange',
                'darkorchid',
                'darkred',
                'darksalmon',
                'darkseagreen',
                'darkslateblue',
                'darkslategray',
                'darkslategrey',
                'darkturquoise',
                'darkviolet',
                'deeppink',
                'deepskyblue',
                'dimgray',
                'dimgrey',
                'dodgerblue',
                'firebrick',
                'floralwhite',
                'forestgreen',
                'fuchsia',
                'gainsboro',
                'ghostwhite',
                'gold',
                'goldenrod',
                'gray',
                'green',
                'greenyellow',
                'grey',
                'honeydew',
                'hotpink',
                'indianred',
                'indigo',
                'ivory',
                'khaki',
                'lavender',
                'lavenderblush',
                'lawngreen',
                'lemonchiffon',
                'lightblue',
                'lightcoral',
                'lightcyan',
                'lightgoldenrodyellow',
                'lightgray',
                'lightgreen',
                'lightgrey',
                'lightpink',
                'lightsalmon',
                'lightseagreen',
                'lightskyblue',
                'lightslategray',
                'lightslategrey',
                'lightsteelblue',
                'lightyellow',
                'lime',
                'limegreen',
                'linen',
                'magenta',
                'maroon',
                'mediumaquamarine',
                'mediumblue',
                'mediumorchid',
                'mediumpurple',
                'mediumseagreen',
                'mediumslateblue',
                'mediumspringgreen',
                'mediumturquoise',
                'mediumvioletred',
                'midnightblue',
                'mintcream',
                'mistyrose',
                'moccasin',
                'navajowhite',
                'navy',
                'oldlace',
                'olive',
                'olivedrab',
                'orange',
                'orangered',
                'orchid',
                'palegoldenrod',
                'palegreen',
                'paleturquoise',
                'palevioletred',
                'papayawhip',
                'peachpuff',
                'peru',
                'pink',
                'plum',
                'powderblue',
                'purple',
                'rebeccapurple',
                'red',
                'rosybrown',
                'royalblue',
                'saddlebrown',
                'salmon',
                'sandybrown',
                'seagreen',
                'seashell',
                'sienna',
                'silver',
                'skyblue',
                'slateblue',
                'slategray',
                'slategrey',
                'snow',
                'springgreen',
                'steelblue',
                'tan',
                'teal',
                'thistle',
                'tomato',
                'turquoise',
                'violet',
                'wheat',
                'white',
                'whitesmoke',
                'yellow',
                'yellowgreen',
            ],
            systemColors: [
                'AccentColor',
                'AccentColorText',
                'ActiveText',
                'ButtonBorder',
                'ButtonFace',
                'ButtonText',
                'Canvas',
                'CanvasText',
                'Field',
                'FieldText',
                'GrayText',
                'Highlight',
                'HighlightText',
                'LinkText',
                'Mark',
                'MarkText',
                'SelectedItem',
                'SelectedItemText',
                'VisitedText',
            ],
        };
        /**
         * {@inheritDoc ColourUtilities.CssColours.Keyword}
         *
         * @since 0.1.1-alpha.1.draft
         */
        CssColours.keywords = new Set(arrays.keywords);
        /**
         * {@inheritDoc ColourUtilities.CssColours.Slug}
         *
         * @since 0.1.1-alpha.1.draft
         */
        CssColours.slugs = new Set(arrays.slugs);
        /**
         * {@inheritDoc ColourUtilities.CssColours.SystemColor}
         *
         * @since 0.1.1-alpha.1.draft
         */
        CssColours.systemColors = new Set(arrays.systemColors);
    })(CssColours = ColourUtilities.CssColours || (ColourUtilities.CssColours = {}));
    /**
     * Ensures a valid shade object.
     */
    async function validateShade(input, errMaker = defaultErrorMaker, round) {
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
        const _hexFormatter = (hex) => hex.toUpperCase().replace(/^#/gi, '');
        const _hexValidator = (hex) => _hexFormatter(hexValidator(hex, {
            function: 'ColourUtilities.toHex',
        }, errMaker));
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
            const hex = clrConvert.hsl.hex.raw(clr.h, clr.s, clr.l);
            return _hexFormatter(hex);
        }
        // returns - lch
        if ('c' in clr) {
            const hex = clrConvert.lch.hex.raw(clr.l, clr.c, clr.h);
            return _hexFormatter(hex);
        }
        // clr is rgb
        const hex = clrConvert.rgb.hex.raw(clr.r, clr.g, clr.b);
        return _hexFormatter(hex);
    }
    ColourUtilities.toHex = toHex;
    /**
     * @since 0.1.0-alpha
     */
    function toHSL(clr, errMaker = defaultErrorMaker, round = true) {
        const _hslFormatter = (hsl) => round ? {
            h: roundToPixel(hsl.h, 100),
            s: roundToPixel(hsl.s, 100),
            l: roundToPixel(hsl.l, 100),
        } : hsl;
        const _hslValidator = (hsl) => _hslFormatter(hslValidator(hsl, {
            function: 'ColourUtilities.toHSL',
        }, errMaker));
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
        const _lchFormatter = (lch) => round ? {
            l: roundToPixel(lch.l, 1000),
            c: roundToPixel(lch.c, 2000),
            h: roundToPixel(lch.h, 1000),
        } : lch;
        const _lchValidator = (hsl) => _lchFormatter(lchValidator(hsl, {
            function: 'ColourUtilities.toLCH',
        }, errMaker));
        // returns - converts
        if (typeof clr === 'string') {
            const validHex = hexValidator(clr, {
                function: 'ColourUtilities.toLCH',
            }, errMaker);
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
            const validHSL = hslValidator(clr, {
                function: 'ColourUtilities.toLCH',
            }, errMaker);
            const [l, c, h] = clrConvert.hsl.lch.raw([validHSL.h, validHSL.s, validHSL.l]);
            return _lchFormatter({ l, c, h });
        }
        // clr is rgb
        const validRGB = rgbValidator(clr, {
            function: 'ColourUtilities.toLCH',
        }, errMaker);
        const [l, c, h] = clrConvert.rgb.lch.raw([validRGB.r, validRGB.g, validRGB.b]);
        return _lchFormatter({ l, c, h });
    }
    ColourUtilities.toLCH = toLCH;
    /**
     * @since 0.1.0-alpha
     */
    function toRGB(clr, errMaker = defaultErrorMaker, round = true) {
        const _rgbFormatter = (rgb) => round ? {
            r: roundToPixel(rgb.r, 100),
            g: roundToPixel(rgb.g, 100),
            b: roundToPixel(rgb.b, 100),
        } : rgb;
        const _rgbValidator = (rgb) => _rgbFormatter(rgbValidator(rgb, {
            function: 'ColourUtilities.toRGB',
        }, errMaker));
        // returns - converts
        if (typeof clr === 'string') {
            const validHex = hexValidator(clr, {
                function: 'ColourUtilities.toRGB',
            }, errMaker);
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
            const validLCH = lchValidator(clr, {
                function: 'ColourUtilities.toRGB',
            }, errMaker);
            const [r, g, b] = clrConvert.lch.rgb.raw([validLCH.l, validLCH.c, validLCH.h]);
            return _rgbFormatter({ r, g, b });
        }
        // clr is hsl
        const validHSL = hslValidator(clr, {
            function: 'ColourUtilities.toRGB',
        }, errMaker);
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
            const matches = `${sassMixed.css}`.match(/lch\(\s*([\d\.]+)%\s+([\d\.]+)\s+([\d\.]+)deg\s*\)/is);
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
    let toString;
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
     * @since 0.1.1-alpha.1.draft
     */
    let Async;
    (function (Async) {
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
         * @since 0.1.1-alpha.1.draft
         */
        async function toHex(clr, errMaker = defaultErrorMaker) {
            const _hexFormatter = (hex) => hex.toUpperCase().replace(/^#/gi, '');
            const _hexValidator = (hex) => hexValidator(hex, {
                function: 'ColourUtilities.Async.toHex',
            }, errMaker).then(_hexFormatter);
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
                const hex = clrConvert.hsl.hex.raw(clr.h, clr.s, clr.l);
                return _hexFormatter(hex);
            }
            // returns - lch
            if ('c' in clr) {
                const hex = clrConvert.lch.hex.raw(clr.l, clr.c, clr.h);
                return _hexFormatter(hex);
            }
            // clr is rgb
            const hex = clrConvert.rgb.hex.raw(clr.r, clr.g, clr.b);
            return _hexFormatter(hex);
        }
        Async.toHex = toHex;
        /**
         * @since 0.1.1-alpha.1.draft
         */
        async function toHSL(clr, errMaker = defaultErrorMaker, round = true) {
            const _hslFormatter = (hsl) => round ? {
                h: roundToPixel(hsl.h, 100),
                s: roundToPixel(hsl.s, 100),
                l: roundToPixel(hsl.l, 100),
            } : hsl;
            const _hslValidator = (hsl) => hslValidator(hsl, {
                function: 'ColourUtilities.Async.toHSL',
            }, errMaker).then(_hslFormatter);
            // returns - converts
            if (typeof clr === 'string') {
                return hexValidator(clr, {
                    function: 'ColourUtilities.Async.toHSL',
                }, errMaker).then(validHex => {
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
                return lchValidator(clr, {
                    function: 'ColourUtilities.Async.toHSL',
                }, errMaker).then(validLCH => {
                    const [h, s, l] = clrConvert.lch.hsl.raw([validLCH.l, validLCH.c, validLCH.h]);
                    return _hslFormatter({ h, s, l });
                });
            }
            // clr is rgb
            return rgbValidator(clr, {
                function: 'ColourUtilities.Async.toHSL',
            }, errMaker).then(validRGB => {
                const [h, s, l] = clrConvert.rgb.hsl.raw([validRGB.r, validRGB.g, validRGB.b]);
                return _hslFormatter({ h, s, l });
            });
        }
        Async.toHSL = toHSL;
        /**
         * @since 0.1.1-alpha.1.draft
         */
        async function toLCH(clr, errMaker = defaultErrorMaker, round = true) {
            const _lchFormatter = (lch) => round ? {
                l: roundToPixel(lch.l, 1000),
                c: roundToPixel(lch.c, 2000),
                h: roundToPixel(lch.h, 1000),
            } : lch;
            const _lchValidator = (hsl) => lchValidator(hsl, {
                function: 'ColourUtilities.Async.toLCH',
            }, errMaker).then(_lchFormatter);
            // returns - converts
            if (typeof clr === 'string') {
                return hexValidator(clr, {
                    function: 'ColourUtilities.Async.toLCH',
                }, errMaker).then(validHex => {
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
                return hslValidator(clr, {
                    function: 'ColourUtilities.Async.toLCH',
                }, errMaker).then(validHSL => {
                    const [l, c, h] = clrConvert.hsl.lch.raw([validHSL.h, validHSL.s, validHSL.l]);
                    return _lchFormatter({ l, c, h });
                });
            }
            // clr is rgb
            return rgbValidator(clr, {
                function: 'ColourUtilities.Async.toLCH',
            }, errMaker).then(validRGB => {
                const [l, c, h] = clrConvert.rgb.lch.raw([validRGB.r, validRGB.g, validRGB.b]);
                return _lchFormatter({ l, c, h });
            });
        }
        Async.toLCH = toLCH;
        /**
         * @since 0.1.1-alpha.1.draft
         */
        async function toRGB(clr, errMaker = defaultErrorMaker, round = true) {
            const _rgbFormatter = (rgb) => round ? {
                r: roundToPixel(rgb.r, 100),
                g: roundToPixel(rgb.g, 100),
                b: roundToPixel(rgb.b, 100),
            } : rgb;
            const _rgbValidator = (rgb) => rgbValidator(rgb, {
                function: 'ColourUtilities.Async.toRGB',
            }, errMaker).then(_rgbFormatter);
            // returns - converts
            if (typeof clr === 'string') {
                return hexValidator(clr, {
                    function: 'ColourUtilities.Async.toRGB',
                }, errMaker).then(validHex => {
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
                return lchValidator(clr, {
                    function: 'ColourUtilities.Async.toRGB',
                }, errMaker).then(validLCH => {
                    const [r, g, b] = clrConvert.lch.rgb.raw([validLCH.l, validLCH.c, validLCH.h]);
                    return _rgbFormatter({ r, g, b });
                });
            }
            // clr is hsl
            return hslValidator(clr, {
                function: 'ColourUtilities.Async.toRGB',
            }, errMaker).then(validHSL => {
                const [r, g, b] = clrConvert.hsl.rgb.raw([validHSL.h, validHSL.s, validHSL.l]);
                return _rgbFormatter({ r, g, b });
            });
        }
        Async.toRGB = toRGB;
    })(Async = ColourUtilities.Async || (ColourUtilities.Async = {}));
    /* SHADE MAP FUNCTIONS
     * ====================================================================== */
    /**
     * Generates a single pair of contrast test results used by the
     * {@link Tokens_Colour_ShadeMap.Shade} objects.
     *
     * @since 0.1.0-alpha
     * @since 0.1.1-alpha.1.draft — Moved to ColourUtilities and renamed.
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
     * @since 0.1.1-alpha.0
     */
    let Levels;
    (function (Levels) {
        /**
         * A key index for converting colour made shade levels to their opposite
         * (e.g., dark to light modes).
         *
         * @since 0.1.0-alpha
         * @since 0.1.1-alpha.0 — Moved from {@link ColourUtilities} to {@link ColourUtilities.Levels} and renamed.
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
         * @since 0.1.1-alpha.0
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
         * @since 0.1.1-alpha.0
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
        /**
         * Augments a single level by the given amount, creating a new valid level.
         *
         * @since 0.1.1-alpha.1.draft
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
        /**
         * Converts the given shade level to its oppposite (via
         * {@link ColourUtilities.Levels.converter}).
         *
         * @since 0.1.0-alpha
         * @since 0.1.1-alpha.0 — Moved to {@link ColourUtilities.Levels} and renamed.
         */
        function toDark(lightLevel) {
            return Levels.converter[lightLevel];
        }
        Levels.toDark = toDark;
    })(Levels = ColourUtilities.Levels || (ColourUtilities.Levels = {}));
})(ColourUtilities || (ColourUtilities = {}));
