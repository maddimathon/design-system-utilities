/**
 * @since 0.1.0-alpha.draft
 *
 * @packageDocumentation
 */
/*!
 * @maddimathon/design-system-utilities@0.1.0-alpha.draft
 * @license MIT
 */
import * as z from 'zod';
import { AbstractTokens } from '../../../abstracts/AbstractTokens.js';
/**
 * Generates a token object for the design system.
 *
 * @since 0.1.0-alpha.draft
 * @internal
 */
export declare class Tokens_Colour_ShadeMap_Shade extends AbstractTokens<typeof Tokens_Colour_ShadeMap_Shade.Schema, Tokens_Colour_ShadeMap_Shade.Parsed, Tokens_Colour_ShadeMap_Shade.Part, Tokens_Colour_ShadeMap_Shade.JSON, Tokens_Colour_ShadeMap_Shade.ScssVars> {
    readonly name: string;
    get schema(): z.ZodEffects<z.ZodUnion<[z.ZodString, z.ZodObject<{
        h: z.ZodNumber;
        s: z.ZodNumber;
        l: z.ZodNumber;
    }, "strip", z.ZodTypeAny, {
        h: number;
        s: number;
        l: number;
    }, {
        h: number;
        s: number;
        l: number;
    }>, z.ZodObject<{
        r: z.ZodNumber;
        g: z.ZodNumber;
        b: z.ZodNumber;
    }, "strip", z.ZodTypeAny, {
        r: number;
        g: number;
        b: number;
    }, {
        r: number;
        g: number;
        b: number;
    }>, z.ZodObject<{
        l: z.ZodNumber;
        c: z.ZodNumber;
        h: z.ZodNumber;
    }, "strip", z.ZodTypeAny, {
        h: number;
        l: number;
        c: number;
    }, {
        h: number;
        l: number;
        c: number;
    }>, z.ZodObject<{
        hex: z.ZodString;
        hsl: z.ZodObject<{
            h: z.ZodNumber;
            s: z.ZodNumber;
            l: z.ZodNumber;
        }, "strip", z.ZodTypeAny, {
            h: number;
            s: number;
            l: number;
        }, {
            h: number;
            s: number;
            l: number;
        }>;
        rgb: z.ZodObject<{
            r: z.ZodNumber;
            g: z.ZodNumber;
            b: z.ZodNumber;
        }, "strip", z.ZodTypeAny, {
            r: number;
            g: number;
            b: number;
        }, {
            r: number;
            g: number;
            b: number;
        }>;
        lch: z.ZodObject<{
            l: z.ZodNumber;
            c: z.ZodNumber;
            h: z.ZodNumber;
        }, "strip", z.ZodTypeAny, {
            h: number;
            l: number;
            c: number;
        }, {
            h: number;
            l: number;
            c: number;
        }>;
    }, "strip", z.ZodTypeAny, {
        hex: string;
        hsl: {
            h: number;
            s: number;
            l: number;
        };
        rgb: {
            r: number;
            g: number;
            b: number;
        };
        lch: {
            h: number;
            l: number;
            c: number;
        };
    }, {
        hex: string;
        hsl: {
            h: number;
            s: number;
            l: number;
        };
        rgb: {
            r: number;
            g: number;
            b: number;
        };
        lch: {
            h: number;
            l: number;
            c: number;
        };
    }>]>, {
        hex: z.infer<typeof Tokens_Colour_ShadeMap_Shade.Schema_Hex>;
        hsl: z.infer<typeof Tokens_Colour_ShadeMap_Shade.Schema_HSL>;
        rgb: z.infer<typeof Tokens_Colour_ShadeMap_Shade.Schema_RGB>;
        lch: z.infer<typeof Tokens_Colour_ShadeMap_Shade.Schema_LCH>;
    }, string | {
        h: number;
        s: number;
        l: number;
    } | {
        r: number;
        g: number;
        b: number;
    } | {
        h: number;
        l: number;
        c: number;
    } | {
        hex: string;
        hsl: {
            h: number;
            s: number;
            l: number;
        };
        rgb: {
            r: number;
            g: number;
            b: number;
        };
        lch: {
            h: number;
            l: number;
            c: number;
        };
    }>;
    readonly hex: Tokens_Colour_ShadeMap_Shade.Parsed['hex'];
    readonly hsl: Tokens_Colour_ShadeMap_Shade.Parsed['hsl'];
    readonly rgb: Tokens_Colour_ShadeMap_Shade.Parsed['rgb'];
    readonly lch: Tokens_Colour_ShadeMap_Shade.Parsed['lch'];
    constructor(name: string, input: z.input<typeof Tokens_Colour_ShadeMap_Shade.Schema> | z.output<typeof Tokens_Colour_ShadeMap_Shade.Schema>);
    valueOf(): Tokens_Colour_ShadeMap_Shade.Parsed;
    toJSON(): Tokens_Colour_ShadeMap_Shade.JSON;
    toScssVars(): Tokens_Colour_ShadeMap_Shade.ScssVars;
}
/**
 * Utilities for the {@link Tokens} class.
 *
 * @since 0.1.0-alpha.draft
 * @internal
 */
export declare namespace Tokens_Colour_ShadeMap_Shade {
    const Schema_Hex: z.ZodString;
    const Schema_HSL: z.ZodObject<{
        h: z.ZodNumber;
        s: z.ZodNumber;
        l: z.ZodNumber;
    }, "strip", z.ZodTypeAny, {
        h: number;
        s: number;
        l: number;
    }, {
        h: number;
        s: number;
        l: number;
    }>;
    const Schema_RGB: z.ZodObject<{
        r: z.ZodNumber;
        g: z.ZodNumber;
        b: z.ZodNumber;
    }, "strip", z.ZodTypeAny, {
        r: number;
        g: number;
        b: number;
    }, {
        r: number;
        g: number;
        b: number;
    }>;
    const Schema_LCH: z.ZodObject<{
        l: z.ZodNumber;
        c: z.ZodNumber;
        h: z.ZodNumber;
    }, "strip", z.ZodTypeAny, {
        h: number;
        l: number;
        c: number;
    }, {
        h: number;
        l: number;
        c: number;
    }>;
    const Schema: z.ZodEffects<z.ZodUnion<[z.ZodString, z.ZodObject<{
        h: z.ZodNumber;
        s: z.ZodNumber;
        l: z.ZodNumber;
    }, "strip", z.ZodTypeAny, {
        h: number;
        s: number;
        l: number;
    }, {
        h: number;
        s: number;
        l: number;
    }>, z.ZodObject<{
        r: z.ZodNumber;
        g: z.ZodNumber;
        b: z.ZodNumber;
    }, "strip", z.ZodTypeAny, {
        r: number;
        g: number;
        b: number;
    }, {
        r: number;
        g: number;
        b: number;
    }>, z.ZodObject<{
        l: z.ZodNumber;
        c: z.ZodNumber;
        h: z.ZodNumber;
    }, "strip", z.ZodTypeAny, {
        h: number;
        l: number;
        c: number;
    }, {
        h: number;
        l: number;
        c: number;
    }>, z.ZodObject<{
        hex: z.ZodString;
        hsl: z.ZodObject<{
            h: z.ZodNumber;
            s: z.ZodNumber;
            l: z.ZodNumber;
        }, "strip", z.ZodTypeAny, {
            h: number;
            s: number;
            l: number;
        }, {
            h: number;
            s: number;
            l: number;
        }>;
        rgb: z.ZodObject<{
            r: z.ZodNumber;
            g: z.ZodNumber;
            b: z.ZodNumber;
        }, "strip", z.ZodTypeAny, {
            r: number;
            g: number;
            b: number;
        }, {
            r: number;
            g: number;
            b: number;
        }>;
        lch: z.ZodObject<{
            l: z.ZodNumber;
            c: z.ZodNumber;
            h: z.ZodNumber;
        }, "strip", z.ZodTypeAny, {
            h: number;
            l: number;
            c: number;
        }, {
            h: number;
            l: number;
            c: number;
        }>;
    }, "strip", z.ZodTypeAny, {
        hex: string;
        hsl: {
            h: number;
            s: number;
            l: number;
        };
        rgb: {
            r: number;
            g: number;
            b: number;
        };
        lch: {
            h: number;
            l: number;
            c: number;
        };
    }, {
        hex: string;
        hsl: {
            h: number;
            s: number;
            l: number;
        };
        rgb: {
            r: number;
            g: number;
            b: number;
        };
        lch: {
            h: number;
            l: number;
            c: number;
        };
    }>]>, {
        hex: z.infer<typeof Schema_Hex>;
        hsl: z.infer<typeof Schema_HSL>;
        rgb: z.infer<typeof Schema_RGB>;
        lch: z.infer<typeof Schema_LCH>;
    }, string | {
        h: number;
        s: number;
        l: number;
    } | {
        r: number;
        g: number;
        b: number;
    } | {
        h: number;
        l: number;
        c: number;
    } | {
        hex: string;
        hsl: {
            h: number;
            s: number;
            l: number;
        };
        rgb: {
            r: number;
            g: number;
            b: number;
        };
        lch: {
            h: number;
            l: number;
            c: number;
        };
    }>;
    type Parsed = z.output<typeof Schema>;
    /**
     * The partialized version of the {@link Tokens_TEMPLATE.Schema} accepted as input.
     *
     * @since 0.1.0-alpha.draft
     */
    type Part = z.input<typeof Schema>;
    type JSON = Parsed;
    type ScssVars = string;
    function toHex(clr: Tokens_Colour_ShadeMap_Shade | z.input<typeof Schema>): z.infer<typeof Schema_Hex>;
    function toHSL(clr: Tokens_Colour_ShadeMap_Shade | z.input<typeof Schema>): z.infer<typeof Schema_HSL>;
    function toLCH(clr: Tokens_Colour_ShadeMap_Shade | z.input<typeof Schema>): z.infer<typeof Schema_LCH>;
    function toRGB(clr: Tokens_Colour_ShadeMap_Shade | z.input<typeof Schema>): z.infer<typeof Schema_RGB>;
}
//# sourceMappingURL=Colour_ShadeMap_Shade.d.ts.map