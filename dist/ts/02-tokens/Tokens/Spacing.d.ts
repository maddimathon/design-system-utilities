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
import * as Schemata from '../../00-schemata/index.js';
import { AbstractTokens } from '../abstracts/AbstractTokens.js';
/**
 * Generates a complete token object for the design system.
 *
 * @since 0.1.0-alpha.draft
 */
export declare class Tokens_Spacing extends AbstractTokens<typeof Schemata.Tokens.shape.spacing, Tokens_Spacing.Export, Schemata.PartialTokens.Spacing, Tokens_Spacing.JSON> {
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
    readonly margin: Tokens_Spacing.Export['margin'];
    readonly multiplier: Tokens_Spacing.Export['multiplier'];
    constructor(input?: Schemata.PartialTokens.Spacing);
    export(): Tokens_Spacing.Export;
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
    toScssVars(): Tokens_Spacing.Export;
}
/**
 * Utilities for the {@link Tokens} class.
 *
 * @since 0.1.0-alpha.draft
 */
export declare namespace Tokens_Spacing {
    interface Export extends z.infer<typeof Schemata.Tokens.shape.spacing> {
    }
    interface JSON extends Omit<z.infer<typeof Schemata.Tokens.shape.spacing>, "margin"> {
        margin: {
            rem: z.infer<typeof Schemata.Tokens.shape.spacing.shape.margin>;
            pt: z.infer<typeof Schemata.Tokens.shape.spacing.shape.margin>;
            px: z.infer<typeof Schemata.Tokens.shape.spacing.shape.margin>;
        };
    }
}
//# sourceMappingURL=Spacing.d.ts.map