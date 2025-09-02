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
import * as Tokens_CSS from './css.js';
/**
 * Complete schema for the design system tokens built using this package.
 *
 * @since 0.1.0-alpha.draft
 */
export declare const Tokens: z.ZodObject<{
    spacing: z.ZodObject<{
        /**
         * Used for scaling various size sets relative to each other - e.g.,
         * margins, font sizes, line heights.
         */
        multiplier: z.ZodDefault<z.ZodNumber>;
        /**
         * Passed to the $margins token in the utility-sass base template.
         *
         * To get these into usable values, put the
         * {@link Tokens.spacing.multiplier} to the power of the value and
         * multiply it by your base value.
         *
         * For example, to make rems in scss this looks like:
         * ```scss
         * @each $key, $size in tokens.$margin {
         *     $margin: map.set(
         *         $margin,
         *         $key,
         *         math.round-to-pixel(math.pow(tokens.$scale_multiplier, $size) * 1.25)
         *     );
         * }
         * ```
         */
        margin: z.ZodIntersection<z.ZodObject<{
            '100': z.ZodDefault<z.ZodNumber>;
            '200': z.ZodDefault<z.ZodNumber>;
            '300': z.ZodDefault<z.ZodNumber>;
            '400': z.ZodDefault<z.ZodNumber>;
            '600': z.ZodDefault<z.ZodNumber>;
            '800': z.ZodDefault<z.ZodNumber>;
        }, "strip", z.ZodTypeAny, {
            '100': number;
            '200': number;
            '300': number;
            '400': number;
            '600': number;
            '800': number;
        }, {
            '100'?: number | undefined;
            '200'?: number | undefined;
            '300'?: number | undefined;
            '400'?: number | undefined;
            '600'?: number | undefined;
            '800'?: number | undefined;
        }>, z.ZodRecord<z.ZodUnion<[z.ZodLiteral<"000">, z.ZodLiteral<"050">, z.ZodLiteral<"100">, z.ZodLiteral<"150">, z.ZodLiteral<"200">, z.ZodLiteral<"250">, z.ZodLiteral<"300">, z.ZodLiteral<"350">, z.ZodLiteral<"400">, z.ZodLiteral<"450">, z.ZodLiteral<"500">, z.ZodLiteral<"550">, z.ZodLiteral<"600">, z.ZodLiteral<"650">, z.ZodLiteral<"700">, z.ZodLiteral<"750">, z.ZodLiteral<"800">, z.ZodLiteral<"850">, z.ZodLiteral<"900">, z.ZodLiteral<"950">]>, z.ZodNumber>>;
    }, "strip", z.ZodTypeAny, {
        multiplier: number;
        margin: {
            '100': number;
            '200': number;
            '300': number;
            '400': number;
            '600': number;
            '800': number;
        } & Partial<Record<"100" | "200" | "300" | "400" | "500" | "600" | "700" | "800" | "900" | "000" | "050" | "150" | "250" | "350" | "450" | "550" | "650" | "750" | "850" | "950", number>>;
    }, {
        margin: {
            '100'?: number | undefined;
            '200'?: number | undefined;
            '300'?: number | undefined;
            '400'?: number | undefined;
            '600'?: number | undefined;
            '800'?: number | undefined;
        } & Partial<Record<"100" | "200" | "300" | "400" | "500" | "600" | "700" | "800" | "900" | "000" | "050" | "150" | "250" | "350" | "450" | "550" | "650" | "750" | "850" | "950", number>>;
        multiplier?: number | undefined;
    }>;
    typography: z.ZodObject<{
        lineHeight: z.ZodIntersection<z.ZodObject<{
            '100': z.ZodDefault<z.ZodNumber>;
            '200': z.ZodDefault<z.ZodNumber>;
            '300': z.ZodDefault<z.ZodNumber>;
            '400': z.ZodDefault<z.ZodNumber>;
            '500': z.ZodDefault<z.ZodNumber>;
            '600': z.ZodDefault<z.ZodNumber>;
        }, "strip", z.ZodTypeAny, {
            '100': number;
            '200': number;
            '300': number;
            '400': number;
            '500': number;
            '600': number;
        }, {
            '100'?: number | undefined;
            '200'?: number | undefined;
            '300'?: number | undefined;
            '400'?: number | undefined;
            '500'?: number | undefined;
            '600'?: number | undefined;
        }>, z.ZodRecord<z.ZodUnion<[z.ZodLiteral<"000">, z.ZodLiteral<"050">, z.ZodLiteral<"100">, z.ZodLiteral<"150">, z.ZodLiteral<"200">, z.ZodLiteral<"250">, z.ZodLiteral<"300">, z.ZodLiteral<"350">, z.ZodLiteral<"400">, z.ZodLiteral<"450">, z.ZodLiteral<"500">, z.ZodLiteral<"550">, z.ZodLiteral<"600">, z.ZodLiteral<"650">, z.ZodLiteral<"700">, z.ZodLiteral<"750">, z.ZodLiteral<"800">, z.ZodLiteral<"850">, z.ZodLiteral<"900">, z.ZodLiteral<"950">]>, z.ZodNumber>>;
        size: z.ZodObject<{
            title: z.ZodDefault<z.ZodNumber>;
            heading: z.ZodIntersection<z.ZodObject<{
                '1': z.ZodDefault<z.ZodNumber>;
                '2': z.ZodDefault<z.ZodNumber>;
                '3': z.ZodDefault<z.ZodNumber>;
                '4': z.ZodDefault<z.ZodNumber>;
                '5': z.ZodDefault<z.ZodNumber>;
                '6': z.ZodDefault<z.ZodNumber>;
            }, "strip", z.ZodTypeAny, {
                '1': number;
                '2': number;
                '3': number;
                '4': number;
                '5': number;
                '6': number;
            }, {
                '1'?: number | undefined;
                '2'?: number | undefined;
                '3'?: number | undefined;
                '4'?: number | undefined;
                '5'?: number | undefined;
                '6'?: number | undefined;
            }>, z.ZodRecord<z.ZodNumber, z.ZodNumber>>;
            smaller: z.ZodIntersection<z.ZodObject<{
                '2': z.ZodDefault<z.ZodNumber>;
                '1': z.ZodDefault<z.ZodNumber>;
            }, "strip", z.ZodTypeAny, {
                '1': number;
                '2': number;
            }, {
                '1'?: number | undefined;
                '2'?: number | undefined;
            }>, z.ZodRecord<z.ZodNumber, z.ZodNumber>>;
            normal: z.ZodDefault<z.ZodNumber>;
            bigger: z.ZodIntersection<z.ZodObject<{
                '1': z.ZodDefault<z.ZodNumber>;
                '2': z.ZodDefault<z.ZodNumber>;
                '3': z.ZodDefault<z.ZodNumber>;
                '4': z.ZodDefault<z.ZodNumber>;
                '5': z.ZodDefault<z.ZodNumber>;
                '6': z.ZodDefault<z.ZodNumber>;
            }, "strip", z.ZodTypeAny, {
                '1': number;
                '2': number;
                '3': number;
                '4': number;
                '5': number;
                '6': number;
            }, {
                '1'?: number | undefined;
                '2'?: number | undefined;
                '3'?: number | undefined;
                '4'?: number | undefined;
                '5'?: number | undefined;
                '6'?: number | undefined;
            }>, z.ZodRecord<z.ZodNumber, z.ZodNumber>>;
        }, "strip", z.ZodTypeAny, {
            normal: number;
            title: number;
            heading: {
                '1': number;
                '2': number;
                '3': number;
                '4': number;
                '5': number;
                '6': number;
            } & Record<number, number>;
            smaller: {
                '1': number;
                '2': number;
            } & Record<number, number>;
            bigger: {
                '1': number;
                '2': number;
                '3': number;
                '4': number;
                '5': number;
                '6': number;
            } & Record<number, number>;
        }, {
            heading: {
                '1'?: number | undefined;
                '2'?: number | undefined;
                '3'?: number | undefined;
                '4'?: number | undefined;
                '5'?: number | undefined;
                '6'?: number | undefined;
            } & Record<number, number>;
            smaller: {
                '1'?: number | undefined;
                '2'?: number | undefined;
            } & Record<number, number>;
            bigger: {
                '1'?: number | undefined;
                '2'?: number | undefined;
                '3'?: number | undefined;
                '4'?: number | undefined;
                '5'?: number | undefined;
                '6'?: number | undefined;
            } & Record<number, number>;
            normal?: number | undefined;
            title?: number | undefined;
        }>;
    }, "strip", z.ZodTypeAny, {
        lineHeight: {
            '100': number;
            '200': number;
            '300': number;
            '400': number;
            '500': number;
            '600': number;
        } & Partial<Record<"100" | "200" | "300" | "400" | "500" | "600" | "700" | "800" | "900" | "000" | "050" | "150" | "250" | "350" | "450" | "550" | "650" | "750" | "850" | "950", number>>;
        size: {
            normal: number;
            title: number;
            heading: {
                '1': number;
                '2': number;
                '3': number;
                '4': number;
                '5': number;
                '6': number;
            } & Record<number, number>;
            smaller: {
                '1': number;
                '2': number;
            } & Record<number, number>;
            bigger: {
                '1': number;
                '2': number;
                '3': number;
                '4': number;
                '5': number;
                '6': number;
            } & Record<number, number>;
        };
    }, {
        lineHeight: {
            '100'?: number | undefined;
            '200'?: number | undefined;
            '300'?: number | undefined;
            '400'?: number | undefined;
            '500'?: number | undefined;
            '600'?: number | undefined;
        } & Partial<Record<"100" | "200" | "300" | "400" | "500" | "600" | "700" | "800" | "900" | "000" | "050" | "150" | "250" | "350" | "450" | "550" | "650" | "750" | "850" | "950", number>>;
        size: {
            heading: {
                '1'?: number | undefined;
                '2'?: number | undefined;
                '3'?: number | undefined;
                '4'?: number | undefined;
                '5'?: number | undefined;
                '6'?: number | undefined;
            } & Record<number, number>;
            smaller: {
                '1'?: number | undefined;
                '2'?: number | undefined;
            } & Record<number, number>;
            bigger: {
                '1'?: number | undefined;
                '2'?: number | undefined;
                '3'?: number | undefined;
                '4'?: number | undefined;
                '5'?: number | undefined;
                '6'?: number | undefined;
            } & Record<number, number>;
            normal?: number | undefined;
            title?: number | undefined;
        };
    }>;
    CSS: z.ZodObject<{
        border: z.ZodObject<{
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
}, "strip", z.ZodTypeAny, {
    spacing: {
        multiplier: number;
        margin: {
            '100': number;
            '200': number;
            '300': number;
            '400': number;
            '600': number;
            '800': number;
        } & Partial<Record<"100" | "200" | "300" | "400" | "500" | "600" | "700" | "800" | "900" | "000" | "050" | "150" | "250" | "350" | "450" | "550" | "650" | "750" | "850" | "950", number>>;
    };
    typography: {
        lineHeight: {
            '100': number;
            '200': number;
            '300': number;
            '400': number;
            '500': number;
            '600': number;
        } & Partial<Record<"100" | "200" | "300" | "400" | "500" | "600" | "700" | "800" | "900" | "000" | "050" | "150" | "250" | "350" | "450" | "550" | "650" | "750" | "850" | "950", number>>;
        size: {
            normal: number;
            title: number;
            heading: {
                '1': number;
                '2': number;
                '3': number;
                '4': number;
                '5': number;
                '6': number;
            } & Record<number, number>;
            smaller: {
                '1': number;
                '2': number;
            } & Record<number, number>;
            bigger: {
                '1': number;
                '2': number;
                '3': number;
                '4': number;
                '5': number;
                '6': number;
            } & Record<number, number>;
        };
    };
    CSS: {
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
    };
}, {
    spacing: {
        margin: {
            '100'?: number | undefined;
            '200'?: number | undefined;
            '300'?: number | undefined;
            '400'?: number | undefined;
            '600'?: number | undefined;
            '800'?: number | undefined;
        } & Partial<Record<"100" | "200" | "300" | "400" | "500" | "600" | "700" | "800" | "900" | "000" | "050" | "150" | "250" | "350" | "450" | "550" | "650" | "750" | "850" | "950", number>>;
        multiplier?: number | undefined;
    };
    typography: {
        lineHeight: {
            '100'?: number | undefined;
            '200'?: number | undefined;
            '300'?: number | undefined;
            '400'?: number | undefined;
            '500'?: number | undefined;
            '600'?: number | undefined;
        } & Partial<Record<"100" | "200" | "300" | "400" | "500" | "600" | "700" | "800" | "900" | "000" | "050" | "150" | "250" | "350" | "450" | "550" | "650" | "750" | "850" | "950", number>>;
        size: {
            heading: {
                '1'?: number | undefined;
                '2'?: number | undefined;
                '3'?: number | undefined;
                '4'?: number | undefined;
                '5'?: number | undefined;
                '6'?: number | undefined;
            } & Record<number, number>;
            smaller: {
                '1'?: number | undefined;
                '2'?: number | undefined;
            } & Record<number, number>;
            bigger: {
                '1'?: number | undefined;
                '2'?: number | undefined;
                '3'?: number | undefined;
                '4'?: number | undefined;
                '5'?: number | undefined;
                '6'?: number | undefined;
            } & Record<number, number>;
            normal?: number | undefined;
            title?: number | undefined;
        };
    };
    CSS: {
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
    };
}>;
/**
 * The partialized version of the {@link Tokens} accepted as input.
 *
 * @since 0.1.0-alpha.draft
 * @interface
 */
export interface PartialTokens {
    spacing?: Partial<z.infer<typeof Tokens.shape.spacing>>;
    typography?: Partial<z.infer<typeof Tokens.shape.typography>>;
    css?: Tokens_CSS.Partial_CSS;
}
/**
 * Utilities for the {@link PartialTokens} interface.
 *
 * @since 0.1.0-alpha.draft
 */
export declare namespace PartialTokens {
    interface Spacing extends NonNullable<PartialTokens['spacing']> {
    }
    namespace Spacing {
        interface Margin extends NonNullable<Partial<NonNullable<PartialTokens['spacing']>['margin']>> {
        }
    }
    interface Typography extends NonNullable<PartialTokens['typography']> {
    }
    namespace Typography {
        interface LineHeight extends NonNullable<Partial<NonNullable<PartialTokens['typography']>['lineHeight']>> {
        }
        interface Size extends NonNullable<Partial<NonNullable<PartialTokens['typography']>['size']>> {
        }
    }
    interface CSS extends Tokens_CSS.Partial_CSS {
    }
    namespace CSS {
        interface Border extends NonNullable<Tokens_CSS.Partial_CSS['border']> {
        }
        interface Transition extends NonNullable<Tokens_CSS.Partial_CSS['transition']> {
        }
        interface ZIndex extends NonNullable<Tokens_CSS.Partial_CSS['zIndex']> {
        }
    }
}
//# sourceMappingURL=index.d.ts.map