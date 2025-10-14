/**
 * @since 0.1.0-alpha.draft
 *
 * @packageDocumentation
 */
/*!
 * @maddimathon/design-system-utilities@0.1.0-alpha.draft
 * @license MIT
 */
import clrConvert from 'color-convert';
import * as sass from 'sass';
import * as z from 'zod';
import { roundToPixel } from './roundToPixel.js';
/**
 * Utility functions, schemas, and types for dealing with colour values in the
 * system.
 *
 * @since 0.1.0-alpha.draft
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
     * @since 0.1.0-alpha.draft
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
     * @since 0.1.0-alpha.draft
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
     * @since 0.1.0-alpha.draft
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
     * @since 0.1.0-alpha.draft
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
     * @since 0.1.0-alpha.draft
     */
    function mixColours(_clrA, _clrB, saturationMultiplier = 0) {
        const clrA = toLCH(_clrA);
        const clrB = toLCH(_clrB);
        saturationMultiplier = (Math.min(1, Math.max(-1, saturationMultiplier)) * 100);
        const clrA_str = `lch( ${clrA.l} ${clrA.c} ${clrA.h} )`;
        const clrB_str = `lch( ${clrB.l} ${clrB.c} ${clrB.h} )`;
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
})(ColourUtilities || (ColourUtilities = {}));
//# sourceMappingURL=ColourUtilities.js.map