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
/**
 * Utility functions, schemas, and types for dealing with colour values in the
 * system.
 *
 * @since ___PKG_VERSION___
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
     * @since ___PKG_VERSION___
     */
    function toHex(clr) {
        const _hexValidator = (hex) => '#' + hex.replace(/^#/gi, '');
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
     * @since ___PKG_VERSION___
     */
    function toHSL(clr) {
        const _arrayToObject = (hsl) => ({
            h: Math.round(hsl[0] * 200) / 200,
            s: Math.round(hsl[1] * 200) / 200,
            l: Math.round(hsl[2] * 200) / 200,
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
     * @since ___PKG_VERSION___
     */
    function toLCH(clr) {
        const _arrayToObject = (lch) => ({
            l: Math.max(0, Math.min(100, Math.round(lch[0] * 1000) / 1000)),
            c: Math.round(lch[1] * 10000) / 10000,
            h: Math.round(lch[2] * 1000) / 1000,
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
     * @since ___PKG_VERSION___
     */
    function toRGB(clr) {
        const _arrayToObject = (rgb) => ({
            r: Math.round(rgb[0] * 200) / 200,
            g: Math.round(rgb[1] * 200) / 200,
            b: Math.round(rgb[2] * 200) / 200,
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
     * @since ___PKG_VERSION___
     */
    function mixColours(_clrA, _clrB) {
        const clrA = toLCH(_clrA);
        const clrB = toLCH(_clrB);
        return toLCH({
            l: (clrA.l + clrB.l) / 2,
            c: (clrA.c + clrB.c) / 2,
            h: (clrA.h + clrB.h) / 2,
        });
    }
    ColourUtilities.mixColours = mixColours;
})(ColourUtilities || (ColourUtilities = {}));
//# sourceMappingURL=ColourUtilities.js.map