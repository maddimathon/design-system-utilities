/**
 * @since 0.1.0-alpha
 *
 * @packageDocumentation
 */
/*!
 * @maddimathon/design-system-utilities@0.1.1-alpha.1.draft
 * @license MIT
 */
import * as z from 'zod';
/**
 * Utility functions, schemas, and types for dealing with colour values in the
 * system.
 *
 * @since 0.1.0-alpha
 */
export declare namespace ColourUtilities {
    /**
     * A colour value in the Hex space.
     *
     * @since 0.1.0-alpha
     */
    type Value_Hex = z.infer<typeof Value_Hex>;
    /** @hidden */
    const Value_Hex: z.ZodString;
    /**
     * A colour value in the HSL space.
     *
     * @since 0.1.0-alpha
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
     * @since 0.1.0-alpha
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
     * @since 0.1.0-alpha
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
     * @since 0.1.0-alpha
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
     * @since 0.1.0-alpha
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
     * @since 0.1.0-alpha
     * @useDeclaredType
     */
    type SingleShade_Input = z.input<typeof SingleShade> | Readonly<z.input<typeof SingleShade>>;
    /**
     * The parsed output of the {@link SingleShade} schema.
     *
     * @since 0.1.0-alpha
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
     * @since 0.1.0-alpha
     */
    function toHex(clr: {
        data: SingleShade;
    } | SingleShade | SingleShade_Input): Value_Hex;
    /**
     * @since 0.1.0-alpha
     */
    function toHSL(clr: {
        data: SingleShade;
    } | SingleShade | SingleShade_Input, round?: boolean): Value_HSL;
    /**
     * @since 0.1.0-alpha
     */
    function toLCH(clr: {
        data: SingleShade;
    } | SingleShade | SingleShade_Input): Value_LCH;
    /**
     * @since 0.1.0-alpha
     */
    function toRGB(clr: {
        data: SingleShade;
    } | SingleShade | SingleShade_Input): Value_RGB;
    /**
     * @since 0.1.0-alpha
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
    /**
     * Utilities for dealing with shade level values.
     *
     * @since 0.1.1-alpha.0
     */
    namespace Levels {
        /**
         * A key index for converting colour made shade levels to their opposite
         * (e.g., dark to light modes).
         *
         * @since 0.1.0-alpha
         * @since 0.1.1-alpha.0 — Moved from {@link ColourUtilities} to {@link ColourUtilities.Levels} and renamed.
         */
        const converter: {
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
        /**
         * The shade level keys that can be optionally included in maps for this
         * system.
         *
         * @since 0.1.1-alpha.0
         */
        const optional: readonly ["350", "450", "550", "650"];
        /**
         * The shade level keys always included in maps for this system.
         *
         * @since 0.1.1-alpha.0
         */
        const required: readonly ["100", "150", "200", "250", "300", "400", "500", "600", "700", "750", "800", "850", "900"];
        /**
         * Shade levels that can be optionally included in maps for this system.
         *
         * @since 0.1.0-alpha — Introduced as a global `Levels.Optional` type in `02-tokens/@types.d.ts`.
         * @since 0.1.1-alpha.0 — Moved to {@link ColourUtilities.Levels} and renamed.
         */
        type Optional = typeof optional[number];
        /**
         * Shade levels always included in maps for this system.
         *
         * @since 0.1.0-alpha — Introduced as a global `Levels.Required` type in `02-tokens/@types.d.ts`.
         * @since 0.1.1-alpha.0 — Moved to {@link ColourUtilities.Levels} and renamed.
         */
        type Required = typeof required[number];
        /**
         * Converts the given shade level to its oppposite (via
         * {@link ColourUtilities.Levels.converter}).
         *
         * @since 0.1.0-alpha
         * @since 0.1.1-alpha.0 — Moved to {@link ColourUtilities.Levels} and renamed.
         */
        function toDark<T_LightLevel extends Levels.Required | Levels.Optional>(lightLevel: T_LightLevel): typeof converter[T_LightLevel];
    }
    /**
     * @since 0.1.0-alpha
     * @deprecated 0.1.1-alpha.0 — Use {@link ColourUtilities.Levels.converter} instead.
     */
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
    /**
     * @since 0.1.0-alpha
     * @deprecated 0.1.1-alpha.0 — Use {@link ColourUtilities.Levels.toDark} instead.
     */
    function getDarkLevel<T_LightLevel extends Levels.Required | Levels.Optional>(lightLevel: T_LightLevel): {
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
    }[T_LightLevel];
    /**
     * Utilities for working with shade maps (100-900 levels from light to dark).
     *
     * @since 0.1.1-alpha.0
     */
    namespace ShadeMaps {
        /**
         * @since 0.1.0-alpha
         */
        function getDarkLevel<T_LightLevel extends Levels.Required | Levels.Optional>(lightLevel: T_LightLevel): (typeof Levels.converter)[T_LightLevel];
    }
}
//# sourceMappingURL=ColourUtilities.d.ts.map