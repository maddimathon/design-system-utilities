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
import * as z from 'zod';
import { AbstractTokens } from '../../../abstracts/AbstractTokens.js';
/**
 * Generates a token object for the design system.
 *
 * @since 0.1.0-alpha.draft
 * @internal
 */
export class Tokens_Colour_ShadeMap_Shade extends AbstractTokens {
    name;
    get schema() {
        return Tokens_Colour_ShadeMap_Shade.Schema;
    }
    hex;
    hsl;
    rgb;
    lch;
    constructor(name, input) {
        super(input);
        this.name = name;
        const parsed = this.parseSchema(this.schema, input ?? {}, {
            name: `Tokens_Colour_ShadeMap_Shade.${this.name}`,
            location: 'src/ts/02-tokens/Tokens/Colour/ShadeMap/Colour_ShadeMap_Shade.ts:50',
        });
        this.hex = parsed.hex;
        this.hsl = parsed.hsl;
        this.rgb = parsed.rgb;
        this.lch = parsed.lch;
    }
    valueOf() {
        return {
            hex: this.hex,
            hsl: this.hsl,
            rgb: this.rgb,
            lch: this.lch,
        };
    }
    toJSON() {
        return this.valueOf();
    }
    toScssVars() {
        return `lch( ${this.lch.l} ${this.lch.c} ${this.lch.h} )`;
    }
}
/**
 * Utilities for the {@link Tokens} class.
 *
 * @since 0.1.0-alpha.draft
 * @internal
 */
(function (Tokens_Colour_ShadeMap_Shade) {
    /* SCHEMA
     * ====================================================================== */
    Tokens_Colour_ShadeMap_Shade.Schema_Hex = z.string().toUpperCase().regex(/^#?[0-9|A-H]{3,6}$/i);
    Tokens_Colour_ShadeMap_Shade.Schema_HSL = z.object({
        h: z.number().nonnegative().lte(360),
        s: z.number().nonnegative().lte(100),
        l: z.number().nonnegative().lte(100),
    });
    Tokens_Colour_ShadeMap_Shade.Schema_RGB = z.object({
        r: z.number().nonnegative().lte(255),
        g: z.number().nonnegative().lte(255),
        b: z.number().nonnegative().lte(255),
    });
    Tokens_Colour_ShadeMap_Shade.Schema_LCH = z.object({
        l: z.number().nonnegative().lte(100),
        c: z.number().safe(),
        h: z.number().safe(),
    });
    Tokens_Colour_ShadeMap_Shade.Schema = z.union([
        Tokens_Colour_ShadeMap_Shade.Schema_Hex,
        Tokens_Colour_ShadeMap_Shade.Schema_HSL,
        Tokens_Colour_ShadeMap_Shade.Schema_RGB,
        Tokens_Colour_ShadeMap_Shade.Schema_LCH,
        z.object({
            hex: Tokens_Colour_ShadeMap_Shade.Schema_Hex,
            hsl: Tokens_Colour_ShadeMap_Shade.Schema_HSL,
            rgb: Tokens_Colour_ShadeMap_Shade.Schema_RGB,
            lch: Tokens_Colour_ShadeMap_Shade.Schema_LCH,
        }),
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
    function toHex(clr) {
        const _hexValidator = (hex) => '#' + hex.replace(/^#/gi, '');
        // returns - plain
        if (typeof clr === 'string') {
            return _hexValidator(clr);
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
    Tokens_Colour_ShadeMap_Shade.toHex = toHex;
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
    Tokens_Colour_ShadeMap_Shade.toHSL = toHSL;
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
    Tokens_Colour_ShadeMap_Shade.toLCH = toLCH;
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
    Tokens_Colour_ShadeMap_Shade.toRGB = toRGB;
})(Tokens_Colour_ShadeMap_Shade || (Tokens_Colour_ShadeMap_Shade = {}));
//# sourceMappingURL=Colour_ShadeMap_Shade.js.map