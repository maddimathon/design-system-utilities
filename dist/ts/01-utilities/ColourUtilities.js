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
import * as sass from 'sass-embedded';
import * as z from 'zod';
import { roundToPixel } from './roundToPixel.js';
/**
 * Utility functions, schemas, and types for dealing with colour values in the
 * system.
 *
 * @since 0.1.0-alpha
 */
export var ColourUtilities;
(function (ColourUtilities) {
    /** @hidden */
    ColourUtilities.Value_Hex = z.string().toUpperCase().regex(/^#?[0-9|A-H]{3,6}$/i);
    /** @hidden */
    ColourUtilities.Value_HSL = z.object({
        h: z.number().nonnegative().lte(360),
        s: z.number().nonnegative().lte(100),
        l: z.number().nonnegative().lte(100),
    });
    /** @hidden */
    ColourUtilities.Value_RGB = z.object({
        r: z.number().nonnegative().lte(255),
        g: z.number().nonnegative().lte(255),
        b: z.number().nonnegative().lte(255),
    });
    /** @hidden */
    ColourUtilities.Value_LCH = z.object({
        l: z.number().nonnegative().lte(100),
        c: z.number().safe(),
        h: z.number().safe(),
    });
    /** @hidden */
    ColourUtilities.Value = z.union([
        ColourUtilities.Value_Hex,
        ColourUtilities.Value_HSL,
        ColourUtilities.Value_RGB,
        ColourUtilities.Value_LCH,
    ]);
    /** @hidden */
    ColourUtilities.Value_All = z.object({
        hex: ColourUtilities.Value_Hex,
        hsl: ColourUtilities.Value_HSL,
        rgb: ColourUtilities.Value_RGB,
        lch: ColourUtilities.Value_LCH,
    });
    /** @private */
    ColourUtilities.SingleShade = z.union([
        ColourUtilities.Value,
        ColourUtilities.Value_All,
    ]).transform((input) => {
        // returns - is already converted
        if (typeof input === 'object' && 'hex' in input) {
            return input;
        }
        return {
            hex: toHex(input),
            hsl: toHSL(input),
            rgb: toRGB(input),
            lch: toLCH(input),
        };
    });
    /* UTILITY FUNCTIONS
     * ====================================================================== */
    /**
     * @since 0.1.0-alpha
     */
    function toHex(clr) {
        const _hexValidator = (hex) => hex.toUpperCase().replace(/^#/gi, '');
        // returns - plain
        if (typeof clr === 'string') {
            return _hexValidator(clr);
        }
        // returns - already built
        if ('data' in clr) {
            return clr.data.hex;
        }
        // returns - plain
        if ('hex' in clr) {
            return _hexValidator(clr.hex);
        }
        // returns - hsl
        if ('s' in clr) {
            const hex = clrConvert.hsl.hex.raw(clr.h, clr.s, clr.l);
            return _hexValidator(hex);
        }
        // returns - lch
        if ('c' in clr) {
            const hex = clrConvert.lch.hex.raw(clr.l, clr.c, clr.h);
            return _hexValidator(hex);
        }
        // clr is rgb
        const hex = clrConvert.rgb.hex.raw(clr.r, clr.g, clr.b);
        return _hexValidator(hex);
    }
    ColourUtilities.toHex = toHex;
    /**
     * @since 0.1.0-alpha
     */
    function toHSL(clr, round = true) {
        const _arrayToObject = (hsl) => (round
            ? {
                h: roundToPixel(hsl[0], 100),
                s: Math.max(0, Math.min(100, roundToPixel(hsl[1], 100))),
                l: Math.max(0, Math.min(100, roundToPixel(hsl[2], 100))),
            }
            : {
                h: hsl[0],
                s: hsl[1],
                l: hsl[2],
            });
        // returns - converts
        if (typeof clr === 'string') {
            const hsl = clrConvert.hex.hsl.raw(clr);
            return _arrayToObject(hsl);
        }
        // returns - already built
        if ('data' in clr) {
            return clr.data.hsl;
        }
        // returns - plain
        if ('hsl' in clr) {
            return _arrayToObject([clr.hsl.h, clr.hsl.s, clr.hsl.l]);
        }
        // returns - plain
        if ('s' in clr) {
            return _arrayToObject([clr.h, clr.s, clr.l]);
        }
        // returns - lch
        if ('c' in clr) {
            const hsl = clrConvert.lch.hsl.raw(clr.l, clr.c, clr.h);
            return _arrayToObject(hsl);
        }
        // clr is rgb
        const hsl = clrConvert.rgb.hsl.raw(clr.r, clr.g, clr.b);
        return _arrayToObject(hsl);
    }
    ColourUtilities.toHSL = toHSL;
    /**
     * @since 0.1.0-alpha
     */
    function toLCH(clr) {
        const _arrayToObject = (lch) => ({
            l: roundToPixel(lch[0], 1000),
            c: roundToPixel(lch[1], 2000),
            h: roundToPixel(lch[2], 1000),
        });
        // returns - converts
        if (typeof clr === 'string') {
            const lch = clrConvert.hex.lch.raw(clr);
            return _arrayToObject(lch);
        }
        // returns - already built
        if ('data' in clr) {
            return clr.data.lch;
        }
        // returns - plain
        if ('lch' in clr) {
            return _arrayToObject([clr.lch.l, clr.lch.c, clr.lch.h]);
        }
        // returns - plain
        if ('c' in clr) {
            return _arrayToObject([clr.l, clr.c, clr.h]);
        }
        // returns - hsl
        if ('h' in clr) {
            const lch = clrConvert.hsl.lch.raw(clr.h, clr.s, clr.l);
            return _arrayToObject(lch);
        }
        // clr is rgb
        const lch = clrConvert.rgb.lch.raw(clr.r, clr.g, clr.b);
        return _arrayToObject(lch);
    }
    ColourUtilities.toLCH = toLCH;
    /**
     * @since 0.1.0-alpha
     */
    function toRGB(clr) {
        const _arrayToObject = (rgb) => ({
            r: Math.max(0, roundToPixel(rgb[0], 100)),
            g: Math.max(0, roundToPixel(rgb[1], 100)),
            b: Math.max(0, roundToPixel(rgb[2], 100)),
        });
        // returns - converts
        if (typeof clr === 'string') {
            const rgb = clrConvert.hex.rgb.raw(clr);
            return _arrayToObject(rgb);
        }
        // returns - already built
        if ('data' in clr) {
            return clr.data.rgb;
        }
        // returns - plain
        if ('rgb' in clr) {
            return _arrayToObject([clr.rgb.r, clr.rgb.g, clr.rgb.b]);
        }
        // returns - plain
        if ('g' in clr) {
            return _arrayToObject([clr.r, clr.g, clr.b]);
        }
        // returns - lch
        if ('c' in clr) {
            const rgb = clrConvert.lch.rgb.raw(clr.l, clr.c, clr.h);
            return _arrayToObject(rgb);
        }
        // clr is hsl
        const rgb = clrConvert.hsl.rgb.raw(clr.h, clr.s, clr.l);
        return _arrayToObject(rgb);
    }
    ColourUtilities.toRGB = toRGB;
    /**
     * @since 0.1.0-alpha
     */
    function mixColours(_clrA, _clrB, saturationMultiplier = 0) {
        const clrA = toLCH(_clrA);
        const clrB = toLCH(_clrB);
        saturationMultiplier = (Math.min(1, Math.max(-1, saturationMultiplier)) * 100);
        const clrA_str = ColourUtilities.toString.lch(clrA);
        const clrB_str = ColourUtilities.toString.lch(clrB);
        const sass_mixed = `color.mix( ${clrA_str}, ${clrB_str}, $method: lch shorter hue )`;
        const sass_mixed_hsl = `color.to-gamut( ${sass_mixed}, $space: hsl, $method: local-minde )`;
        const sass_mixed_saturated = `color.scale( ${sass_mixed_hsl}, $saturation: ${saturationMultiplier}%, $space: hsl )`;
        const sassMixed = sass.compileString(`@use 'sass:color'; /* #{color.to-gamut( ${sass_mixed_saturated}, $space: lch, $method: local-minde )} */`);
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
    /* SHADE MAP FUNCTIONS
     * ====================================================================== */
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
    /**
     * @since 0.1.0-alpha
     * @deprecated 0.1.1-alpha.0 — Use {@link ColourUtilities.Levels.converter} instead.
     */
    ColourUtilities.LevelConverter = Levels.converter;
    /**
     * @since 0.1.0-alpha
     * @deprecated 0.1.1-alpha.0 — Use {@link ColourUtilities.Levels.toDark} instead.
     */
    function getDarkLevel(lightLevel) {
        return Levels.toDark(lightLevel);
    }
    ColourUtilities.getDarkLevel = getDarkLevel;
    /**
     * Utilities for working with shade maps (100-900 levels from light to dark).
     *
     * @since 0.1.1-alpha.0
     */
    let ShadeMaps;
    (function (ShadeMaps) {
        /**
         * @since 0.1.0-alpha
         */
        function getDarkLevel(lightLevel) {
            return Levels.converter[lightLevel];
        }
        ShadeMaps.getDarkLevel = getDarkLevel;
    })(ShadeMaps = ColourUtilities.ShadeMaps || (ColourUtilities.ShadeMaps = {}));
})(ColourUtilities || (ColourUtilities = {}));
