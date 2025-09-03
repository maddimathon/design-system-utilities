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
/**
 * Generates a complete token object for the design system.
 *
 * @since 0.1.0-alpha.draft
 * @internal
 */
export declare class Tokens_Spacing extends AbstractTokens<typeof Tokens_Spacing.Schema, Tokens_Spacing.Parsed, Tokens_Spacing.Part, Tokens_Spacing.JSON, Tokens_Spacing.ScssVars> {
    get schema(): z.ZodObject<{
        multiplier: z.ZodDefault<z.ZodNumber>;
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
    readonly margin: Tokens_Spacing.Parsed['margin'];
    /**
     * Used for scaling various size sets relative to each other - e.g.,
     * margins, font sizes, line heights.
     */
    readonly multiplier: Tokens_Spacing.Parsed['multiplier'];
    constructor(input?: Tokens_Spacing.Part);
    toJSON(): {
        margin: {
            rem: {
                '100': number;
                '200': number;
                '300': number;
                '400': number;
                '600': number;
                '800': number;
                500?: number | undefined;
                700?: number | undefined;
                900?: number | undefined;
                "000"?: number | undefined;
                "050"?: number | undefined;
                150?: number | undefined;
                250?: number | undefined;
                350?: number | undefined;
                450?: number | undefined;
                550?: number | undefined;
                650?: number | undefined;
                750?: number | undefined;
                850?: number | undefined;
                950?: number | undefined;
            };
            pt: {
                '100': number;
                '200': number;
                '300': number;
                '400': number;
                '600': number;
                '800': number;
                500?: number | undefined;
                700?: number | undefined;
                900?: number | undefined;
                "000"?: number | undefined;
                "050"?: number | undefined;
                150?: number | undefined;
                250?: number | undefined;
                350?: number | undefined;
                450?: number | undefined;
                550?: number | undefined;
                650?: number | undefined;
                750?: number | undefined;
                850?: number | undefined;
                950?: number | undefined;
            };
            px: {
                '100': number;
                '200': number;
                '300': number;
                '400': number;
                '600': number;
                '800': number;
                500?: number | undefined;
                700?: number | undefined;
                900?: number | undefined;
                "000"?: number | undefined;
                "050"?: number | undefined;
                150?: number | undefined;
                250?: number | undefined;
                350?: number | undefined;
                450?: number | undefined;
                550?: number | undefined;
                650?: number | undefined;
                750?: number | undefined;
                850?: number | undefined;
                950?: number | undefined;
            };
        };
        multiplier: number;
    };
    toScssVars(): {
        margin: {
            '100': number;
            '200': number;
            '300': number;
            '400': number;
            '600': number;
            '800': number;
        } & Partial<Record<"100" | "200" | "300" | "400" | "500" | "600" | "700" | "800" | "900" | "000" | "050" | "150" | "250" | "350" | "450" | "550" | "650" | "750" | "850" | "950", number>>;
        spacing_multiplier: number;
    };
    valueOf(): Tokens_Spacing.Parsed;
}
/**
 * Utilities for the {@link Tokens} class.
 *
 * @since 0.1.0-alpha.draft
 * @internal
 */
export declare namespace Tokens_Spacing {
    const Schema: z.ZodObject<{
        multiplier: z.ZodDefault<z.ZodNumber>;
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
    type Parsed = z.infer<typeof Schema>;
    /**
     * The partialized version of the {@link Tokens_Spacing.Schema} accepted as
     * input.
     *
     * @since 0.1.0-alpha.draft
     */
    type Part = Partial<z.input<typeof Schema>>;
    type JSON = Omit<Parsed, "margin"> & {
        margin: {
            rem: z.infer<typeof Schema.shape.margin>;
            pt: z.infer<typeof Schema.shape.margin>;
            px: z.infer<typeof Schema.shape.margin>;
        };
    };
    type ScssVars = Omit<Parsed, "multiplier"> & {
        spacing_multiplier: number;
    };
}
//# sourceMappingURL=Spacing.d.ts.map