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
import type { ColourLevels, ColourLevels_Extended } from '../internal.docs.js';
/**
 * Utility functions, schemas, and types for dealing with colour values in the
 * system.
 *
 * @since 0.1.0-alpha.draft
 */
export declare namespace ColourUtilities {
    /**
     * A colour value in the Hex space.
     *
     * @since 0.1.0-alpha.draft
     */
    type Value_Hex = z.infer<typeof Value_Hex>;
    /** @hidden */
    const Value_Hex: z.ZodString;
    /**
     * A colour value in the HSL space.
     *
     * @since 0.1.0-alpha.draft
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
     * @since 0.1.0-alpha.draft
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
     * @since 0.1.0-alpha.draft
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
     * @since 0.1.0-alpha.draft
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
     * @since 0.1.0-alpha.draft
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
     * @since 0.1.0-alpha.draft
     * @useDeclaredType
     */
    type SingleShade_Input = z.input<typeof SingleShade>;
    /**
     * The parsed output of the {@link SingleShade} schema.
     *
     * @since 0.1.0-alpha.draft
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
    const LevelConverter: {
        readonly '100': "900";
        readonly '150': "850";
        readonly '200': "800";
        readonly '250': "750";
        readonly '300': "700";
        readonly '350': "650";
        readonly '400': "600";
        readonly '450': "550";
        readonly '500': "500";
        readonly '550': "450";
        readonly '600': "400";
        readonly '650': "350";
        readonly '700': "300";
        readonly '750': "250";
        readonly '800': "200";
        readonly '850': "150";
        readonly '900': "100";
    };
    function getDarkLevel<T_LightLevel extends ColourLevels | ColourLevels_Extended>(lightLevel: T_LightLevel): (typeof LevelConverter)[T_LightLevel];
    /**
     * @since 0.1.0-alpha.draft
     */
    function toHex(clr: {
        data: SingleShade;
    } | SingleShade | SingleShade_Input): Value_Hex;
    /**
     * @since 0.1.0-alpha.draft
     */
    function toHSL(clr: {
        data: SingleShade;
    } | SingleShade | SingleShade_Input, round?: boolean): Value_HSL;
    /**
     * @since 0.1.0-alpha.draft
     */
    function toLCH(clr: {
        data: SingleShade;
    } | SingleShade | SingleShade_Input): Value_LCH;
    /**
     * @since 0.1.0-alpha.draft
     */
    function toRGB(clr: {
        data: SingleShade;
    } | SingleShade | SingleShade_Input): Value_RGB;
    /**
     * @since 0.1.0-alpha.draft
     */
    function mixColours(_clrA: {
        data: SingleShade;
    } | SingleShade | SingleShade_Input, _clrB: {
        data: SingleShade;
    } | SingleShade | SingleShade_Input, saturationMultiplier?: number): Value_LCH;
    namespace toString {
        function hex(clr: {
            data: SingleShade;
        } | SingleShade | SingleShade_Input): string;
        function hsl(clr: {
            data: SingleShade;
        } | SingleShade | SingleShade_Input): string;
        function lch(clr: {
            data: SingleShade;
        } | SingleShade | SingleShade_Input): string;
        function rgb(clr: {
            data: SingleShade;
        } | SingleShade | SingleShade_Input): string;
    }
}
//# sourceMappingURL=ColourUtilities.d.ts.map