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
export declare class Tokens_Colour_ShadeMap_Shade extends AbstractTokens<typeof Tokens_Colour_ShadeMap_Shade.Schema, Tokens_Colour_ShadeMap_Shade.Export, Partial<Tokens_Colour_ShadeMap_Shade.Export>, Tokens_Colour_ShadeMap_Shade.JSON, Tokens_Colour_ShadeMap_Shade.ScssVars> {
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
        oklch: z.ZodObject<{
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
        oklch: {
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
        oklch: {
            h: number;
            l: number;
            c: number;
        };
    }>]>, {
        hex: z.infer<typeof Tokens_Colour_ShadeMap_Shade.Schema_Hex>;
        hsl: z.infer<typeof Tokens_Colour_ShadeMap_Shade.Schema_HSL>;
        rgb: z.infer<typeof Tokens_Colour_ShadeMap_Shade.Schema_RGB>;
        oklch: z.infer<typeof Tokens_Colour_ShadeMap_Shade.Schema_OKLCH>;
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
        oklch: {
            h: number;
            l: number;
            c: number;
        };
    }>;
    readonly hex: Tokens_Colour_ShadeMap_Shade.Export['hex'];
    readonly hsl: Tokens_Colour_ShadeMap_Shade.Export['hsl'];
    readonly rgb: Tokens_Colour_ShadeMap_Shade.Export['rgb'];
    readonly oklch: Tokens_Colour_ShadeMap_Shade.Export['oklch'];
    constructor(name: string, input: z.input<typeof Tokens_Colour_ShadeMap_Shade.Schema> | z.output<typeof Tokens_Colour_ShadeMap_Shade.Schema>);
    valueOf(): Tokens_Colour_ShadeMap_Shade.Export;
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
    const Schema_OKLCH: z.ZodObject<{
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
        oklch: z.ZodObject<{
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
        oklch: {
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
        oklch: {
            h: number;
            l: number;
            c: number;
        };
    }>]>, {
        hex: z.infer<typeof Schema_Hex>;
        hsl: z.infer<typeof Schema_HSL>;
        rgb: z.infer<typeof Schema_RGB>;
        oklch: z.infer<typeof Schema_OKLCH>;
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
        oklch: {
            h: number;
            l: number;
            c: number;
        };
    }>;
    interface Export extends z.output<typeof Schema> {
    }
    interface JSON extends Export {
    }
    type ScssVars = string;
}
//# sourceMappingURL=Colour_ShadeMap_Shade.d.ts.map