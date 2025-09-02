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
export declare const CSS: z.ZodObject<{
    border: z.ZodObject<{
        /**
         * Border radii for CSS.
         *
         * Default keys are '100', '200', '400'. After merging, values are
         * rounded with {@link AbstractTokens.roundToPixel} (factor = 32).
         */
        radius: z.ZodIntersection<z.ZodObject<{
            '100': z.ZodDefault<z.ZodNumber>;
            '200': z.ZodDefault<z.ZodNumber>;
            '400': z.ZodDefault<z.ZodNumber>;
        }, "strip", z.ZodTypeAny, {
            '100': number;
            '200': number;
            '400': number;
        }, {
            '100'?: number | undefined;
            '200'?: number | undefined;
            '400'?: number | undefined;
        }>, z.ZodRecord<z.ZodUnion<[z.ZodLiteral<"000">, z.ZodLiteral<"050">, z.ZodLiteral<"100">, z.ZodLiteral<"150">, z.ZodLiteral<"200">, z.ZodLiteral<"250">, z.ZodLiteral<"300">, z.ZodLiteral<"350">, z.ZodLiteral<"400">, z.ZodLiteral<"450">, z.ZodLiteral<"500">, z.ZodLiteral<"550">, z.ZodLiteral<"600">, z.ZodLiteral<"650">, z.ZodLiteral<"700">, z.ZodLiteral<"750">, z.ZodLiteral<"800">, z.ZodLiteral<"850">, z.ZodLiteral<"900">, z.ZodLiteral<"950">]>, z.ZodNumber>>;
        /**
         * Border widths for CSS.
         *
         * Default keys are '100', '200', '300', '400'. After merging, values
         * are rounded with {@link AbstractTokens.roundToPixel} (factor = 32).
         */
        width: z.ZodIntersection<z.ZodObject<{
            '100': z.ZodDefault<z.ZodNumber>;
            '200': z.ZodDefault<z.ZodNumber>;
            '300': z.ZodDefault<z.ZodNumber>;
            '400': z.ZodDefault<z.ZodNumber>;
        }, "strip", z.ZodTypeAny, {
            '100': number;
            '200': number;
            '300': number;
            '400': number;
        }, {
            '100'?: number | undefined;
            '200'?: number | undefined;
            '300'?: number | undefined;
            '400'?: number | undefined;
        }>, z.ZodRecord<z.ZodUnion<[z.ZodLiteral<"000">, z.ZodLiteral<"050">, z.ZodLiteral<"100">, z.ZodLiteral<"150">, z.ZodLiteral<"200">, z.ZodLiteral<"250">, z.ZodLiteral<"300">, z.ZodLiteral<"350">, z.ZodLiteral<"400">, z.ZodLiteral<"450">, z.ZodLiteral<"500">, z.ZodLiteral<"550">, z.ZodLiteral<"600">, z.ZodLiteral<"650">, z.ZodLiteral<"700">, z.ZodLiteral<"750">, z.ZodLiteral<"800">, z.ZodLiteral<"850">, z.ZodLiteral<"900">, z.ZodLiteral<"950">]>, z.ZodNumber>>;
        /**
         * Relative stroke widths for CSS. Meant to be used for underlines and
         * spacing. Written in css as em units.
         *
         * Default keys are '100', '200', '400', '600', '800', '900'. After
         * merging, values are rounded with {@link AbstractTokens.roundToPixel}
         * (factor = 32).
         */
        stroke: z.ZodIntersection<z.ZodObject<{
            '100': z.ZodDefault<z.ZodNumber>;
            '200': z.ZodDefault<z.ZodNumber>;
            '400': z.ZodDefault<z.ZodNumber>;
            '600': z.ZodDefault<z.ZodNumber>;
            '800': z.ZodDefault<z.ZodNumber>;
            '900': z.ZodDefault<z.ZodNumber>;
        }, "strip", z.ZodTypeAny, {
            '100': number;
            '200': number;
            '400': number;
            '600': number;
            '800': number;
            '900': number;
        }, {
            '100'?: number | undefined;
            '200'?: number | undefined;
            '400'?: number | undefined;
            '600'?: number | undefined;
            '800'?: number | undefined;
            '900'?: number | undefined;
        }>, z.ZodRecord<z.ZodUnion<[z.ZodLiteral<"000">, z.ZodLiteral<"050">, z.ZodLiteral<"100">, z.ZodLiteral<"150">, z.ZodLiteral<"200">, z.ZodLiteral<"250">, z.ZodLiteral<"300">, z.ZodLiteral<"350">, z.ZodLiteral<"400">, z.ZodLiteral<"450">, z.ZodLiteral<"500">, z.ZodLiteral<"550">, z.ZodLiteral<"600">, z.ZodLiteral<"650">, z.ZodLiteral<"700">, z.ZodLiteral<"750">, z.ZodLiteral<"800">, z.ZodLiteral<"850">, z.ZodLiteral<"900">, z.ZodLiteral<"950">]>, z.ZodNumber>>;
    }, "strip", z.ZodTypeAny, {
        radius: {
            '100': number;
            '200': number;
            '400': number;
        } & Partial<Record<"100" | "200" | "300" | "400" | "500" | "600" | "700" | "800" | "900" | "000" | "050" | "150" | "250" | "350" | "450" | "550" | "650" | "750" | "850" | "950", number>>;
        width: {
            '100': number;
            '200': number;
            '300': number;
            '400': number;
        } & Partial<Record<"100" | "200" | "300" | "400" | "500" | "600" | "700" | "800" | "900" | "000" | "050" | "150" | "250" | "350" | "450" | "550" | "650" | "750" | "850" | "950", number>>;
        stroke: {
            '100': number;
            '200': number;
            '400': number;
            '600': number;
            '800': number;
            '900': number;
        } & Partial<Record<"100" | "200" | "300" | "400" | "500" | "600" | "700" | "800" | "900" | "000" | "050" | "150" | "250" | "350" | "450" | "550" | "650" | "750" | "850" | "950", number>>;
    }, {
        radius: {
            '100'?: number | undefined;
            '200'?: number | undefined;
            '400'?: number | undefined;
        } & Partial<Record<"100" | "200" | "300" | "400" | "500" | "600" | "700" | "800" | "900" | "000" | "050" | "150" | "250" | "350" | "450" | "550" | "650" | "750" | "850" | "950", number>>;
        width: {
            '100'?: number | undefined;
            '200'?: number | undefined;
            '300'?: number | undefined;
            '400'?: number | undefined;
        } & Partial<Record<"100" | "200" | "300" | "400" | "500" | "600" | "700" | "800" | "900" | "000" | "050" | "150" | "250" | "350" | "450" | "550" | "650" | "750" | "850" | "950", number>>;
        stroke: {
            '100'?: number | undefined;
            '200'?: number | undefined;
            '400'?: number | undefined;
            '600'?: number | undefined;
            '800'?: number | undefined;
            '900'?: number | undefined;
        } & Partial<Record<"100" | "200" | "300" | "400" | "500" | "600" | "700" | "800" | "900" | "000" | "050" | "150" | "250" | "350" | "450" | "550" | "650" | "750" | "850" | "950", number>>;
    }>;
    transition: z.ZodObject<{
        /**
         * Transition time values for CSS.
         *
         * Default keys are 'fast', 'normal', 'slow'.
         */
        time: z.ZodIntersection<z.ZodObject<{
            fast: z.ZodDefault<z.ZodString>;
            normal: z.ZodDefault<z.ZodString>;
            slow: z.ZodDefault<z.ZodString>;
        }, "strip", z.ZodTypeAny, {
            fast: string;
            normal: string;
            slow: string;
        }, {
            fast?: string | undefined;
            normal?: string | undefined;
            slow?: string | undefined;
        }>, z.ZodRecord<z.ZodString, z.ZodString>>;
    }, "strip", z.ZodTypeAny, {
        time: {
            fast: string;
            normal: string;
            slow: string;
        } & Record<string, string>;
    }, {
        time: {
            fast?: string | undefined;
            normal?: string | undefined;
            slow?: string | undefined;
        } & Record<string, string>;
    }>;
    /**
     * Z-index values for CSS.
     *
     * Default keys are 'nav', 'settings', 'skipLink'.
     */
    zIndex: z.ZodObject<{
        nav: z.ZodDefault<z.ZodNumber>;
        settings: z.ZodDefault<z.ZodNumber>;
        skipLink: z.ZodDefault<z.ZodNumber>;
    }, "strip", z.ZodTypeAny, {
        nav: number;
        settings: number;
        skipLink: number;
    }, {
        nav?: number | undefined;
        settings?: number | undefined;
        skipLink?: number | undefined;
    }>;
}, "strip", z.ZodTypeAny, {
    border: {
        radius: {
            '100': number;
            '200': number;
            '400': number;
        } & Partial<Record<"100" | "200" | "300" | "400" | "500" | "600" | "700" | "800" | "900" | "000" | "050" | "150" | "250" | "350" | "450" | "550" | "650" | "750" | "850" | "950", number>>;
        width: {
            '100': number;
            '200': number;
            '300': number;
            '400': number;
        } & Partial<Record<"100" | "200" | "300" | "400" | "500" | "600" | "700" | "800" | "900" | "000" | "050" | "150" | "250" | "350" | "450" | "550" | "650" | "750" | "850" | "950", number>>;
        stroke: {
            '100': number;
            '200': number;
            '400': number;
            '600': number;
            '800': number;
            '900': number;
        } & Partial<Record<"100" | "200" | "300" | "400" | "500" | "600" | "700" | "800" | "900" | "000" | "050" | "150" | "250" | "350" | "450" | "550" | "650" | "750" | "850" | "950", number>>;
    };
    transition: {
        time: {
            fast: string;
            normal: string;
            slow: string;
        } & Record<string, string>;
    };
    zIndex: {
        nav: number;
        settings: number;
        skipLink: number;
    };
}, {
    border: {
        radius: {
            '100'?: number | undefined;
            '200'?: number | undefined;
            '400'?: number | undefined;
        } & Partial<Record<"100" | "200" | "300" | "400" | "500" | "600" | "700" | "800" | "900" | "000" | "050" | "150" | "250" | "350" | "450" | "550" | "650" | "750" | "850" | "950", number>>;
        width: {
            '100'?: number | undefined;
            '200'?: number | undefined;
            '300'?: number | undefined;
            '400'?: number | undefined;
        } & Partial<Record<"100" | "200" | "300" | "400" | "500" | "600" | "700" | "800" | "900" | "000" | "050" | "150" | "250" | "350" | "450" | "550" | "650" | "750" | "850" | "950", number>>;
        stroke: {
            '100'?: number | undefined;
            '200'?: number | undefined;
            '400'?: number | undefined;
            '600'?: number | undefined;
            '800'?: number | undefined;
            '900'?: number | undefined;
        } & Partial<Record<"100" | "200" | "300" | "400" | "500" | "600" | "700" | "800" | "900" | "000" | "050" | "150" | "250" | "350" | "450" | "550" | "650" | "750" | "850" | "950", number>>;
    };
    transition: {
        time: {
            fast?: string | undefined;
            normal?: string | undefined;
            slow?: string | undefined;
        } & Record<string, string>;
    };
    zIndex: {
        nav?: number | undefined;
        settings?: number | undefined;
        skipLink?: number | undefined;
    };
}>;
/**
 * The partialized version of the {@link CSS} accepted as input.
 *
 * @since 0.1.0-alpha.draft
 * @interface
 */
export interface Partial_CSS {
    border?: {
        radius?: Partial<z.infer<typeof CSS.shape.border.shape.radius>>;
        stroke?: Partial<z.infer<typeof CSS.shape.border.shape.stroke>>;
        width?: Partial<z.infer<typeof CSS.shape.border.shape.width>>;
    };
    transition?: {
        time?: Partial<z.infer<typeof CSS.shape.transition.shape.time>>;
    };
    zIndex?: Partial<z.infer<typeof CSS.shape.zIndex>>;
}
//# sourceMappingURL=css.d.ts.map