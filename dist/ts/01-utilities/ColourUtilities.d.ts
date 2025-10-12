/**
 * @since ___PKG_VERSION___
 *
 * @packageDocumentation
 */
/*!
 * @maddimathon/design-system-utilities@___CURRENT_VERSION___
 * @license MIT
 */
import * as z from 'zod';
/**
 * Utility functions, schemas, and types for dealing with colour values in the
 * system.
 *
 * @since ___PKG_VERSION___
 */
export declare namespace ColourUtilities {
    /**
     * A colour value in the Hex space.
     *
     * @since ___PKG_VERSION___
     */
    type Value_Hex = z.infer<typeof Value_Hex>;
    /** @hidden */
    const Value_Hex: z.ZodString;
    /**
     * A colour value in the HSL space.
     *
     * @since ___PKG_VERSION___
     */
    type Value_HSL = z.infer<typeof Value_HSL>;
    /** @hidden */
    const Value_HSL: z.ZodObject<{
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
    /**
     * A colour value in the RGB space.
     *
     * @since ___PKG_VERSION___
     */
    type Value_RGB = z.infer<typeof Value_RGB>;
    /** @hidden */
    const Value_RGB: z.ZodObject<{
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
    /**
     * A colour value in the LCH space.
     *
     * @since ___PKG_VERSION___
     */
    type Value_LCH = z.infer<typeof Value_LCH>;
    /** @hidden */
    const Value_LCH: z.ZodObject<{
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
    /**
     * Any of the single colour values.
     *
     * @since ___PKG_VERSION___
     */
    type Value = z.infer<typeof Value>;
    /** @hidden */
    const Value: z.ZodUnion<[z.ZodString, z.ZodObject<{
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
    }>]>;
    /**
     * All of the single colour values as an object.
     *
     * @since ___PKG_VERSION___
     */
    type Value_All = z.infer<typeof Value_All>;
    /** @hidden */
    const Value_All: z.ZodObject<{
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
    }>;
    /**
     * Allowed input for the {@link SingleShade} schema.
     *
     * @since ___PKG_VERSION___
     * @useDeclaredType
     */
    type SingleShade_Input = z.input<typeof SingleShade>;
    /**
     * The parsed output of the {@link SingleShade} schema.
     *
     * @since ___PKG_VERSION___
     * @useDeclaredType
     */
    type SingleShade = z.output<typeof SingleShade>;
    /** @private */
    const SingleShade: z.ZodEffects<z.ZodUnion<[z.ZodUnion<[z.ZodString, z.ZodObject<{
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
    }>]>, z.ZodObject<{
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
    /**
     * @since ___PKG_VERSION___
     */
    function toHex(clr: {
        data: SingleShade;
    } | SingleShade | SingleShade_Input): Value_Hex;
    /**
     * @since ___PKG_VERSION___
     */
    function toHSL(clr: {
        data: SingleShade;
    } | SingleShade | SingleShade_Input, round?: boolean): Value_HSL;
    /**
     * @since ___PKG_VERSION___
     */
    function toLCH(clr: {
        data: SingleShade;
    } | SingleShade | SingleShade_Input): Value_LCH;
    /**
     * @since ___PKG_VERSION___
     */
    function toRGB(clr: {
        data: SingleShade;
    } | SingleShade | SingleShade_Input): Value_RGB;
    /**
     * @since ___PKG_VERSION___
     */
    function mixColours(_clrA: {
        data: SingleShade;
    } | SingleShade | SingleShade_Input, _clrB: {
        data: SingleShade;
    } | SingleShade | SingleShade_Input, saturationMultiplier?: number): Value_LCH;
}
//# sourceMappingURL=ColourUtilities.d.ts.map