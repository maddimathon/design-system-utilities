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
import { AbstractTokens } from '../abstracts/AbstractTokens.js';
import type { Tokens_Spacing } from './Spacing.js';
/**
 * Generates a complete token object for the design system.
 *
 * @since 0.1.0-alpha.draft
 * @internal
 */
export declare class Tokens_Typography extends AbstractTokens<typeof Tokens_Typography.Schema, Tokens_Typography.Export, Tokens_Typography.Part, Tokens_Typography.JSON, Tokens_Typography.ScssVars> {
    protected tokens_spacing: Tokens_Spacing;
    get schema(): z.ZodObject<{
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
            normal: number;
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
            title?: number | undefined;
            normal?: number | undefined;
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
            normal: number;
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
            title?: number | undefined;
            normal?: number | undefined;
        };
    }>;
    /**
     * Line heights for the design system.
     *
     * Passed to utility-sass and used to compile a font size scale with
     * {@link Tokens_Spacing.multiplier}.
     */
    readonly lineHeight: Tokens_Typography.Export['lineHeight'];
    /**
     * Font sizes for the design system.
     *
     * Passed to utility-sass and used to compile a font size scale with
     * {@link Tokens_Spacing.multiplier}.
     */
    readonly size: Tokens_Typography.Export['size'];
    constructor(tokens_spacing: Tokens_Spacing, input?: Tokens_Typography.Part);
    export(): Tokens_Typography.Export;
    toScssVars(): {
        font: {
            size: {
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
                normal: number;
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
        line_height: {
            '100': number;
            '200': number;
            '300': number;
            '400': number;
            '500': number;
            '600': number;
        } & Partial<Record<"100" | "200" | "300" | "400" | "500" | "600" | "700" | "800" | "900" | "000" | "050" | "150" | "250" | "350" | "450" | "550" | "650" | "750" | "850" | "950", number>>;
    };
    toJSON(): Tokens_Typography.JSON;
}
/**
 * Utilities for the {@link Tokens} class.
 *
 * @since 0.1.0-alpha.draft
 * @internal
 */
export declare namespace Tokens_Typography {
    const Schema: z.ZodObject<{
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
            normal: number;
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
            title?: number | undefined;
            normal?: number | undefined;
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
            normal: number;
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
            title?: number | undefined;
            normal?: number | undefined;
        };
    }>;
    interface Export extends z.infer<typeof Schema> {
    }
    interface JSON extends Omit<z.infer<typeof Schema>, "size"> {
        size: {
            rem: z.infer<typeof Schema.shape.size>;
            pt: z.infer<typeof Schema.shape.size>;
            px: z.infer<typeof Schema.shape.size>;
        };
    }
    /**
     * The partialized version of the {@link Tokens_Typography.Schema} accepted
     * as input.
     *
     * @since 0.1.0-alpha.draft
     */
    interface Part extends Partial<z.infer<typeof Schema>> {
    }
    interface ScssVars {
        font: Omit<z.infer<typeof Schema>, "lineHeight">;
        line_height: z.infer<typeof Schema.shape.lineHeight>;
    }
}
//# sourceMappingURL=Typography.d.ts.map